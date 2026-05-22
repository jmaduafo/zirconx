import {CountingNumber} from '@/components/animate-ui/primitives/texts/counting-number'
import Header2 from '@/components/headings/Header2'
import {SettingsQueryResult} from '@/sanity.types'
import React, {Fragment} from 'react'

function Statistics({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section className="bg-accent py-3 sm:py-6">
      <div className="flex items-center justify-evenly">
        {data
          ? data.statistics?.map((stat, i) => {
              return (
                <Fragment key={stat.title}>
                  <div className="flex flex-col gap-3 items-center">
                    {stat?.statistic?.includes('+') ? (
                      <Header2 className="flex items-center text-3xl">
                        <span>+</span>
                        <CountingNumber inView number={Number(stat.statistic.replace('+', ''))} />
                      </Header2>
                    ) : (
                      <Header2 className='text-3xl'>
                        <CountingNumber inView number={Number(stat.statistic)} />
                      </Header2>
                    )}
                    {/* <Header2 text={stat.statistic ?? ''} /> */}
                    <p className="uppercase text-[10px] md:text-sm font-montrealMedium opacity-60">{stat.title}</p>
                  </div>
                  {data.statistics && i !== data.statistics?.length - 1 && (
                    <div className="hidden sm:block bg-gradient-to-b from-foreground/0 via-foreground/40 to-foreground/0 h-[30px] sm:h-[60px] w-[1px]"></div>
                  )}
                </Fragment>
              )
            })
          : null}
      </div>
    </section>
  )
}

export default Statistics
