'use client'

import Link from 'next/link'
import { Icon, IconNames } from '../../generic/Icons/Icon'
import { Text } from '../../generic/Text/Text'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export interface SidebarLinkProps {
  href: string
  iconName: IconNames
  label: string
}

export function SidebarLink({ href, iconName, label }: SidebarLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li
      className={cn(
        'h-[44px] sm:h-[66px] md:w-[80px] transition-[width] ease-in delay-150 md:h-[56px] w-[68px] sm:w-[104px] flex items-center justify-center md:justify-stretch md:pl-[32px]',
        isActive &&
          'bg-white rounded-t-lg [&_p]:text-grey-900 [&_svg]:text-green border-b-4 border-b-green md:rounded-t-none md:rounded-r-lg md:border-b-0 md:border-l-4 md:border-l-green'
      )}
    >
      <Link href={href}>
        <div className="flex flex-col md:flex-row sm:gap-[4px] md:gap-[16px] items-center">
          <Icon name={iconName} />
          <Text className="!text-preset-5-bold md:!text-preset-3 text-gray-300 whitespace-nowrap hidden sm:block">
            {label}
          </Text>
        </div>
      </Link>
    </li>
  )
}
