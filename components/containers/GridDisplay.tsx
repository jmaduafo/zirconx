import React from 'react'
import ZoomImage from '../animations/ZoomImage'
import { cn } from '@/lib/utils'

function GridDisplay({
  isTextRight,
  children,
  url,
  orderLast
}: {
  readonly isTextRight?: boolean
  readonly children: React.ReactNode
  readonly url: string
  readonly orderLast?: boolean
}) {
  const textLayout = <div className={cn("bg-accent py-[6vh] px-[8vw]", orderLast && "order-last lg:order-none")}>{children}</div>
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[80vh]">
      {!isTextRight && textLayout}
      <ZoomImage url={url} />
      {isTextRight && textLayout}
    </section>
  )
}

export default GridDisplay
