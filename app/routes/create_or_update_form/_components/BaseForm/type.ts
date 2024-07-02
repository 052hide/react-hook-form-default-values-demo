import type { SCHEMA } from './const'
import type { z } from 'zod'

export type Schema = z.infer<typeof SCHEMA>
