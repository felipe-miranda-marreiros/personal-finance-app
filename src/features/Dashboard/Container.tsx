import { PropsWithChildren } from 'react'

export function Container({ children }: PropsWithChildren) {
  return <div className="overflow-hidden flex flex-col md:flex-row h-screen">{children}</div>
}
