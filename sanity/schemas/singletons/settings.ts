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
    {
      name: 'faqs',
      type: 'array',
      title: 'FAQ',
      of: [{type: 'faq'}],
    },
    {
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [{type: 'testimonial'}],
    },
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',

      of: [{type: 'service'}],
    }),
    // CLIENT BRANDS
    defineField({
      name: 'clients',
      title: 'Client Brand Logos',
      type: 'array',
      description: 'Remove background before inserting (use remove.bg); must be 16:9 ratio',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // GALLERY
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      description: 'Images for gallery in home and about page',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

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
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      description: "The client's logo",
      options: {
        hotspot: true,
      },
    }),

    // HERO
    defineField({
      name: 'home',
      type: 'object',
      fields: [
        {
          name: 'hero',
          title: 'Hero images in home page',
          type: 'array',
          description: 'Images for hero section in home page',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
        {
          name: 'services',
          title: 'Services image',
          type: 'image',
          description: "The service's image to be displayed on the home page",
          options: {
            hotspot: true,
          },
        },
        {
          name: 'transition1',
          title: 'First transition image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'events',
          title: 'Events image',
          type: 'image',
          description: "The events's image to be displayed on the home page",
          options: {
            hotspot: true,
          },
        },
        {
          name: 'transition2',
          title: 'Second transition image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'transition3',
          title: 'Third transition image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'about',
      type: 'object',
      fields: [
        {
          name: 'opening',
          title: 'About page opening image',
          type: 'image',
          description: 'The about opening image to be displayed on the about page',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'transition',
          title: 'About page transition image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'closing',
          title: 'About page closing image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'events',
      type: 'object',
      fields: [
        {
          name: 'opening',
          title: 'Event page opening image',
          type: 'image',
          description: 'The event opening image to be displayed on the event page',
          options: {
            hotspot: true,
          },
        },
      ],
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
