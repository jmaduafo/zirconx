import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventGallery',
  title: 'Event Gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'string',
      description: 'Example: Bridal Shower, Product Launch, Proposal Dinner',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
})