import Link from 'next/link'
import { Icon, IconNames } from '../../generic/Icons/Icon'
import { Text } from '../../generic/Text/Text'

export interface SidebarLinkProps {
  href: string
  iconName: IconNames
  label: string
}

export function SidebarLink({ href, iconName, label }: SidebarLinkProps) {
  return (
    <li className="w-[68px] sm:w-[104px] h-[44px] md:h-[56px]">
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
