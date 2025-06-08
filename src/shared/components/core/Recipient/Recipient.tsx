import { Text } from '@/shared/components/generic/Text/Text'
import { Transaction } from '@/entities/transaction/transaction'
import Image from 'next/image'

type TransactionProps = Pick<Transaction, 'user' | 'category'>

export interface RecipientProps {
  showCategory?: boolean
}

export function Recipient(props: TransactionProps & RecipientProps) {
  return (
    <div className="flex items-center gap-[16px]">
      <Image
        src={props.user.avatar}
        alt={props.user.name}
        width={32}
        height={32}
        className="w-[32px] h-[32px] bg-green rounded-full"
      />
      <div>
        <Text className="text-grey-900" variant="preset-4-bold">
          {props.user.name}
        </Text>
        {props.showCategory && <Text>{props.category}</Text>}
      </div>
    </div>
  )
}
