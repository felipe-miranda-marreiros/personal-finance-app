import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface DataInfo {
  leftMarkType?: 'regular' | 'border'
  markColor?: string
}

export function DataInfo({ leftMarkType = 'regular', children }: PropsWithChildren<DataInfo>) {
  return (
    <div
      className={cn(
        leftMarkType === 'border' && 'border-l-4 border-l-green rounded-lg',
        leftMarkType === 'regular' &&
          "before:content-[''] before:bg-green before:absolute before:w-[4px] before:h-[43px] before:rounded-lg"
      )}
    >
      {children}
    </div>
  )
}
