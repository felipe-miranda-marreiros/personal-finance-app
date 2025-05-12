import { PropsWithChildren } from 'react'

export function Content({ children }: PropsWithChildren) {
  return (
    <div className="flex px-[40px] py-[32px] bg-beige-100 flex-col flex-1 overflow-y-auto">
      {children}
    </div>
  )
}
