import { cn } from '@/lib/utils'

export type CardContentProps = React.ComponentProps<'div'>

export function CardContent({ className, ...rest }: CardContentProps) {
  return <div className={cn('mt-[20px]', className)} {...rest} />
}
