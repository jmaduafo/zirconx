import {defineField, defineType} from 'sanity'
import { UsersIcon } from '@sanity/icons'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      type: 'string',
      name: 'platform',
      title: 'Platform (ex. Facebook, Twitter, etc.)',
      validation: (rule) => rule.required(),
    }),
    defineField({
        type: "string",
        name: 'url',
        title: 'Url',
        validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'social',
      subtitle: 'url',
    },
  },
})