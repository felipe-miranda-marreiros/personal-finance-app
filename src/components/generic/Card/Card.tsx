import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export function Card({ children }: PropsWithChildren) {
  return (
    <div
      className={cn('has-[.marked]:bg-grey-900 flex-1 p-[20px] sm:p-[24px] bg-white rounded-xl')}
    >
      {children}
    </div>
  )
}
