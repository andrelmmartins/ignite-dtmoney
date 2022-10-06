export const format = {
    currency: (amount: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(amount)
    },

    date: (date: Date) => {
        return new Intl.DateTimeFormat('pt-BR').format(date)
    }
}