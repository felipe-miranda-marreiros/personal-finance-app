import { DataInfo } from '@/components/generic/DataInfo/DataInfo'
import { Text } from '@/components/generic/Text/Text'

interface SummaryItemProps {
  name: string
  amount: number
  limit: number
}

export function SummaryItem({ amount, limit, name }: SummaryItemProps) {
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
