import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    // defineField({
    //   name: 'icon',
    //   title: 'Select Icon',
    //   type: 'lucide-icon',
    //   validation: (Rule) => Rule.required(),
    // }),

    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',

      of: [
        {
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'note',
      title: 'Optional Notes',
      type: 'array',

      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
})