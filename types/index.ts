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

export type Service = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  title: string;
  desc:string;
  details: string[];
  note?: string[];
}
