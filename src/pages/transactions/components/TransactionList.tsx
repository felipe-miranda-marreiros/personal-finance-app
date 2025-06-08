import { RecipientProps } from '@/shared/components/core/Recipient/Recipient'
import { RecipientItem } from '@/shared/components/core/RecipientItem/RecipientItem'
import { transactions } from '@/entities/transaction/mocks'

export function TransactionList(props: RecipientProps) {
  return (
    <div>
      {transactions.map((item) => {
        return <RecipientItem {...item} showCategory={props.showCategory} key={item.id} />
      })}
    </div>
  )
}
