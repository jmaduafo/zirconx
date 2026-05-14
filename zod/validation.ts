import * as z from 'zod'

export const contactSchema = z.object({
  first_name: z
    .string()
    .min(1, 'First name cannot be empty.')
    .max(20, 'First name must be at most 20 characters.'),
  last_name: z
    .string()
    .min(1, 'Last name cannot be empty')
    .max(20, 'Last name must be at most 20 characters.'),
  email: z.email().min(1),
  phone: z.string().min(9),
  type: z.string().min(1),
  date: z.string(),
  guests: z.string().min(1),
  address: z.string().min(1),
  budget: z.string().min(1),
  additional: z.string().min(1),
  services: z.array(z.string().min(1))
})
