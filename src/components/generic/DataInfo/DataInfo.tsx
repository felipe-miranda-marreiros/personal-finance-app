import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

export type DataInfoProps = React.ComponentProps<'div'>

const dataInfoVariants = cva('', {
  variants: {
    variant: {
      border: 'border-l-4 rounded-lg',
      regular:
        "before:content-[''] before:absolute before:w-[4px] before:h-[43px] before:rounded-lg"
    },
    color: {
      green: 'before:bg-green border-l-green',
      cyan: 'before:bg-cyan border-l-cyan',
      yellow: 'before:bg-yellow border-l-yellow',
      navy: 'before:bg-navy border-l-navy'
    }
  },
  defaultVariants: {
    variant: 'regular'
  }
})

export function DataInfo({
  className,
  variant,
  color,
  ...rest
}: DataInfoProps & VariantProps<typeof dataInfoVariants>) {
  return <div className={cn(dataInfoVariants({ variant, color, className }))} {...rest} />
}
