import { Text } from '@shared/components/generic/Text/Text'

export function RecurringBillItem() {
  return (
    <div className="flex items-center rounded-r-lg px-[16px] justify-between h-[61px] bg-beige-100">
      <Text>Paid Bills</Text>
      <Text className="text-grey-900" variant="preset-4-bold">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(850)}
      </Text>
    </div>
  )
}
