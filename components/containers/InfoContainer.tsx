import React from 'react'

function InfoContainer({
  children
}: {
  readonly children: React.ReactNode
}) {
  return (
    <section className="px-5 sm:px-[6vw] py-[8vh]">
      {children}
    </section>
  )
}

export default InfoContainer