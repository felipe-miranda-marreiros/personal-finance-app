'use client'

import { useState } from 'react'
import { Text } from '../../generic/Text/Text'
import { cn } from '@/lib/utils'
import { CircleArrowRight } from 'lucide-react'
import { SidebarLinkList } from '../SidebarLinkList/SidebarLinkList'

export function DesktopSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        'relative hidden [&_p]:hidden md:flex z-30 w-[88px] flex-col justify-between h-full transition-[width] duration-300 ease-in-out rounded-r-[18px] bg-foreground',
        isOpen && 'w-[300px] [&_p]:block'
      )}
    >
      <div className="flex flex-col justify-between flex-1">
        <div className="h-[102px] py-[40px] px-[32px]">
          <Text className="text-white" variant="preset-1">
            Finance
          </Text>
        </div>
        <nav className="pl-[32px]">
          <SidebarLinkList />
        </nav>
        <button
          className="flex items-center gap-[16px] h-[56px] mb-[24px] pl-[32px]"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <CircleArrowRight className="text-gray-300 shrink-0 w-[24px] h-[24px]" />
          <Text
            variant="preset-3"
            className={cn(
              'text-gray-300 whitespace-nowrap transition-[opacity] opacity-100 duration-300',
              !isOpen && 'absolute opacity-45 invisible w-full'
            )}
          >
            Minimize Menu
          </Text>
        </button>
      </div>
    </div>
  )
}
