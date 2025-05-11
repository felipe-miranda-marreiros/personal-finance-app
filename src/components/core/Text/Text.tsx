import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      'preset-1': 'text-preset-1',
      'preset-2': 'text-preset-2',
      'preset-3': 'text-preset-3',
      'preset-4': 'text-preset-4',
      'preset-4-bold': 'text-preset-4-bold',
      'preset-5': 'text-preset-5',
      'preset-5-bold': 'text-preset-5-bold'
    }
  },
  defaultVariants: {
    variant: 'preset-4'
  }
})

export function Text({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'p'> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'p'
  return <Comp data-slot="p" className={cn(textVariants({ variant, className }))} {...props} />
}
