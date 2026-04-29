'use client'

import Logo from '@/public/logo/zircon_logo.png'
import {navigation} from '@/utils/data'
import {ChevronDown} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {Fragment} from 'react/jsx-runtime'
import {Button} from './ui/button'

export function Navbar() {
  return (
    <header className="z-[200] fixed top-0 w-full px-10 bg-background flex justify-between items-center">
      <div className="w-[5em] h-[5em] object-cover object-bottom">
        <Image src={Logo} alt="zircon logo" className="w-full h-full" />
      </div>

      <nav className="capitalize text-sm">
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
                {nav.button && <Button>{nav.title}</Button>}
              </Fragment>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

type List = {
  nav: {
    title: string
    link: string
    dropdown: {
      title: string
      link: string
    }[]
  }
}

function DropDown({nav}: Readonly<List>) {
  const [isHovered, setIsHovered] = useState(false)

  return (
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
                  <Link href={items.link}>{items.title}</Link>
                </li>
              )
            })}
          </ul>
        </span>
      )}
    </button>
  )
}
