import { Text } from '@/shared/components/generic/Text/Text'
import { SpendingDetails } from '../components/SpendingDetails'
import { SpendingSummary } from '../components/SpendingSummary'

export default function BudgetsPage() {
  return (
    <div className="bg-beige-100">
      <Text className="mb-[32px] text-grey-900" variant="preset-1" asChild>
        <h1>Budgets</h1>
      </Text>
      <div className="flex flex-col gap-[24px] xl:flex-row">
        <div className="flex-[1.3]">
          <SpendingSummary />
        </div>
        <div className="flex-[2] space-y-[24px]">
          <SpendingDetails />
          <SpendingDetails />
          <SpendingDetails />
          <SpendingDetails />
        </div>
      </div>
    </div>
  )
}
