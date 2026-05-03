import Header4 from '@/components/headings/Header4'
import Header6 from '@/components/headings/Header6'
import SmallParagraph from '@/components/headings/SmallParagraph'
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
    <section className='my-6 px-8'>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className='flex flex-col gap-3'>
          <Header4 text="FAQ" />
          <SmallParagraph className='w-[12em]' text="Everything you need to know about working with us, from planning to execution." />
        </div>
        <div className="flex-1 flex justify-end">
          <Accordion type="single" collapsible defaultValue={undefined} className="max-w-2xl">
            {data
              ? data.faqs?.map((item, i) => {
                  return (
                    <AccordionItem value={item.question ?? ""} key={item.question}>
                      <AccordionTrigger>
                        <div className='flex items-start gap-2'>
                            <p className='text-sm'>0{i + 1} /</p>
                            <Header6 text={item.question ?? ""}/>
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
