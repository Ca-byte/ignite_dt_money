import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";
import logoImg from '../../assets/ignite-dt-money-logo.svg'

export function Header(){
	return(
		<HeaderContainer>
			<HeaderContent>
				<img src={logoImg} alt=""/>
				<NewTransactionBtn>New Transaction</NewTransactionBtn>
			</HeaderContent>
		</HeaderContainer>
	)
}