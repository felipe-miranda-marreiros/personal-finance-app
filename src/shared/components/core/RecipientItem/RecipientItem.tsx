import { Text } from '@/shared/components/generic/Text/Text'
import { Transaction } from '@/entities/transaction/transaction'
import { Recipient, RecipientProps } from '../Recipient/Recipient'

export function RecipientItem(props: Transaction & RecipientProps) {
  return (
    <div className="h-[68px] not-last:border-b not-last:border-b-grey-100 flex items-center justify-between">
      <Recipient
        showCategory={props.showCategory}
        avatar={props.avatar}
        category={props.category}
        name={props.name}
      />
      <div className="text-right">
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
