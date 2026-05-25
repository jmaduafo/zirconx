'use client'

import Logo from '@/public/logo/zircon_logo.png'
import {EventsQueryResult, SettingsQueryResult} from '@/sanity.types'
import {urlForImage} from '@/sanity/lib/utils'
import {navigation} from '@/utils/data'
import {motion} from 'framer-motion'
import {ChevronDown, ChevronRight, Menu, X} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {Fragment, useState} from 'react'
import {Button} from './ui/button'

export function Navbar({
  settings,
  events,
}: {
  readonly settings: SettingsQueryResult
  readonly events: EventsQueryResult
}) {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const headerVariant = {
    initial: {
      y: '-100%',
    },
    animate: {
      y: '0%',
    },
  }

  const navVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  }

  return (
    <>
      <motion.header
        variants={headerVariant}
        initial="initial"
        animate="animate"
        transition={{
          ease: 'easeOut',
        }}
        className="z-[200] fixed top-0 w-full pt-4 px-3 sm:px-10 bg-background"
      >
        <motion.div
          variants={navVariant}
          initial="initial"
          animate="animate"
          transition={{
            delay: 0.5,
          }}
          className="flex justify-between items-center"
        >
          <Link href="/">
            <div className="w-[5em] h-[5em] object-cover object-bottom">
              <Image
                src={urlForImage(settings?.logo)?.width(1000).height(1000).url() ?? ''}
                width={1000}
                height={1000}
                alt="zircon logo"
                className="w-full h-full"
              />
            </div>
          </Link>
          <nav className="hidden lg:block capitalize text-sm font-montrealMedium">
            <ul className="flex items-center gap-5">
              {navigation.map((nav) => {
                return (
                  <Fragment key={nav.title}>
                    {!nav.button && !nav.dropdown && (
                      <li>
                        <Link href={`${nav.link.includes('#contact') ? '' : '/'}${nav.link}`}>
                          {nav.title}
                        </Link>
                      </li>
                    )}
                    {nav.dropdown && <DropDown nav={nav} events={events} />}
                    {nav.button && (
                      <Link href={`/${nav.link}`}>
                        <Button>{nav.title}</Button>
                      </Link>
                    )}
                  </Fragment>
                )
              })}
            </ul>
          </nav>
          <div className="z-[210] lg:hidden">
            <motion.button
              onClick={() => {
                setIsMenuClicked((prev) => !prev)
              }}
              className="w-full h-full rounded-full duration-300 bg-accent hover:bg-foreground hover:text-background p-3"
            >
              {isMenuClicked ? <X className="size-4" /> : <Menu className="size-4" />}
            </motion.button>
          </div>
        </motion.div>
      </motion.header>
      <motion.div
        className="lg:hidden py-4 px-5 flex flex-col fixed z-[210] top-0 right-0 w-4 h-4 bg-foreground origin-bottom-left"
        initial={{
          width: '50vw',
          height: '50vh',
          clipPath: 'circle(141.4%% at 100% 0)',
          visibility: 'hidden',
          // borderBottomLeftRadius: isMenuClicked ? '100%' : '0%',
        }}
        animate={{
          width: isMenuClicked ? '100vw' : '50vw',
          height: isMenuClicked ? '100vh' : '50vh',
          clipPath: isMenuClicked
            ? 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'
            : 'circle(9.1% at 100% 0)',
          visibility: isMenuClicked ? 'visible' : 'hidden',
          // borderBottomLeftRadius: isMenuClicked ? '0%' : '100%',
        }}
        transition={{duration: 0.4, delay: isMenuClicked ? 0 : 0.5}}
      >
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsMenuClicked(false)
            }}
            className="rounded-full duration-300 text-foreground bg-background p-3"
          >
            <X className="size-4" />
          </button>
        </div>
        <div className="my-auto relative">
          <ul className="text-background font-montrealBook text-[7vw] leading-none capitalize">
            {navigation.map((nav) => {
              return (
                <div key={nav.title} className="overflow-hidden">
                  {!nav.dropdown && (
                    <motion.li
                      onClick={() => {
                        setIsMenuClicked(false)
                      }}
                      initial={{y: isMenuClicked ? '100%' : '0%'}}
                      animate={{y: isMenuClicked ? '0%' : '100%'}}
                      transition={{delay: isMenuClicked ? 0.5 : 0, duration: 0.3}}
                      className="w-fit"
                    >
                      <Link href={`${nav.link.includes('#contact') ? '' : '/'}${nav.link}`}>
                        {nav.title}
                      </Link>
                    </motion.li>
                  )}
                  {nav.dropdown ? (
                    <>
                      <div className="overflow-hidden">
                        <motion.li
                          onClick={() => {
                            setIsMenuClicked(false)
                          }}
                          initial={{y: isMenuClicked ? '100%' : '0%'}}
                          animate={{y: isMenuClicked ? '0%' : '100%'}}
                          transition={{delay: isMenuClicked ? 0.5 : 0, duration: 0.3}}
                          className="w-fit"
                        >
                          <Link href={`${nav.link.includes('#contact') ? '' : '/'}${nav.link}`}>
                            {nav.title}
                          </Link>
                        </motion.li>
                      </div>

                      {events?.categories?.map((item) => {
                        return (
                          <div className="overflow-hidden" key={item.title}>
                            <motion.li
                              onClick={() => {
                                setIsMenuClicked(false)
                              }}
                              initial={{y: isMenuClicked ? '100%' : '0%'}}
                              animate={{y: isMenuClicked ? '0%' : '100%'}}
                              transition={{delay: isMenuClicked ? 0.5 : 0, duration: 0.3}}
                              className="w-fit over"
                            >
                              <Link href={`/events/${item.slug}`}>{item.title}</Link>
                            </motion.li>
                          </div>
                        )
                      })}
                    </>
                  ) : null}
                </div>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </>
  )
}

type List = {
  isMenu?: boolean
  isMenuClicked?: boolean
  setIsMenuClicked?: React.Dispatch<React.SetStateAction<boolean>>
  events: EventsQueryResult
  nav: {
    title: string
    link: string
    dropdown: {
      title: string
      link: string
    }[]
  }
}

function DropDown({events, nav, isMenu, isMenuClicked, setIsMenuClicked}: Readonly<List>) {
  const [isHovered, setIsHovered] = useState(false)

  return isMenu ? (
    <>
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setIsMenuClicked?.(false)
        }}
        initial={{y: isMenuClicked ? '100%' : '0%'}}
        animate={{y: isMenuClicked ? '0%' : '100%'}}
        transition={{delay: isMenuClicked ? 0.5 : 0, duration: 0.3}}
        className="capitalize"
      >
        <span className="flex items-center justify-between gap-2">
          <li>
            <Link href={`/${nav.link}`}>{nav.title}</Link>
          </li>
          <ChevronRight strokeWidth={1.5} className="size-5" />
        </span>
      </motion.button>
      <motion.span
        initial={{visibility: 'hidden'}}
        animate={{visibility: isHovered ? 'visible' : 'hidden'}}
        transition={{delay: isHovered ? 0.4 : 0}}
        className="absolute h-full top-0 left-1/2"
      >
        <ul className="flex flex-col items-start gap-1 text-[5vw]">
          {events?.categories?.map((item) => {
            return (
              <li key={item.title} className="text-left list-none whitespace-nowrap">
                <Link
                  href={`/events/${item.slug}`}
                  onClick={() => {
                    setIsMenuClicked?.(false)
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </motion.span>
    </>
  ) : (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative capitalize"
    >
      <span className="flex items-center gap-1">
        <li>
          <Link href={`/${nav.link}`}>{nav.title}</Link>
        </li>
        <ChevronDown strokeWidth={1.5} className="size-4" />
      </span>
      {isHovered && (
        <span className="py-2 px-3 rounded-md shadow-md bg-background absolute top-full left-0 z-[210]">
          <ul className="flex flex-col items-start gap-1 font-montrealBook">
            {events?.categories?.map((items) => {
              return (
                <li key={items.title} className="whitespace-nowrap py-1">
                  <Link href={`/events/${items.slug}`}>{items.title}</Link>
                </li>
              )
            })}
          </ul>
        </span>
      )}
    </button>
  )
}
