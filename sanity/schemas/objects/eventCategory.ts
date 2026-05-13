import { defineType, defineField } from "sanity";

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
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [{type: 'eventGallery'}],
    }),
  ],
})