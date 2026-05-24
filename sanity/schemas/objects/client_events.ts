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
      options: {
        list: ['events/social', 'events/wedding-proposals', 'events/corporate'],
      },
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