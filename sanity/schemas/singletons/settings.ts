import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    {
      name: 'socialLinks',
      type: 'array',
      title: 'Social Links',
      of: [{type: 'socialLink'}],
    },
    {
      name: 'statistics',
      type: 'array',
      title: 'Statistics',
      of: [{type: 'statistic'}],
    },
    defineField({
      name: 'address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'country', type: 'string'},
      ],
    }),
    defineField({name: 'email', type: 'string', validation: (rule) => rule.required().email()}),
    defineField({
      name: 'phone',
      type: 'number',
      validation: (rule) => rule.required().integer().min(10),
    }),
    defineField({
      name: 'owner',
      title: 'Owner Self Portrait',
      type: 'image',
      description: "The client's image to be displayed on the about page",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
        subtitle: 'Client Info',
      }
    },
  },
})
