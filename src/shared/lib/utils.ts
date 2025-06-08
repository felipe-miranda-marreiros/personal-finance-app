import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-preset-1',
        'text-preset-2',
        'text-preset-3',
        'text-preset-4',
        'text-preset-4-bold',
        'text-preset-5',
        'text-preset-5-bold'
      ]
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
