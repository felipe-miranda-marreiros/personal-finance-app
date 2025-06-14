import { Text } from '@shared/components/generic/Text/Text'
import { cn } from '@shared/lib/utils'

export interface CardContentProps {
  title: string
  description: string
  isMarked?: boolean
}

export function OverviewCardMetric({ description, title, isMarked = false }: CardContentProps) {
  return (
    <>
      <Text className={cn('text-grey-500', isMarked && 'marked text-white', 'mb-[12px]')}>
        {title}
      </Text>
      <Text
        variant="preset-1"
        className={cn('text-grey-900 break-words', isMarked && 'text-white')}
      >
        {description}
      </Text>
    </>
  )
}
