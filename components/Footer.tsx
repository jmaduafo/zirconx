import {Settings} from '@/types'
import {navigation} from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import PrimaryButton from './buttons/PrimaryButton'
import Header2 from './headings/Header2'

type Contacts = {
  data: Settings
}

function Footer({data}: Readonly<Contacts>) {
  return (
    <footer className="bg-foreground text-background px-[4vw] py-10 flex justify-between items-start">
      <div className="flex flex-col gap-5">
        <Header2 className="italic w-[5em] !leading-[0.8]" text="Want to contact us?" />
        <PrimaryButton text="Inquire now" href="/contact" isLight />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <FooterList title="Pages">
          {navigation.map((nav) => {
            return (
              <li key={nav.title} className="capitalize">
                <Link href={`/${nav.link}`}>{nav.title}</Link>
              </li>
            )
          })}
        </FooterList>
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
        <FooterList title="Location">
          <li className="max-w-36">{data?.address?.street}</li>
          <li>
            {data?.address?.city}, {data?.address?.country}
          </li>
        </FooterList>
        <FooterList title="Socials">
          {data
            ? data.socialLinks.map((social) => {
                return (
                  <li key={social.platform}>
                    <a href={social.url}>{social.platform}</a>
                  </li>
                )
              })
            : null}
          <li>
            <a href={`mailto:${data.email}`}>Email</a>
          </li>
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
