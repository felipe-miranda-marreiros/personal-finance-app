import { cn } from '@/lib/utils'
import { Text } from '../Text/Text'
import { PropsWithChildren } from 'react'

export interface CardContentProps {
  title: string
  description: string
  isMarked?: boolean
}

export function OverviewCardMetric({ description, title, isMarked = false }: CardContentProps) {
  return (
    <div>
      <Text className={cn('text-gray-500', isMarked && 'marked text-white', 'mb-[12px]')}>
        {title}
      </Text>
      <Text variant="preset-1" className={cn('text-grey-900', isMarked && 'text-white')}>
        {description}
      </Text>
    </div>
  )
}

export function CardContent({ children }: PropsWithChildren) {
  return <div className="mt-[20px]">{children}</div>
}
