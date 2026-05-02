import Header2 from '@/components/headings/Header2'
import {SettingsQueryResult} from '@/sanity.types'
import React, {Fragment} from 'react'

function Statistics({data}: {readonly data: SettingsQueryResult}) {
  return (
    <section className="bg-accent py-6">
      <div className="flex items-center justify-evenly">
        {data
          ? data.statistics?.map((stat, i) => {
              return (
                <Fragment key={stat.title}>
                  <div className="flex flex-col gap-3 items-center">
                    <Header2 text={stat.statistic ?? ''} />
                    <p className="uppercase text-sm font-montrealMedium opacity-60">{stat.title}</p>
                  </div>
                  {data.statistics && i !== data.statistics?.length - 1 && (
                    <div className="bg-gradient-to-b from-foreground/0 via-foreground/40 to-foreground/0 h-[60px] w-[1px]"></div>
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
