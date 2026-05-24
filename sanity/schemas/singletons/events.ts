import {ConfettiIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'


export default defineType({
  name: 'events',
  title: 'Events',
  type: 'document',
  icon: ConfettiIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
 fields: [
    defineField({
      name: 'categories',
      title: 'Event Categories',
      type: 'array',
      of: [{type: 'eventCategory'}],
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      description: 'Subcategory Image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
      description: 'The link name (ex: /events/social, /events/weddings-proposals, etc.)',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Events',
        subtitle: 'Event Galleries',
      }
    },
  },
})
