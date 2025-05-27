import { Card } from '@/components/generic/Card/Card'
import { Text } from '@/components/generic/Text/Text'
import { SummaryItem } from './SpendingItem'

interface Spending {
  name: string
  amount: number
  limit: number
}

const spendings: Spending[] = [
  {
    name: 'Food',
    amount: 850.5,
    limit: 1000.0
  },
  {
    name: 'Transportation',
    amount: 300.0,
    limit: 400.0
  },
  {
    name: 'Entertainment',
    amount: 120.75,
    limit: 200.0
  },
  {
    name: 'Education',
    amount: 950.0,
    limit: 1000.0
  }
]

export function SpendingSummary() {
  return (
    <Card className="flex flex-col sm:flex-row sm:items-center xl:flex-col xl:items-stretch gap-[32px]">
      <div className="flex-2">
        <div className="w-full h-[280px] bg-green rounded-lg"></div>
      </div>
      <div className="flex-2">
        <Text className="text-grey-900 mb-[24px]" variant="preset-2" asChild>
          <h2>Spending Summary</h2>
        </Text>
        <div>
          {spendings.map((item) => {
            return <SummaryItem key={item.name} {...item} />
          })}
        </div>
      </div>
    </Card>
  )
}
