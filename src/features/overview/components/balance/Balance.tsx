import { Card } from '@/components/generic/Card/Card'
import { OverviewCardMetric } from './components/OverviewCardMetric'

export function Balance() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mb-[32px]">
      <Card>
        <OverviewCardMetric
          isMarked
          title="Current Balance"
          description={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(4836)}
        />
      </Card>
      <Card>
        <OverviewCardMetric
          title="Current Balance"
          description={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(4836)}
        />
      </Card>
      <Card>
        <OverviewCardMetric
          title="Current Balance"
          description={new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(4836)}
        />
      </Card>
    </div>
  )
}
