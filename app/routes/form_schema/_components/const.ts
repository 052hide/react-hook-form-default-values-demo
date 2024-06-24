import { z } from 'zod'

export const SCHEMA = z.object({
  select: z
    .enum(['a', 'b'])
    .nullable()
    .refine((v) => v !== null)
    .transform((v) => {
      if (v === null) {
        throw new Error('required')
      }
      return v
    }),
  radio: z.enum(['a', 'b']),
  inputStringUncontrolled: z.string(),
  inputNumberUncontrolled: z
    .string()
    .refine((v) => !Number.isNaN(v))
    .transform((v) => Number(v))
    .pipe(z.number()),
  inputNumberControlled: z
    .number()
    .nullable()
    .refine((v) => v !== null)
    .transform((v) => {
      if (v === null) {
        throw new Error('required')
      }
      return v
    }),
})

export type Input = z.input<typeof SCHEMA>
export type Output = z.output<typeof SCHEMA>

export const DEFAULT_VALUES = {
  select: null,
  radio: 'a',
  inputStringUncontrolled: '',
  inputNumberUncontrolled: '',
  inputNumberControlled: null,
} satisfies Input
