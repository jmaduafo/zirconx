import Header6 from '@/components/headings/Header6'
import SmallParagraph from '@/components/headings/SmallParagraph'
import MainHeader from '@/components/MainHeader'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {SettingsQueryResult} from '@/sanity.types'
import React from 'react'

function Faq({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section className='my-6 px-4 md:px-8'>
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <MainHeader title="FAQ" subtitle='Everything you need to know about working with us, from planning to execution.'/>
        <div className="flex-1 flex justify-end">
          <Accordion type="single" collapsible defaultValue={undefined} className="max-w-lg lg:max-w-2xl">
            {data
              ? data.faqs?.map((item, i) => {
                  return (
                    <AccordionItem value={item.question ?? ""} key={item.question}>
                      <AccordionTrigger>
                        <div className='flex items-start gap-2'>
                            <p className='text-sm'>{(i + 1).toString().padStart(2, "0")} /</p>
                            <Header6 className="not-italic" text={item.question ?? ""}/>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className='flex flex-center gap-2'>
                            <p className='text-sm invisible'>0{i + 1} /</p>
                            <SmallParagraph text={item.answer ?? ""}/>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              : null}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq
