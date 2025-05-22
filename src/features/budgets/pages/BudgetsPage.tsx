import { Card } from '@/components/generic/Card/Card'
import { DataInfo } from '@/components/generic/DataInfo/DataInfo'
import { Text } from '@/components/generic/Text/Text'

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

interface SummaryItemProps {
  name: string
  amount: number
  limit: number
}

function SummaryItem({ amount, limit, name }: SummaryItemProps) {
  return (
    <DataInfo
      className="not-last:border-b not-last:border-b-grey-100 py-[16px] flex items-baseline justify-between"
      color="yellow"
      size="small"
    >
      <Text className="pl-[16px]" variant="preset-4" asChild>
        <span>{name}</span>
      </Text>
      <div className="inline-flex items-center gap-[8px]">
        <Text className="text-grey-900" variant="preset-3" asChild>
          <span>{amount}</span>
        </Text>
        <Text variant="preset-5" asChild>
          <span>of {limit}</span>
        </Text>
      </div>
    </DataInfo>
  )
}

function SpendingSummary() {
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

interface BarProgressProps {
  spent: number
  maximum: number
}

function BarProgress({ spent, maximum }: BarProgressProps) {
  const total = (spent / maximum) * 100
  const percentage = maximum > 0 ? total : 0

  return (
    <div className="bg-beige-100 h-[32px] p-[4px] rounded-md">
      <div
        style={{ width: `${total > 100 ? 100 : percentage}%` }}
        className="bg-green h-[24px] rounded-md transition-[width] delay-500"
      />
    </div>
  )
}

function LatestSpendingItem() {
  return (
    <div className="h-[53px] flex items-center justify-between not-last:border-b not-last:border-b-grey-500/10">
      <Text className="text-grey-900" variant="preset-5-bold">
        Papa Software
      </Text>
      <div>
        <Text className="text-grey-900" variant="preset-5-bold">
          10
        </Text>
        <Text variant="preset-5">16 Aug 2024</Text>
      </div>
    </div>
  )
}

function SpendingDetail() {
  return (
    <Card>
      <div className="flex items-center">
        <div className="flex items-center gap-[16px]">
          <div className="w-[16px] h-[16px] bg-green rounded-full" />
          <Text className="text-grey-900" variant="preset-2" asChild>
            <h3>Entertainment</h3>
          </Text>
        </div>
      </div>
      <div className="mt-[20px]">
        <Text variant="preset-4" className="mb-[16px]">
          Maximum of $750.00
        </Text>
        <BarProgress maximum={78} spent={10} />
        <div className="flex justify-between">
          <DataInfo className="mt-[16px] min-w-[143px] flex-1" color="yellow">
            <div className="ml-[16px] flex flex-col gap-[4px] justify-between">
              <Text variant="preset-5">Spent</Text>
              <Text variant="preset-4-bold" className="text-grey-900">
                $250
              </Text>
            </div>
          </DataInfo>
          <DataInfo className="mt-[16px] flex-1" color="yellow">
            <div className="ml-[16px] flex flex-col gap-[4px] justify-between">
              <Text variant="preset-5">Spent</Text>
              <Text variant="preset-4-bold" className="text-grey-900">
                $250
              </Text>
            </div>
          </DataInfo>
        </div>
        <div className="bg-beige-100 p-[16px] mt-[20px] rounded-lg">
          <div className="flex items-center justify-between">
            <Text variant="preset-3">Latest Spending</Text>
            <Text>See All</Text>
          </div>
          <div className="mt-[20px]">
            <LatestSpendingItem />
            <LatestSpendingItem />
            <LatestSpendingItem />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function BudgetsPage() {
  return (
    <div className="bg-beige-100">
      <Text className="mb-[32px] text-grey-900" variant="preset-1" asChild>
        <h1>Budgets</h1>
      </Text>
      <div className="flex flex-col gap-[24px] xl:flex-row">
        <div className="flex-[1.3]">
          <SpendingSummary />
        </div>
        <div className="flex-[2] space-y-[24px]">
          <SpendingDetail />
          <SpendingDetail />
          <SpendingDetail />
          <SpendingDetail />
        </div>
      </div>
    </div>
  )
}
