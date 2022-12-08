import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"

export function Summary(){
	return(
		<SummaryContainer>
			<SummaryCard>
				<header>
					<span>Cash in</span>
					<ArrowCircleUp size={32} color="#00b37e" />
				</header>
				<strong>R$ 17.400,00</strong>
			</SummaryCard>

			<SummaryCard>
				<header>
					<span>Cash out</span>
					<ArrowCircleDown size={32} color="#f75a68" />
				</header>
				<strong>R$ 1.400,00</strong>
			</SummaryCard>

			<SummaryCard variant="green">
				<header>
					<span>Total</span>
					<CurrencyDollar size={32} color="#fff" />
				</header>
				<strong>R$ 16.000,00</strong>
			</SummaryCard>
		</SummaryContainer>
	)
}