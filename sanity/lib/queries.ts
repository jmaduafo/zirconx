import {defineQuery} from 'next-sanity'

export const homePageQuery = defineQuery(`
  *[_type == "home"][0]{
    _id,
    _type,
    overview,
    showcaseProjects[]{
      _key,
      ...@->{
        _id,
        _type,
        coverImage,
        overview,
        "slug": slug.current,
        tags,
        title,
      }
    },
    title,
  }
`)

export const pagesBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _type,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`)

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _type,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`)

// EDIT HERE FOR CLIENT INFO
export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    _id,
    _type,
    socialLinks[]{
      platform,
      url
    },
    statistics[]{
      title,
      statistic
    },
    faqs[]{
      question,
      answer
    },
    testimonials[]{
      client,
      text
    },
    gallery,
    address{
      street,
      city,
      country
    },
    phone,
    email,
    owner{
      asset->
    }
  }
`)

export const eventsQuery = defineQuery(`
  *[_type == "events"][0]{
    social[]{
      subcategory,
      images
    },

    corporate[]{
      subcategory,
      images
    },

    weddings[]{
      subcategory,
      images
    }
  }
`)

export const slugsByTypeQuery = defineQuery(`
  *[_type == $type && defined(slug.current)]{"slug": slug.current}
`)
