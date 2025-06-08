import { PropsWithChildren } from 'react'

export function Content({ children }: PropsWithChildren) {
  return (
    <div className="flex px-[16px] py-[24px] lg:px-[40px] lg:py-[32px] bg-beige-100 flex-col flex-1 overflow-y-auto">
      {children}
    </div>
  )
}
