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