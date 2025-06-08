import { PropsWithChildren } from 'react'

export function CardHeader({ children }: PropsWithChildren) {
  return <div className="flex items-baseline justify-between h-[24px]">{children}</div>
}
