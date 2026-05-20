'use client'

import {Button} from '@/components/animate-ui/components/buttons/button'
import TestimonialCard from '@/components/cards/TestimonialCard'
import {EmblaCarouselType, EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, MoveLeft, MoveRight} from 'lucide-react'
import {motion, type Transition} from 'motion/react'
import * as React from 'react'

type PropType = {
  slides: any[]
  options?: EmblaOptionsType
}

type EmblaControls = {
  selectedIndex: number
  scrollSnaps: number[]
  prevDisabled: boolean
  nextDisabled: boolean
  onDotClick: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

type DotButtonProps = {
  selected?: boolean
  label: string
  onClick: () => void
}

const transition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 24,
  mass: 1,
}

const useEmblaControls = (emblaApi: EmblaCarouselType | undefined): EmblaControls => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])
  const [prevDisabled, setPrevDisabled] = React.useState(true)
  const [nextDisabled, setNextDisabled] = React.useState(true)

  const onDotClick = React.useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const onNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const updateSelectionState = (api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
    setPrevDisabled(!api.canScrollPrev())
    setNextDisabled(!api.canScrollNext())
  }

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList())
    updateSelectionState(api)
  }, [])

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    updateSelectionState(api)
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    emblaApi.on('reInit', onInit).on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onInit).off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    prevDisabled,
    nextDisabled,
    onDotClick,
    onPrev,
    onNext,
  }
}

function MotionCarousel(props: PropType) {
  const {slides, options} = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const {selectedIndex, scrollSnaps, prevDisabled, nextDisabled, onDotClick, onPrev, onNext} =
    useEmblaControls(emblaApi)

  return (
    <div className="w-[95%] lg:w-[80%] 2xl:w-[70%] relative mx-auto space-y-4 [--slide-spacing:1.5rem] [--slide-size:90%] sm:[--slide-size:85%] md:[--slide-size:75%] lg:[--slide-size:65%] xl:[--slide-size:55%] 2xl:[--slide-size:55%]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {slides.map((item, index) => {
            const isActive = index === selectedIndex

            return (
              <motion.div
                key={item.client}
                className="h-[var(--slide-height)] mr-[var(--slide-spacing)] basis-[var(--slide-size)] flex-none flex min-w-0"
              >
                <motion.div
                  className="size-full flex items-center justify-center select-none rounded-xl"
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={transition}
                >
                  <TestimonialCard testimonial={item} />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="z-[30] w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-between">
        <Button className='size-6 rounded-full' size="icon" variant={'outline'} onClick={onPrev} disabled={prevDisabled}>
          <MoveLeft className="size-4" strokeWidth={1}/>
        </Button>


        <Button className='size-6 rounded-full' size="icon" variant={'outline'} onClick={onNext} disabled={nextDisabled}>
          <MoveRight className="size-4" strokeWidth={1}/>
        </Button>
      </div>
        <div className="flex justify-center items-center gap-2">
          
            <p>{selectedIndex + 1} / {scrollSnaps.length}</p>
          
        </div>
    </div>
  )
}

function DotButton({selected = false, label, onClick}: DotButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={false}
      className="flex cursor-pointer select-none items-center justify-center rounded-full border-none bg-primary text-primary-foreground text-sm"
      animate={{
        width: selected ? 68 : 12,
        height: selected ? 28 : 12,
      }}
      transition={transition}
    >
      <motion.span
        layout
        initial={false}
        className="block whitespace-nowrap px-3 py-1"
        animate={{
          opacity: selected ? 1 : 0,
          scale: selected ? 1 : 0,
          filter: selected ? 'blur(0)' : 'blur(4px)',
        }}
        transition={transition}
      >
        {label}
      </motion.span>
    </motion.button>
  )
}

export {MotionCarousel}
