import { Container } from '@/components/core/Dashboard/Container'
import { Content } from '@/components/core/Dashboard/Content'
import { DesktopSidebar } from '@/components/core/DesktopSidebar/DesktopSidebar'
import { MobileSidebar } from '@/components/core/MobileSidebar/MobileSidebar'

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container>
      <DesktopSidebar />
      <Content>{children}</Content>
      <MobileSidebar />
    </Container>
  )
}
