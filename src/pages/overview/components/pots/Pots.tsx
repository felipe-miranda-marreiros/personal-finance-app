import { Button } from '@/shared/components/generic/Button/Button'
import { Card } from '@/shared/components/generic/Card/Card'
import { CardContent } from '@/shared/components/generic/Card/CardContent'
import { CardHeader } from '@/shared/components/generic/Card/CardHeader'
import { DataInfo } from '@/shared/components/generic/DataInfo/DataInfo'
import { DataInfoItem } from '@/shared/components/generic/DataInfo/DataInfoItem'
import { Icon } from '@/shared/components/generic/Icons/Icon'
import { Text } from '@/shared/components/generic/Text/Text'

export function Pots() {
  return (
    <Card className="lg:h-[218px]">
      <CardHeader>
        <Text variant="preset-2" className="text-grey-900">
          Pots
        </Text>
        <Button variant="tertiary" size="tertiary">
          See Details
          <Icon name="ChevronRight" />
        </Button>
      </CardHeader>
      <CardContent className="grid gap-[20px] grid-cols-1 sm:grid-cols-2">
        <div className="bg-beige-100 h-[110px] rounded-xl p-[16px]">
          <div className="flex gap-[16px] items-center">
            <Icon name="Currency" className="w-[40px] h-[40px] text-green" />
            <div>
              <Text className="text-grey-500 mb-[11px]">Total Saved</Text>
              <Text variant="preset-1" className="text-grey-900">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(850)}
              </Text>
            </div>
          </div>
        </div>
        <div className="relative grid grid-cols-2 grid-rows-2 gap-[16px]">
          <DataInfo color="cyan">
            <DataInfoItem
              title="Savings"
              description={new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(850)}
            />
          </DataInfo>
          <DataInfo color="green">
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
          <DataInfo color="yellow">
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
