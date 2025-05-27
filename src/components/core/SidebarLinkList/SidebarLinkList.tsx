import { SidebarLink, SidebarLinkProps } from '../SidebarLink/SidebarLink'

const data: SidebarLinkProps[] = [
  {
    href: '/dashboard/overview',
    iconName: 'House',
    label: 'Overview'
  },
  {
    href: '/dashboard/transactions',
    iconName: 'ArrowDownUp',
    label: 'Transactions'
  },
  {
    href: '/dashboard/budgets',
    iconName: 'ChartPie',
    label: 'Budgets'
  },
  {
    href: '/dashboard/pots',
    iconName: 'CircleDollarSign',
    label: 'Pots'
  },
  {
    href: '/dashboard/recurring-bills',
    iconName: 'ReceiptText',
    label: 'Recurring bills'
  }
]

export function SidebarLinkList() {
  return (
    <ul className="px-[16px] md:px-0 flex-1 flex justify-between items-center md:flex-col md:items-start">
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
