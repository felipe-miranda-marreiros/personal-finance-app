import { RecipientProps } from '@shared/components/core/Recipient/Recipient'
import { RecipientItem } from '@shared/components/core/RecipientItem/RecipientItem'
import { transactions } from '@entities/transaction/mocks'

export function TransactionList(props: RecipientProps) {
  return (
    <div>
      {transactions.map((item) => {
        return (
          <RecipientItem
            amount={item.amount}
            category={item.category}
            transaction_date={item.transaction_date}
            name={item.user.name}
            avatar={item.user.avatar}
            showCategory={props.showCategory ?? false}
            key={item.id}
          />
        )
      })}
    </div>
  )
}
