import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";


interface Transactions {
  id: number;
  type: 'income' | 'outcome';
  category: string;
  description: string;
  price: number;
  createAt: string;

}
interface TransactionContextType {
	transactions: Transactions[];
  fetchtransactions: (query: string)=> Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);


interface TransactionsProviderProps{
	children: ReactNode;
}
export function TransactionsProvider({children}: TransactionsProviderProps){
	const[transactions, setTransaction]= useState<Transactions[]>([])

  async function fetchtransactions(query?: string){
    const response = await api.get('/transactions', {
      params: {
        q: query,
      }
    })
    setTransaction(response.data)
  }
  useEffect(()=> {
    fetchtransactions();
  },[])
	return(
		<TransactionsContext.Provider value={{
      transactions,
      fetchtransactions
      }}>
			{children}
		</TransactionsContext.Provider>
	)
}