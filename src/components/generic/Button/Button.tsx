import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  '!text-preset-4-bold flex gap-[12px] items-center p-[16px] rounded-[8px]',
  {
    variants: {
      variant: {
        secondary: 'bg-beige-100 text-foreground hover:bg-white',
        primary: 'bg-foreground hover:bg-grey-500 text-white',
        tertiary: '!text-preset-4 p-0 bg-white text-grey-500 hover:text-grey-900',
        destroy: 'bg-red text-white hover:bg-red/80'
      },
      size: {
        primary: 'h-[53px]',
        tertiary: 'h-[21px]'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'primary'
    }
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
