
export const address = {
  name: "address",
  type: "object",
  fields: [
    { name: "street", type: "string" },
    { name: "city", type: "string" },
    { name: "country", type: "string" },
  ],
}

export const socials = {
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    {
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: ["Instagram", "Facebook", "Twitter", "LinkedIn", "Pinterest"],
      },
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
}

export const statistics = {
  name: "statistic",
  title: "Statistic",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      options: {
        list: ["Years Active", "Events", "Specialties", "Clients"],
      },
    },
    {
      name: "statistic",
      title: "Stat. Number",
      type: "string",
    },
  ],
}