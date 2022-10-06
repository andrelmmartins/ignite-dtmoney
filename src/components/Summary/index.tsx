import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useTransactionContext } from '../../hooks/useTransactionContext';

import { Card, Container } from "./styles";

export function Summary() {
    
    const { sumDeposits, sumWithDraws } = useTransactionContext()
    
    return (
        <Container>
            <Card type='income'>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas"/>
                </header>
                <h4>R$ <strong>{sumDeposits}</strong>,00</h4>
            </Card>

            <Card type='outcome'>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Entradas"/>
                </header>
                <h4>- R$ <strong>{sumWithDraws}</strong>,00</h4>
            </Card>

            <Card type='result' showInRed={sumDeposits - sumWithDraws < 0}>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas"/>
                </header>
                <h4>R$ <strong>{sumDeposits - sumWithDraws}</strong>,00</h4>
            </Card>
        </Container>
    )
}