import { Text } from '@/components/generic/Text/Text'

export function TransactionItem() {
  return (
    <div className="h-[68px] not-last:border-b not-last:border-b-grey-100 flex items-center justify-between">
      <div className="flex items-center gap-[16px]">
        <div className="w-[32px] h-[32px] bg-green rounded-full" />
        <Text className="text-grey-900" variant="preset-4-bold">
          Emma Richardson
        </Text>
      </div>
      <div>
        <Text variant="preset-4-bold" className="text-green">
          +
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(75.5)}
        </Text>
        <Text variant="preset-5">
          {new Date().toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })}
        </Text>
      </div>
    </div>
  )
}
