import Header2 from '@/components/headings/Header2'
import {Settings} from '@/types'
import React from 'react'

function Statistics({data}: {readonly data: Settings}) {
  return (
    <section className="bg-accent py-6">
      <div className="grid grid-cols-4">
        {data
          ? data.statistics.map((stat) => {
              return (
                <div key={stat.title} className="flex flex-col gap-3 items-center">
                  <Header2 text={stat.statistic} />
                  <p className="uppercase text-sm font-montrealMedium opacity-60">{stat.title}</p>
                </div>
              )
            })
          : null}
      </div>
    </section>
  )
}

export default Statistics
