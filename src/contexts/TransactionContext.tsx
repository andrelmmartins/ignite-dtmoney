import { createContext, useEffect, useState } from "react";
import { transactions as transactionsAPI } from '../services/transactions'
import { TransactionData, TransactionResponse } from "../types/transactions";

interface ContextProps {
    transactions: TransactionResponse[]
    sumDeposits: number
    sumWithDraws: number

    create: (data: TransactionData) => Promise<void>
}

export const TransactionContext = createContext<ContextProps>({} as ContextProps)

export function TransactionProvider(props: { children: React.ReactNode }) {

    const [ transactions, setTransactions ] = useState<TransactionResponse[]>([])
    const [ sumDeposits, setSumDeposits ] = useState(0)
    const [ sumWithDraws, setSumWithDraws ] = useState(0)

    async function create(data: TransactionData) {
        try {
            await transactionsAPI.create(data)
            await load()
        } catch(e) {
            console.log('Tivemos algum erro!', e)
        }
    }

    async function load() {
        try {
            
            let list = await transactionsAPI.list()
            let sumDeposits = 0
            let sumWithDraws = 0

            list.forEach((transaction) => {
                if(transaction.type === 'deposit') sumDeposits += transaction.amount
                else if(transaction.type === 'withdraw') sumWithDraws += transaction.amount
            })            

            setTransactions(list)
            setSumDeposits(sumDeposits)
            setSumWithDraws(sumWithDraws)

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
            sumDeposits,
            sumWithDraws,
            create
        }}>
            {props.children}
        </TransactionContext.Provider>
    )
}