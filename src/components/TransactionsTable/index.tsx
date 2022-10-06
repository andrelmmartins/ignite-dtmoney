import { useTransactionContext } from "../../hooks/useTransactionContext";
import { Container } from "./styles";

export function TransactionTable() {

    const { transactions } = useTransactionContext()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction, index) => {

                            let currency = new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)

                            let date = new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))

                            return (
                                <tr key={'transaction-' + index}>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type}>
                                        {transaction.type === 'withdraw' && '-'} {currency}</td>
                                    <td>{transaction.category}</td>
                                    <td>{date}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}