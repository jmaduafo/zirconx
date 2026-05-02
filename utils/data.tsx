import {Brain, BringToFront, LandPlot, NotebookText, UsersRound} from 'lucide-react'

export const navigation = [
  {
    link: '',
    title: 'home',
  },
  {
    link: 'about',
    title: 'about us',
  },
  {
    link: '#services',
    title: 'services',
  },
  {
    link: 'events',
    title: 'events',
    dropdown: [
      {
        link: 'events/social',
        title: 'social',
        image: "/images/home/events/social.jpg"
      },
      {
        link: 'events/wedding-proposals',
        title: 'weddings & proposals',
        image: "/images/home/events/wedding.jpeg"
      },
      {
        link: 'events/corporate',
        title: 'corporate',
        image: "/images/home/events/corporate.JPG"
      },
    ],
  },
  {
    link: '#contacts',
    title: 'get in touch',
  },
  {
    link: 'contact',
    title: 'contact us',
    button: true,
  },
]

export const hero = [
  '/images/home/hero/1.JPG',
  '/images/home/hero/2.jpeg',
  '/images/home/hero/3.JPG',
  '/images/home/hero/4.JPG',
  '/images/home/hero/5.jpg',
]

export const services = [
  {
    title: 'full-service event planning',
    desc: 'For clients who want end-to-end support, meaning that we would be with them every step of the event process.',
    icon: NotebookText,
    details: [
      'Initial consultation and budget planning',
      'Event concept/theme development',
      'Venue sourcing and booking',
      'Vendor sourcing and management (caterers, décor, media coverage, entertainment, etc.)',
      'Event design (layout, mood board, décor plan)',
      'Timeline and event program creation.',
      'On-site event coordination and supervision',
      'Post-event wrap-up and vendor settlements',
    ],
  },
  {
    title: 'event coordination',
    desc: 'For clients who have planned most of their event but need help bringing it all together.',
    icon: BringToFront,
    details: [
      'Final walkthrough with client and vendors',
      'Review and refinement of event timeline',
      'Point of contact for all vendors starting 2–4 weeks before event',
      'Final confirmations with venue and suppliers',
      'On-site coordination on event day (setup, flow management,breakdown)',
      'Troubleshooting and guest assistance',
    ],
    note: ['Does not include planning, vendor sourcing, or venue booking.'],
  },
  {
    title: 'vendor sourcing',
    desc: 'For clients who want help finding and connecting with trusted service providers who are tailored to their needs.',
    icon: UsersRound,
    details: [
      'Understanding client needs and budget',
      'Recommending 2 to 3 vetted vendors per category',
      'Scheduling and facilitating vendor meetings (if needed)',
      'Reviewing vendor proposals/contracts',
      'Coordination between client and vendors until confirmed',
    ],
    note: ['Typically includes: Catering, entertainment, décor, rentals, photography, etc.'],
  },
  {
    title: 'venue sourcing',
    desc: 'For clients who need help selecting the right space and choosing a venue that perfectly aligns with their vision.',
    icon: LandPlot,
    details: [
      'Gathering client requirements (budget, location, guest count, style)',
      'Research and presentation of suitable venue options',
      'Venue walkthroughs (virtual or physical)',
      'Date availability checks',
      'Contract review and booking support',
    ],
  },
  {
    title: 'conceptualization of event',
    desc: 'For clients who need creative direction  and help shaping their ideas before they start planning.',
    icon: Brain,
    details: [
      'Developing a theme or overarching concept',
      'Creation of a mood board or style guide',
      'Suggested color palette, décor elements, and layout',
      'Recommendations for how the concept can be executed',
      'Optional: Creation of custom event logo or branding images for setup and ambience.',
    ],
  },
]

