import { Button } from '@/components/generic/Button/Button'
import { Card } from '@/components/generic/Card/Card'
import { CardContent } from '@/components/generic/Card/CardContent'
import { CardHeader } from '@/components/generic/Card/CardHeader'
import { DataInfo } from '@/components/generic/DataInfo/DataInfo'
import { DataInfoItem } from '@/components/generic/DataInfo/DataInfoItem'
import { Icon } from '@/components/generic/Icons/Icon'
import { Text } from '@/components/generic/Text/Text'

export function Budgets() {
  return (
    <Card>
      <CardHeader>
        <Text variant="preset-2" className="text-grey-900">
          Budgets
        </Text>
        <Button variant="tertiary" size="tertiary">
          See Details
          <Icon name="ChevronRight" />
        </Button>
      </CardHeader>
      <CardContent className="mt-[20px] md:py-[31px] grid grid-cols-1 xl:grid-cols-[1fr_100px] md:gap-[16px]">
        <div className="h-[240px] w-full bg-green mb-[16px] rounded-lg"></div>
        <div className="relative grid grid-cols-2 grid-rows-2 xl:justify-self-end xl:grid-cols-1 gap-[16px]">
          <DataInfo color="green">
            <DataInfoItem
              title="Entertainment"
              description={new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(850)}
            />
          </DataInfo>
          <DataInfo color="cyan">
            <DataInfoItem
              title="Savings"
              description={new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(850)}
            />
          </DataInfo>
          <DataInfo color="yellow">
            <DataInfoItem
              title="Savings"
              description={new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(850)}
            />
          </DataInfo>
          <DataInfo color="navy">
            <DataInfoItem
              title="Savings"
              description={new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(850)}
            />
          </DataInfo>
        </div>
      </CardContent>
    </Card>
  )
}
