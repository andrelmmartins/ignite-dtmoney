import { createServer, Model } from 'miragejs'

export const startServer = () => createServer({

    models: {
      transaction: Model,
    },
  
    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelance de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2022-10-05 09:00:00').toDateString()
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Casa',
            amount: 7000,
            createdAt: new Date('2022-10-05 09:00:00').toDateString()
          },
        ]
      })
    },
  
    routes() {
      this.namespace = 'api';
  
      this.get('/transactions', () => {
        return this.schema.all('transaction').models;
      })
  
      this.post('/transactions', (schema, request) => {
        const data = {
            ...JSON.parse(request.requestBody),
            createdAt: new Date()
        }
        return schema.create('transaction', data).attrs
      })
  
    }

})