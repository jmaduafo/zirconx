import React from 'react'

function SingleSummary({
  children
}: {
  readonly children: React.ReactNode
}) {
  return (
    <section className="px-5 sm:px-[16vw] py-[12vh]">
      {children}
    </section>
  )
}

export default SingleSummary
