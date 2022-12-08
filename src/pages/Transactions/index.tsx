import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return(
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Software development</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 23.000,00
                </PriceHighlight>
              </td>
              <td>Sales</td>
              <td>12/02/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">
                  R$ 28,00
                </PriceHighlight>
              </td>
              <td>Food</td>
              <td>09/02/2023</td>
            </tr>
            
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}