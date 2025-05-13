import { Button } from '@/components/generic/Button/Button'
import { Card } from '@/components/generic/Card/Card'
import { CardContent } from '@/components/generic/Card/CardContent'
import { CardHeader } from '@/components/generic/Card/CardHeader'
import { DataInfo } from '@/components/generic/DataInfo/DataInfo'
import { Icon } from '@/components/generic/Icons/Icon'
import { Text } from '@/components/generic/Text/Text'
import { RecurringBillItem } from './components/RecurringBillItem'

export function RecurringBills() {
  return (
    <Card className="h-[327px]">
      <CardHeader>
        <Text variant="preset-2" className="text-grey-900">
          Recurring Bills
        </Text>
        <Button variant="tertiary" size="tertiary">
          See Details
          <Icon name="ChevronRight" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-[12px]">
          <DataInfo variant="border" color="green">
            <RecurringBillItem />
          </DataInfo>
          <DataInfo variant="border" color="cyan">
            <RecurringBillItem />
          </DataInfo>
          <DataInfo variant="border" color="navy">
            <RecurringBillItem />
          </DataInfo>
        </div>
      </CardContent>
    </Card>
  )
}
