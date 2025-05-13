import { Button } from '@/components/generic/Button/Button'
import { Card } from '@/components/generic/Card/Card'
import { CardContent } from '@/components/generic/Card/CardContent'
import { CardHeader } from '@/components/generic/Card/CardHeader'
import { Icon } from '@/components/generic/Icons/Icon'
import { Text } from '@/components/generic/Text/Text'
import { TransactionItem } from './components/TransactionItem'

export interface Transaction {
  id: number
  name: string
  avatar: string
  amount: string
  transaction_date: string
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: 'João Silva',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    amount: 'R$ 150,00',
    transaction_date: '2025-05-12T10:15:00.000Z'
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    amount: 'R$ 320,50',
    transaction_date: '2025-05-11T14:30:00.000Z'
  },
  {
    id: 3,
    name: 'Carlos Souza',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    amount: 'R$ 89,90',
    transaction_date: '2025-05-10T08:45:00.000Z'
  },
  {
    id: 4,
    name: 'Ana Costa',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
    amount: 'R$ 1.200,00',
    transaction_date: '2025-05-09T17:20:00.000Z'
  },
  {
    id: 5,
    name: 'Lucas Almeida',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    amount: 'R$ 450,75',
    transaction_date: '2025-05-08T11:10:00.000Z'
  }
]

export function Transactions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <Text variant="preset-2" className="text-grey-900">
          Transactions
        </Text>
        <Button variant="tertiary" size="tertiary">
          View All
          <Icon name="ChevronRight" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-[20px] mt-[32px]">
        {transactions.map((item) => {
          return <TransactionItem {...item} key={item.id} />
        })}
      </CardContent>
    </Card>
  )
}
