import { cn } from '@/lib/utils';
import React from 'react'

function Header1({text, className}: {readonly text: string; readonly className?: string}) {
  return <h1 className={cn("text-[14vw] md:text-[8vw] font-serif leading-[0.9]", className)}>{text}</h1>
}

export default Header1
