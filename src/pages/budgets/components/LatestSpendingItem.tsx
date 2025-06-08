import { Text } from '@/shared/components/generic/Text/Text'

export function LatestSpendingItem() {
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
