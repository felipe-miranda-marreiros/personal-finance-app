import { SidebarLinkList } from '../SidebarLinkList/SidebarLinkList'

export function MobileSidebar() {
  return (
    <div className="h-[52px] sm:h-[74px] md:hidden rounded-t-[8px] bg-foreground">
      <nav className="pt-[8px]">
        <SidebarLinkList />
      </nav>
    </div>
  )
}
