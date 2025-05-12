import { SidebarLink, SidebarLinkProps } from '../SidebarLink/SidebarLink'

const data: SidebarLinkProps[] = [
  {
    href: '/',
    iconName: 'House',
    label: 'Overview'
  },
  {
    href: '/',
    iconName: 'AArrowDown',
    label: 'Transactions'
  },
  {
    href: '/',
    iconName: 'AArrowDown',
    label: 'Budgets'
  },
  {
    href: '/',
    iconName: 'ALargeSmall',
    label: 'Pots'
  },
  {
    href: '/',
    iconName: 'ALargeSmall',
    label: 'Recurring bills'
  }
]

export function SidebarLinkList() {
  return (
    <ul className="mt-[8px] flex-1 flex justify-between items-center md:flex-col md:items-start">
      {data.map((link) => {
        return (
          <SidebarLink
            key={link.label}
            href={link.href}
            iconName={link.iconName}
            label={link.label}
          />
        )
      })}
    </ul>
  )
}
