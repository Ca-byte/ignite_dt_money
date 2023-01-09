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
  fetchtransactions: (query: string)=> Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);


interface TransactionsProviderProps{
	children: ReactNode;
}
export function TransactionsProvider({children}: TransactionsProviderProps){
	const[transactions, setTransaction]= useState<Transactions[]>([])

  async function fetchtransactions(query?: string){
    const url = new URL('http://localhost:3000/transactions')

    if(query){
      url.searchParams.append('q', query);
    }
    const response = await fetch(url)
    const data = await response.json()
    setTransaction(data)
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