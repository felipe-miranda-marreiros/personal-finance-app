import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

export type DataInfoProps = React.ComponentProps<'div'>

const dataInfoVariants = cva('relative', {
  variants: {
    variant: {
      border: 'border-l-4 rounded-lg',
      regular: "before:content-[''] before:absolute before:w-[4px] before:rounded-lg"
    },
    color: {
      green: 'before:bg-green border-l-green',
      cyan: 'before:bg-cyan border-l-cyan',
      yellow: 'before:bg-yellow border-l-yellow',
      navy: 'before:bg-navy border-l-navy'
    },
    size: {
      regular: 'before:h-[43px]',
      small: 'before:h-[21px]'
    }
  },
  defaultVariants: {
    variant: 'regular',
    size: 'regular'
  }
})

export function DataInfo({
  className,
  variant,
  color,
  size,
  ...rest
}: DataInfoProps & VariantProps<typeof dataInfoVariants>) {
  return <div className={cn(dataInfoVariants({ variant, size, color, className }))} {...rest} />
}
