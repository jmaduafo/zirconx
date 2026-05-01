import {Service} from '@/types'
import React from 'react'
import Header6 from '../headings/Header6'
import {Button} from '../ui/button'

type Card = {
  item: Service
}

function ServicesCard({item}: Readonly<Card>) {
  return (
    <div className="flex flex-col gap-4 max-w-60">
      <item.icon className="size-5" strokeWidth={1} />
      <div className="flex flex-col gap-2">
        <Header6 className="capitalize italic whitespace-nowrap" text={item.title} />
        {/* <Paragraph text={item.desc} className="!leading-none text-sm"/> */}
        <p className="text-sm leading-none">{item.desc}</p>
      </div>
      <Button size={"sm"}>View details</Button>
    </div>
  )
}

export default ServicesCard
