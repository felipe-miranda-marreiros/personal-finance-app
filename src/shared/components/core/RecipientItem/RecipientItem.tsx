import { Text } from '@shared/components/generic/Text/Text'
import { Recipient } from '../Recipient/Recipient'

interface RecipientItemProps {
  category: string
  amount: string
  transaction_date: string
  showCategory: boolean
  avatar: string
  name: string
}

export function RecipientItem(props: RecipientItemProps) {
  return (
    <div className="h-[68px] not-last:border-b not-last:border-b-grey-100 flex items-center justify-between">
      <Recipient
        avatar={props.avatar}
        name={props.name}
        showCategory={props.showCategory}
        category={props.category}
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
