import { Button } from '@/components/generic/Button/Button'
import { Card } from '@/components/generic/Card/Card'
import { CardContent } from '@/components/generic/Card/CardContent'
import { CardHeader } from '@/components/generic/Card/CardHeader'
import { Icon } from '@/components/generic/Icons/Icon'
import { Text } from '@/components/generic/Text/Text'
import { TransactionItem } from './components/TransactionItem'

export function Transactions() {
  return (
    <div className="mt-[16px]">
      <Card>
        <CardHeader>
          <Text variant="preset-2" className="text-grey-900">
            Transactions
          </Text>
          <Button variant="tertiary" size="tertiary">
            View All
            <Icon name="ChevronRight" />
          </Button>
        </CardHeader>
        <CardContent>
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
          <TransactionItem />
        </CardContent>
      </Card>
    </div>
  )
}
