import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Transactions {
  id: number
  type: 'income' | 'outcome'
  category: string
  description: string
  price: number
  createdAt: string
}
interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
interface TransactionContextType {
  transactions: Transactions[]
  fetchtransactions: (query: string) => Promise<void>
  createTransactions: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transactions[]>([])

  const fetchtransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransaction(response.data)
  }, [])

  const createTransactions = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, type, category, price } = data

      const response = await api.post('transactions', {
        description,
        type,
        category,
        price,
        createdAt: new Date(),
      })
      setTransaction((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchtransactions()
  }, [fetchtransactions])
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchtransactions,
        createTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
