"use client"

import {
  motion,
  stagger,
  useAnimate,
  useInView,
} from "motion/react"
import * as React from "react"
import { cn } from "@/lib/utils"

type TextGenerateEffectProps = Omit<
  React.ComponentProps<"div">,
  "children"
> & {
  words: string
  filter?: boolean
  duration?: number
  staggerDelay?: number
}

function TextGenerateEffect({
  ref,
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.2,
  ...props
}: TextGenerateEffectProps) {
  const localRef = React.useRef<HTMLDivElement>(null)

  React.useImperativeHandle(
    ref as any,
    () => localRef.current as HTMLDivElement
  )

  const [scope, animate] = useAnimate()

  const isInView = useInView(scope, {
    once: true,
    margin: "-100px",
  })

  const wordsArray = React.useMemo(
    () => words.split(" "),
    [words]
  )

  React.useEffect(() => {
    if (!isInView) return

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(staggerDelay),
      }
    )
  }, [
    isInView,
    animate,
    duration,
    filter,
    staggerDelay,
  ])

  return (
    <div
      className={cn("", className)}
      data-slot="text-generate-effect"
      ref={localRef}
      {...(props as any)}
    >
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className="opacity-0 will-change-transform will-change-opacity will-change-filter"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export {
  TextGenerateEffect,
  type TextGenerateEffectProps,
}

export default TextGenerateEffect