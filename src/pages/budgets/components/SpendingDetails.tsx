import { Card } from '@/shared/components/generic/Card/Card'
import { Text } from '@/shared/components/generic/Text/Text'
import { BarProgress } from './BarProgress'
import { DataInfo } from '@/shared/components/generic/DataInfo/DataInfo'
import { LatestSpendingItem } from './LatestSpendingItem'

export function SpendingDetails() {
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
