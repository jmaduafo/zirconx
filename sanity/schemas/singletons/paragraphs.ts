import {CogIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'paragraphs',
  title: 'Paragraphs',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    // HOME ABOUT SECTION
    defineField({
      name: 'home',
      type: 'object',
      fields: [
        {
          name: 'aboutSummary',
          title: 'About summary',
          description: 'This is the about summary of the home page',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'aboutButton',
          title: 'Button text as link to about page',
          description: 'This is the button text below the about summary of the home page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'servicesTitle',
          title: 'Services title',
          description: 'This field is the title of the services section of the home page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'servicesParagraph1',
          title: 'Services first paragraph',
          description: 'This is the first paragraph in the services section of the home page',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'servicesParagraph2',
          title: 'Services second paragraph',
          description: 'This is the second paragraph in the services section of the home page',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'eventsTransition',
          title: 'Transition summary before events',
          description:
            'This is the transition paragraph before the events section of the home page',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'eventsTitle',
          title: 'Events title',
          description: 'This field is the title of the events section of the home page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'eventsParagraph',
          title: 'Events paragraph',
          description: 'This is the paragraph in the events section of the home page',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'eventButton',
          title: 'Button text as link to event page',
          description: 'This is the button text in the events section of the home page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'galleryTransition',
          title: 'Transition summary before gallery',
          description:
            'This is the transition paragraph before the gallery section of the home page',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'faqTitle',
          title: 'FAQ title',
          description: 'This field is the title of the faq section of the home page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'faqSubtitle',
          title: 'FAQ subtitle',
          description: 'This field is the subtitle of the faq section of the home page',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'about',
      type: 'object',
      fields: [
        {
          name: 'mainTitle',
          title: 'Main title',
          description: 'This field is the main title of the about page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'introSummary',
          title: 'Short large text intro summary',
          description: 'This field is the large text summary of the about page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'introParagraph1',
          title: 'Intro paragraph (on the left)',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'introParagraph2',
          title: 'Intro paragraph (on the right)',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'meetOwnerTitle',
          title: 'Owner title',
          description: 'This field is the main title for the owner section of the about page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'ownerParagraph1',
          title: 'Owner top paragraph',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'ownerParagraph2',
          title: 'Owner bottom paragraph',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'teamSummary',
          title: 'Team summary',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'closingTitle',
          title: 'Closing section title',
          description: 'This field is the title for the last section of the about page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'closingParagraph1',
          title: 'Closing top paragraph',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'closingParagraph2',
          title: 'Closing bottom paragraph',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'events',
      type: 'object',
      fields: [
        {
          name: 'mainTitle',
          title: 'Opening title of events page',
          description: 'This field is the title for the last section of the events page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'paragraph1',
          title: 'Short paragraph (on the left)',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'paragraph2',
          title: 'Short paragraph (on the right)',
          type: 'array',
          of: [
            {
              title: 'Block',
              type: 'block',
              styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H1', value: 'h1'},
                {title: 'H2', value: 'h2'},
              ],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
              },
            },
          ],
        },
        {
          name: 'marquee',
          title: 'Marquee texts',
          description: 'This is a collection of texts for the text marquee in the events page',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'contact',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Contact title',
          description: 'This field is the title of the contact page',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Contact subtitle',
          description: 'This field is the subtitle of the contact page',
          type: 'string',
        },
        {
          name: 'overviewContact',
          title: 'Overview legend',
          description: 'This field is the legend of the overview input fields in the contact form',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'servicesLegend',
          title: 'Services legend',
          description: 'This field is the legend of the services section in the contact form',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'submit',
          title: 'Submit button',
          description: 'This field is the text for the submit button',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: 'footer',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Footer main text',
          description: 'This field is the title of the footer',
          type: 'string',
        },
        {
          name: 'button',
          title: 'Footer button to contact us page',
          description: 'This field is the text of the footer button',
          type: 'string',
          validation: (rule) => rule.required(),
        },
      ],
    }),
    defineField({
      name: 'client',
      type: 'object',
      fields: [
        {
          name: 'marqueeHeader',
          title: 'Client brands marquee title',
          description: 'This field is the title for the client brands marquee section',
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Paragraphs and texts',
        subtitle: 'Client paragraphs',
      }
    },
  },
})
