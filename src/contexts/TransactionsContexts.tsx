import { Children, createContext, ReactNode, useEffect, useState } from "react";


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
}

export const TransactionsContext = createContext({} as TransactionContextType);


interface TransactionsProviderProps{
	children: ReactNode;
}
export function TransactionsProvider({children}: TransactionsProviderProps){
	const[transactions, setTransaction]= useState<Transactions[]>([])

  async function loadtransactions(){
    const response = await fetch('http://localhost:3000/transactions')
    const data = await response.json()
    setTransaction(data)
  }
  useEffect(()=> {
    loadtransactions();
  },[])
	return(
		<TransactionsContext.Provider value={{transactions}}>
			{children}
		</TransactionsContext.Provider>
	)
}