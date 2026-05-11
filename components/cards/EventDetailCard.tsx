import React from 'react'
import Header6 from '../headings/Header6'

type Card = {
  readonly image: string
  readonly category: string
}

function EventDetailCard({image, category}: Card) {
  return (
    <div className="w-full flex flex-col gap-3">
      <div
        className="max-h-56 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${image})`}}
      ></div>
      <Header6 className="capitalize" text={category} />
    </div>
  )
}

export default EventDetailCard
