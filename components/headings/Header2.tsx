import {cn} from '@/lib/utils'
import React from 'react'

function Header2({children, className}: {readonly children: React.ReactNode; readonly className?: string}) {
  return (
    <h2
      className={cn(
        'text-5xl sm:text-6xl xl:text-7xl font-serif !leading-none',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export default Header2
