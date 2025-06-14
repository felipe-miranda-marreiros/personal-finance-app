import { Content } from '@features/Dashboard/Content'
import { User } from '../user/user'

export interface Transaction {
  id: number
  user: User
  amount: string
  transaction_date: string
  category: string
}

console.log(Content)
