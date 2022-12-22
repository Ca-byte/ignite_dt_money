import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transactions {
  id: number;
  type: 'income' | 'outcome';
  category: string;
  description: string;
  price: number;
  createAt: string;

}

export function Transactions(){
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
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
      <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return(
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      R${transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}