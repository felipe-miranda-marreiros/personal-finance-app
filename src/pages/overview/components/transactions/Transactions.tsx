import { TransactionList } from '@pages/transactions/components/TransactionList'
import { Button } from '@shared/components/generic/Button/Button'
import { Card } from '@shared/components/generic/Card/Card'
import { CardContent } from '@shared/components/generic/Card/CardContent'
import { CardHeader } from '@shared/components/generic/Card/CardHeader'
import { Icon } from '@shared/components/generic/Icons/Icon'
import { Text } from '@shared/components/generic/Text/Text'

export function Transactions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <Text variant="preset-2" className="text-grey-900">
          Transactions
        </Text>
        <Button variant="tertiary" size="tertiary">
          View All
          <Icon name="ChevronRight" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-[20px] mt-[32px]">
        <TransactionList />
      </CardContent>
    </Card>
  )
}
