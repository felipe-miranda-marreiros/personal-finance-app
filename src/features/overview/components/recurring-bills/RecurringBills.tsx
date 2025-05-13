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
    <div className="mt-[16px]">
      <Card>
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
            <DataInfo leftMarkType="border">
              <RecurringBillItem />
            </DataInfo>
            <DataInfo leftMarkType="border">
              <RecurringBillItem />
            </DataInfo>
            <DataInfo leftMarkType="border">
              <RecurringBillItem />
            </DataInfo>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
