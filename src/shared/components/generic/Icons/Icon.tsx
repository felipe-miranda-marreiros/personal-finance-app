import { cn } from '@/shared/lib/utils'
import * as LucideIcon from 'lucide-react'

export type IconProps = LucideIcon.LucideProps & {
  name: IconNames
}

export type IconNames = keyof typeof LucideIcon.icons

export function Icon({ name, className, ...rest }: IconProps) {
  const TargetIcon = LucideIcon.icons[name]
  return (
    <TargetIcon {...rest} className={cn('text-gray-300 shrink-0 w-[24px] h-[24px]', className)} />
  )
}
