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
