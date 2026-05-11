import React from 'react'
import ZoomImage from '../animations/ZoomImage'

function GridDisplay({
  isTextRight,
  children,
  url,
}: {
  readonly isTextRight?: boolean
  readonly children: React.ReactNode
  readonly url: string
}) {
  const textLayout = <div className="bg-accent py-[4vw] px-[8vw]">{children}</div>
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh]">
      {!isTextRight && textLayout}
      <ZoomImage url={url} />
      {isTextRight && textLayout}
    </section>
  )
}

export default GridDisplay
