import {Icon as SanityIcon} from '@/sanity.types'
import {Icon} from '@iconify/react'
import React from 'react'
import Header6 from '../headings/Header6'
import {Button} from '../ui/button'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '../ui/dialog'

type Card = {
  item: {
    title: string | null
    desc: string | null
    icon: SanityIcon | null
    details: string[] | null
    note: string[] | null
  }
}

function ServicesCard({item}: Readonly<Card>) {
  return (
    <div className="flex flex-col gap-4 max-w-60 2xl:max-w-96">
      {item.icon && <Icon icon={`${item?.icon?.name}`} className="[&_*]:stroke-[1] size-5" />}
      <div className="flex flex-col gap-2">
        <Header6
          className="capitalize italic font-medium whitespace-nowrap"
          text={item?.title ?? ''}
        />
        <p className={'text-sm md:text-base 2xl:text-xl !leading-[1]'}>{item?.desc ?? ''}</p>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size={'sm'}>View details</Button>
        </DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle className="capitalize flex items-start font-medium gap-2">
              {item.icon && (
                <Icon icon={`${item?.icon?.name}`} className="[&_*]:stroke-[1] size-4 2xl:size-5" />
              )}
              {item.title}
            </DialogTitle>
          </DialogHeader>
          <ul className="pl-5 flex flex-col 2xl:text-xl">
            {item?.details?.map((text) => {
              return (
                <li key={text} className="list-disc">
                  {text}
                </li>
              )
            })}
          </ul>
          <div className="mt-3 2xl:text-lg">
            {item?.note && (
              <p>
                <span className="font-montrealMedium ">Note:</span> {item.note[0]}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ServicesCard
