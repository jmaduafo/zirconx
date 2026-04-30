import React from 'react'

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
      <div className="h-full w-full">
        <div
          className="bg-cover bg-no-repeat bg-center h-full w-full"
          style={{backgroundImage: `url(${url})`}}
        ></div>
      </div>
      {isTextRight && textLayout}
    </section>
  )
}

export default GridDisplay
