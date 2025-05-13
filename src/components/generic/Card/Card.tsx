import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export type CardProps = React.ComponentProps<'div'>

export function Card({ className, ...rest }: PropsWithChildren<CardProps>) {
  return (
    <div
      {...rest}
      className={cn(
        'has-[.marked]:bg-grey-900 flex-1 p-[20px] sm:p-[32px] bg-white rounded-xl',
        className
      )}
    />
  )
}
