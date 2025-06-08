import { Container } from '@/features/Dashboard/Container'
import { Content } from '@/features/Dashboard/Content'
import { DesktopSidebar } from '@/features/Dashboard/components/DesktopSidebar/DesktopSidebar'
import { MobileSidebar } from '@/features/Dashboard/components/MobileSidebar/MobileSidebar'

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
