import { HeaderContainer, HeaderContent, NewTransactionBtn } from "./styles";
import logoImg from '../../assets/ignite-dt-money-logo.svg'
import * as Dialog from '@radix-ui/react-dialog';

export function Header(){
	return(
		<HeaderContainer>
			<HeaderContent>
				<img src={logoImg} alt=""/>
				<Dialog.Root>
          <Dialog.Trigger asChild>
					  <NewTransactionBtn>New Transaction</NewTransactionBtn>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>New Transaction</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>

				</Dialog.Root>
			</HeaderContent>
		</HeaderContainer>
	)
}