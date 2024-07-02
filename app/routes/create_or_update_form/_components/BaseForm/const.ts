import { z } from 'zod'

export const SCHEMA = z.object({
  fieldInput: z.string().min(1, { message: '必須です' }),
  fieldSelect: z.enum(['a', 'b']),
})
