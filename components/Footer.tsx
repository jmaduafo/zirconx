'use client'

import {SettingsQueryResult} from '@/sanity.types'
import {navigation} from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import {toast} from 'sonner'
import BlurText from './animations/BlurText'
import PrimaryButton from './buttons/PrimaryButton'
import Header2 from './headings/Header2'

type Contacts = {
  data: SettingsQueryResult
}

function Footer({data}: Readonly<Contacts>) {


  return (
    <footer
      id="contacts"
      className="bg-foreground text-background px-[4vw] py-10 flex flex-col md:flex-row justify-between items-start gap-6"
    >
      {/* CALL TO ACTION TO CONTACT US PAGE */}
      <div className="flex flex-col gap-5">
        <Header2 className="italic w-[5em] !leading-[0.8]">
          <BlurText text="Want to contact us?" />
        </Header2>
        <PrimaryButton text="Inquire now" href="/contact" isLight />
      </div>
      {/* FOOTER LINK LIST BY SECTION */}
      <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
        {/* PAGES LIST */}
        <FooterList title="Pages">
          {navigation.map((nav) => {
            return (
              <li key={nav.title} className="capitalize">
                <Link href={`${nav.link.includes('#contact') ? '' : '/'}${nav.link}`}>
                  {nav.title}
                </Link>
              </li>
            )
          })}
        </FooterList>
        {/* EVENTS LINKS */}
        <FooterList title="Events">
          {navigation
            .find((item) => item.title.toLowerCase().includes('event'))
            ?.dropdown?.map((nav) => {
              return (
                <li key={nav.title} className="capitalize">
                  <Link href={`/${nav.link}`}>{nav.title}</Link>
                </li>
              )
            })}
        </FooterList>
        {/* LOCATION DISPLAY */}
        <FooterList title="Location">
          <li className="max-w-36">{data?.address?.street}</li>
          <li>
            {data?.address?.city}, {data?.address?.country}
          </li>
          <li className="mt-2">
            {/* onClick={() => data?.phone && copyToClipboard(data.phone.toString())} */}
            <button >
              +{data?.phone}
            </button>
          </li>
        </FooterList>
        {/* CLIENT SOCIAL LINKS */}
        <FooterList title="Socials">
          {data
            ? data.socialLinks?.map((social) => {
                return (
                  <li key={social.platform}>
                    <a target="_blank" href={social.url ?? ''}>
                      {social.platform}
                    </a>
                  </li>
                )
              })
            : null}
          <li>
            <a href={`mailto:${data?.email}`}>Email</a>
          </li>
          {/* <li>
            <button onClick={() => copyToClipboard(data?.phone)}>
              +{data?.phone}
            </button>
          </li> */}
        </FooterList>
      </div>
    </footer>
  )
}

export default Footer

function FooterList({
  title,
  children,
}: {
  readonly title: string
  readonly children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm uppercase opacity-60 leading-none">{title}</p>
      <ul className="grid text-sm">{children}</ul>
    </div>
  )
}
