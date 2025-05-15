import { RecipientProps } from '@/components/core/Recipient/Recipient'
import { RecipientItem } from '@/components/core/RecipientItem/RecipientItem'
import { transactions } from '@/models/transaction/mocks'

export function TransactionList(props: RecipientProps) {
  return (
    <div>
      {transactions.map((item) => {
        return <RecipientItem {...item} showCategory={props.showCategory} key={item.id} />
      })}
    </div>
  )
}
