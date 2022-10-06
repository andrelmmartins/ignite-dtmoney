import { createContext, useEffect, useState } from "react";
import { transactions as transactionsAPI } from '../services/transactions'
import { TransactionData, TransactionResponse } from "../utils/types/transactions";

interface ContextProps {
    transactions: TransactionResponse[]
    create: (data: TransactionData) => Promise<void>
}

export const TransactionContext = createContext<ContextProps>({} as ContextProps)

export function TransactionProvider(props: { children: React.ReactNode }) {

    const [ transactions, setTransactions ] = useState<TransactionResponse[]>([])

    async function create(data: TransactionData) {
        try {
            let newTransaction = await transactionsAPI.create(data)
            setTransactions([
                ...transactions,
                newTransaction
            ])
        } catch(e) {
            console.log('Tivemos algum erro!', e)
        }
    }

    async function load() {
        try {
            setTransactions(
                await transactionsAPI.list()
            )
        } catch(e) {
            console.log('Tivemos algum erro!', e)
        }
    }

    useEffect(() => {
        load()
    }, [])

    return (
        <TransactionContext.Provider value={{
            transactions,
            create
        }}>
            {props.children}
        </TransactionContext.Provider>
    )
}