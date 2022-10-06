import { TransactionData, TransactionResponse } from "../types/transactions";
import { api } from "./api";

export const transactions = {

    list: async () : Promise<TransactionResponse[]> => {
        return await api.get('/transactions')
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error.response
            })
    },

    create: async (data: TransactionData) : Promise<TransactionResponse> => {
        return await api.post('/transactions', data)
            .then(response => {
                return response.data
            })
            .catch(error => {
                throw error.response
            })
    }

}