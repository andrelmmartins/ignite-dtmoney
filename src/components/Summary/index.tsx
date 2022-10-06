import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { useTransactionContext } from '../../hooks/useTransactionContext';
import { format } from '../../utils/format';

import { Card, Container } from "./styles";

export function Summary() {
    
    const { transactions } = useTransactionContext()
    
    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <Card type='income'>
                <header>
                    <p>Entradas</p>
                    <img src={income} alt="Entradas"/>
                </header>
                <h4>{format.currency(summary.deposits)}</h4>
            </Card>

            <Card type='outcome'>
                <header>
                    <p>Saídas</p>
                    <img src={outcome} alt="Entradas"/>
                </header>
                <h4>- {format.currency(summary.withdraws)}</h4>
            </Card>

            <Card type='result' showInRed={summary.total < 0}>
                <header>
                    <p>Total</p>
                    <img src={total} alt="Entradas"/>
                </header>
                <h4>{format.currency(summary.total)}</h4>
            </Card>
        </Container>
    )
}