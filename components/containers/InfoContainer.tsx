import { cn } from '@/lib/utils'
import React from 'react'

function InfoContainer({
  children,
  className,
  isMarginTop
}: {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly isMarginTop?: boolean;
}) {
  return (
    <section className={cn("px-5 sm:px-10 py-[8vh]", className, isMarginTop && "mt-[12vh]")}>
      {children}
    </section>
  )
}

export default InfoContainer