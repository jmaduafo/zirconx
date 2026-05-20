'use client'

import RollingText from '@/components/animations/RollingText'
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
import {motion} from 'framer-motion'
import React from 'react'

function Faq({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section className="my-6 px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <MainHeader
          title="FAQ"
          subtitle="Everything you need to know about working with us, from planning to execution."
        />
        <div className="flex-1 flex justify-end">
          <Accordion type="single" collapsible defaultValue={undefined} className="lg:max-w-3xl">
            {data
              ? data.faqs?.map((item, i) => {
                  return (
                    <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1, transition: {delay: i * 0.2}}}
                      viewport={{ once: true }}
                      key={item.question}
                    >
                      <AccordionItem value={item.question ?? ''}>
                        <AccordionTrigger>
                          <div className="flex items-start gap-2">
                            <p className="text-xs lg:text-sm">{(i + 1).toString().padStart(2, '0')} /</p>
                            <RollingText>
                              <Header6 className="not-italic !leading-tight" text={item.question ?? ''} />
                            </RollingText>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-center gap-2">
                            <p className="text-sm invisible">0{i + 1} /</p>
                            <SmallParagraph text={item.answer ?? ''} />
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
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
