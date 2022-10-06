export type TransactionData = {
    title: string
    amount: number
    type: 'deposit' | 'withdraw'
    category: string
}

export type TransactionResponse = {
    id: number
    title: string
    amount: number
    type: 'deposit' | 'withdraw'
    category: string
    createdAt: string
}