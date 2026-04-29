import React from 'react'

function SingleSummary({
  children
}: {
  readonly children: React.ReactNode
}) {
  return (
    <div className="px-[16vw] py-[8vh]">
      {children}
    </div>
  )
}

export default SingleSummary
