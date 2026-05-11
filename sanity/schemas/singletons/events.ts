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
      name: 'social',
      title: 'Social Events',
      type: 'array',
      of: [{type: 'eventGallery'}],
    }),

    defineField({
      name: 'corporate',
      title: 'Corporate Events',
      type: 'array',
      of: [{type: 'eventGallery'}],
    }),

    defineField({
      name: 'weddings',
      title: 'Weddings & Proposals',
      type: 'array',
      of: [{type: 'eventGallery'}],
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
