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




string input -> z.string() -> undefined -> type error
default values -> string -> required error



input/others
uncontrolled/controlled

select

required -> required -> default valueも必須になっちゃう
  z.enum().nullable().refine(v => v === null, error) -> input: enum or null, output: enum

radio -> z.enum() -> Input, output enum
初期値を空にして絶対にユーザーに操作させたいradioボタンとかはselectと同じ

input

z.string()

input number uncontrolled

z.string().refine(v => isNumber()).transform(v => Number(v)).pipe(z.number())

input -> string 空文字を受け付ける、outout: number

input number controlled

z.number().nullable().refine(v => v === null)
input -> number or null, outout: number