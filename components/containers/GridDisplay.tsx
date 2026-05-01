import React from 'react'
import Parallax from '../animations/Parallax'

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
    <section className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
      {!isTextRight && textLayout}
      <Parallax image={url} height="h-full" scale='scale-110'/>
      {isTextRight && textLayout}
    </section>
  )
}

export default GridDisplay
