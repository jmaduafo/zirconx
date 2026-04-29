import { cn } from '@/lib/utils';
import React from 'react'

function Header1({text, className}: {readonly text: string; readonly className?: string}) {
  return <h1 className={cn("leading-[0.8] text-5xl md:text-[8vw] font-serif", className)}>{text}</h1>
}

export default Header1
