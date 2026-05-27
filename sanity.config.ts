'use client'

/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/page.tsx` route
 */
import {apiVersion, dataset, projectId, studioUrl} from '@/sanity/lib/api'
import * as resolve from '@/sanity/plugins/resolve'
import {pageStructure, singletonPlugin} from '@/sanity/plugins/settings'
import page from '@/sanity/schemas/documents/page'
import project from '@/sanity/schemas/documents/project'
import duration from '@/sanity/schemas/objects/duration'
import milestone from '@/sanity/schemas/objects/milestone'
import timeline from '@/sanity/schemas/objects/timeline'
import service from '@/sanity/schemas/objects/client_services'
import settings from '@/sanity/schemas/singletons/settings'
import events from './sanity/schemas/singletons/events'
import paragraphs from './sanity/schemas/singletons/paragraphs'
import { lucideIconPicker } from 'sanity-plugin-lucide-icon-picker';
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {unsplashImageAsset} from 'sanity-plugin-asset-source-unsplash'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import { socials, statistics, faqs, testimonials } from './sanity/schemas/objects/client_settings'
import eventGallery from "@/sanity/schemas/objects/client_events"
import eventCategory from './sanity/schemas/objects/eventCategory'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Next.js Personal Website with Sanity.io'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  // useCdn: false,
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      settings,
      // home,
      paragraphs,
      events,
      // Documents
      duration,
      page,
      project,
      // Objects
      milestone,
      timeline,
      socials,
      statistics,
      faqs,
      service,
      testimonials,
      eventGallery,
      eventCategory
    ],
  },
  plugins: [
    structureTool({
      structure: pageStructure([settings, events, paragraphs]),
    }),
    presentationTool({
      resolve,
      previewUrl: {previewMode: {enable: '/api/draft-mode/enable'}},
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([settings.name, events.name, paragraphs.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    lucideIconPicker(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
