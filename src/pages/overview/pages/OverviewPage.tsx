import { Balance } from '../components/balance/Balance'
import { Pots } from '../components/pots/Pots'
import { Transactions } from '../components/transactions/Transactions'
import { Budgets } from '../components/budgets/Budgets'
import { RecurringBills } from '../components/recurring-bills/RecurringBills'
import { Text } from '@/shared/components/generic/Text/Text'

export default function OverviewPage() {
  return (
    <div>
      <Text className="mb-[32px] text-grey-900" variant="preset-1" asChild>
        <h1>Overview</h1>
      </Text>
      <Balance />
      <div className="flex flex-col lg:flex-row gap-[20px]">
        <div className="flex lg:flex-2 flex-col gap-[20px]">
          <div>
            <Pots />
          </div>
          <div className="flex-2">
            <Transactions />
          </div>
        </div>
        <div className="flex lg:flex-1 flex-col gap-[20px]">
          <div className="flex-2">
            <Budgets />
          </div>
          <div className="flex-1">
            <RecurringBills />
          </div>
        </div>
      </div>
    </div>
  )
}
