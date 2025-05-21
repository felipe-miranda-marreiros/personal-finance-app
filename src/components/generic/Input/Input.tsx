import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Icon, IconNames } from '../Icons/Icon'

const inputVariants = cva(
  'h-[45px] px-250 py-150 text-grey-900 flex gap-150 [&_svg]:text-beige-500 not-empty:outline-1 not-empty:outline-beige-500 placeholder:text-beige-500 hover:outline-1 hover:outline-grey-500 focus-within:outline-1 focus-within:outline-grey-900',
  {
    variants: {
      variant: {
        default: 'border-1 border-beige-500 rounded-lg',
        primary: '',
        tertiary: '',
        destroy: ''
      },
      size: {
        primary: '',
        tertiary: '',
        default: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

function Input({
  className,
  variant,
  size,
  type,
  leftIcon,
  rightIcon,
  id,
  ...props
}: React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    leftIcon?: IconNames
    rightIcon?: IconNames
  }) {
  return (
    <label
      role="group"
      htmlFor={id ?? 'input'}
      className={cn('inline-flex items-center', inputVariants({ variant, size, className }))}
    >
      {leftIcon && <Icon name={leftIcon} />}
      <input
        id={id ?? 'input'}
        className="w-full focus-within:outline-0"
        type={type}
        data-slot="input"
        {...props}
      />
      {rightIcon && <Icon name={rightIcon} />}
    </label>
  )
}

export { Input }
