import {LucideProps} from 'lucide-react'
import type {PortableTextBlock} from 'next-sanity'
import {ForwardRefExoticComponent, RefAttributes} from 'react'
import type {Image} from 'sanity'

export interface MilestoneItem {
  _key: string
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _id: string
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface Settings {
  _id: string
  _type: string
  address: {
    city: string
    country: string
    street: string
  }
  phone: string
  email: string
  socialLinks: {platform: string; url: string}[]
  statistics: {title: string; statistic: string}[]
}

export type Service = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  title: string;
  desc:string;
  details: string[];
  note?: string[];
}
