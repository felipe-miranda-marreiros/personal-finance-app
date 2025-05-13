import { Text } from '@/components/generic/Text/Text'
import { Balance } from '../components/balance/Balance'
import { Pots } from '../components/pots/Pots'
import { Transactions } from '../components/transactions/Transactions'
import { Budgets } from '../components/budgets/Budgets'
import { RecurringBills } from '../components/recurring-bills/RecurringBills'

export default function OverviewPage() {
  return (
    <div>
      <Text className="mb-[32px] text-grey-900" variant="preset-1" asChild>
        <h1>Overview</h1>
      </Text>
      <Balance />
      <Pots />
      <Transactions />
      <Budgets />
      <RecurringBills />
    </div>
  )
}
