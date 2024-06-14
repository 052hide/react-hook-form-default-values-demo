import { z } from 'zod'

import type { Schema } from './type'

export const SCHEMA = z.object({
  fieldInput: z.string(),
  fieldSelect: z.enum(['a', 'b']),
})

export const STATIC_DEFAULT_VALUES = {
  fieldInput: 'default',
  fieldSelect: 'a',
} as const satisfies Schema
