import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventCategory',
  title: 'Event Category',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Category Description',
      type: 'text',
      rows: 4,
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

    defineField({
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [{type: 'eventGallery'}],
    }),
  ],
})
