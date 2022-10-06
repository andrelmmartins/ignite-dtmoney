import { useTransactionContext } from "../../hooks/useTransactionContext";
import { format } from "../../utils/format";
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
                            return (
                                <tr key={'transaction-' + index}>
                                    <td>{transaction.title}</td>
                                    <td className={transaction.type}>
                                        {transaction.type === 'withdraw' && '-'} {format.currency(transaction.amount)}</td>
                                    <td>{transaction.category}</td>
                                    <td>{format.date(new Date(transaction.createdAt))}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>
    )
}