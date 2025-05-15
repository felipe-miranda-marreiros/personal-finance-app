import { Transaction } from './transaction'

export const transactions: Transaction[] = [
  {
    id: 1,
    name: 'João Silva',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    amount: '$150.00',
    transaction_date: '2025-05-12T10:15:00.000Z',
    category: 'Food'
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    amount: '$320.50',
    transaction_date: '2025-05-11T14:30:00.000Z',
    category: 'Transport'
  },
  {
    id: 3,
    name: 'Carlos Souza',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    amount: '$89.90',
    transaction_date: '2025-05-10T08:45:00.000Z',
    category: 'Entertainment'
  },
  {
    id: 4,
    name: 'Ana Costa',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    amount: '$1,200.00',
    transaction_date: '2025-05-09T17:20:00.000Z',
    category: 'Rent'
  },
  {
    id: 5,
    name: 'Lucas Almeida',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    amount: '$450.75',
    transaction_date: '2025-05-08T11:10:00.000Z',
    category: 'Shopping'
  }
]
