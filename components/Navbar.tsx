'use client'

import Logo from '@/public/logo/zircon_logo.png'
import {navigation} from '@/utils/data'
import {motion} from 'framer-motion'
import {ChevronDown, ChevronRight, Menu, X} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {Fragment, useState} from 'react'
import {Button} from './ui/button'

export function Navbar() {
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
        className="z-[200] fixed top-0 w-full px-5 sm:px-10 bg-background"
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
          <div className="w-[5em] h-[5em] object-cover object-bottom">
            <Image src={Logo} alt="zircon logo" className="w-full h-full" />
          </div>
          <nav className="hidden lg:block capitalize text-sm font-montrealMedium">
            <ul className="flex items-center gap-5">
              {navigation.map((nav) => {
                return (
                  <Fragment key={nav.title}>
                    {!nav.button && !nav.dropdown && (
                      <li>
                        <Link href={`/${nav.link}`}>{nav.title}</Link>
                      </li>
                    )}
                    {nav.dropdown && <DropDown nav={nav} />}
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
          width: isMenuClicked ? '0vw' : '100vw',
          height: isMenuClicked ? '0vh' : '100vh',
          visibility: isMenuClicked ? 'hidden' : 'visible',
          borderBottomLeftRadius: isMenuClicked ? '100%' : '0%',
        }}
        animate={{
          width: isMenuClicked ? '100vw' : '0vw',
          height: isMenuClicked ? '100vh' : '0vh',
          visibility: isMenuClicked ? 'visible' : 'hidden',
          borderBottomLeftRadius: isMenuClicked ? '0%' : '100%',
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
        <div className="mt-auto relative">
          <ul className="text-background font-serif text-[7vw] leading-none capitalize">
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
                      <Link href={`/${nav.link}`}>{nav.title}</Link>
                    </motion.li>
                  )}
                  {nav.dropdown && <DropDown isMenuClicked={isMenuClicked} nav={nav} isMenu />}
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
  nav: {
    title: string
    link: string
    dropdown: {
      title: string
      link: string
    }[]
  }
}

function DropDown({nav, isMenu, isMenuClicked, setIsMenuClicked}: Readonly<List>) {
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
          <ChevronRight strokeWidth={1.5} className="size-4" />
        </span>
      </motion.button>
      {/* {isHovered && ( */}
      <motion.span
        initial={{visibility: isHovered ? 'hidden' : 'visible'}}
        animate={{visibility: isHovered ? 'visible' : 'hidden'}}
        transition={{delay: isHovered ? 0.4 : 0}}
        className="absolute h-full top-0 left-1/2"
      >
        <ul className="flex flex-col items-start gap-1 text-[6vw]">
          {nav.dropdown.map((items) => {
            return (
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                key={items.title}
                onClick={() => setIsMenuClicked?.(false)}
              >
                <li className="text-left">
                  <Link href={`/${items.link}`}>{items.title}</Link>
                </li>
              </button>
            )
          })}
        </ul>
      </motion.span>
      {/* )} */}
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
            {nav.dropdown.map((items) => {
              return (
                <li key={items.title} className="whitespace-nowrap py-1">
                  <Link href={`/${items.link}`}>{items.title}</Link>
                </li>
              )
            })}
          </ul>
        </span>
      )}
    </button>
  )
}
