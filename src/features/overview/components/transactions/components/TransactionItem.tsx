import { Text } from '@/components/generic/Text/Text'
import { Transaction } from '../Transactions'
import Image from 'next/image'

export function TransactionItem(props: Transaction) {
  return (
    <div className="h-[68px] not-last:border-b not-last:border-b-grey-100 flex items-center justify-between">
      <div className="flex items-center gap-[16px]">
        <Image
          src={props.avatar}
          alt={props.name}
          width={32}
          height={32}
          className="w-[32px] h-[32px] bg-green rounded-full"
        />
        <Text className="text-grey-900" variant="preset-4-bold">
          {props.name}
        </Text>
      </div>
      <div>
        <Text variant="preset-4-bold" className="text-green">
          +{props.amount}
        </Text>
        <Text variant="preset-5">
          {new Date(props.transaction_date).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })}
        </Text>
      </div>
    </div>
  )
}
