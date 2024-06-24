import { clsx } from 'clsx'

import { Row } from './_components/Row'

export default function Index() {
  return (
    <div className={clsx('tw-flex tw-flex-col tw-gap-8', 'tw-p-8')}>
      <div>
        <p>{'前提'}</p>
        <p>
          {
            'react-hook-formのuseFormにdefaultValuesを設定することで意図しないundefinedが入らないようにする'
          }
        </p>
      </div>

      <div>
        <table className={clsx('tw-w-full', 'tw-border')}>
          <thead>
            <Row
              ColTag={'th'}
              title={'要素'}
              description={'特徴'}
              input={'input'}
              output={'output'}
              schema={'schema sample'}
            />
          </thead>
          <tbody>
            <Row
              ColTag={'td'}
              title={'Select'}
              description={'初期値が空'}
              input={'enum or null'}
              output={'enum (必須項目の場合)'}
              schema={
                'z.enum().nullable().refine(v !== null).transform(v => v === null ? throw new Error("required") : v })'
              }
            />
            <Row
              ColTag={'td'}
              title={'Radio'}
              description={
                <>
                  {'初期値が設定されている'}
                  <br />
                  {
                    'ユーザーに操作させたいなど初期値が空のRadioの場合はSelectと同じ'
                  }
                </>
              }
              input={'enum'}
              output={'enum'}
              schema={'z.enum()'}
            />
            <Row
              ColTag={'td'}
              title={'Input String Uncontrolled'}
              description={'初期値が空'}
              input={'string (空文字が許容される)'}
              output={'string'}
              schema={'z.string()'}
            />
            <Row
              ColTag={'td'}
              title={'Input Number Uncontrolled'}
              description={'初期値が空'}
              input={'string (空文字が許容される)'}
              output={'number'}
              schema={
                'z.string().refine(v => isNumber(v)).transform(v => Number(v)).pipe(z.number())'
              }
            />
            <Row
              ColTag={'td'}
              title={'Input Number Controlled'}
              description={'初期値が空'}
              input={'number or null'}
              output={'number'}
              schema={'z.number().nullable().refine(v => v !== null)'}
            />
          </tbody>
        </table>
      </div>
      <div
        className={clsx(
          'tw-grid tw-grid-cols-2 tw-gap-8',
          'tw-p-8',
          'tw-bg-neutral-50'
        )}
      >
        <div>
          <pre>
            {`import { z } from 'zod'

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
})`}
          </pre>
        </div>
        <div className={clsx('tw-flex tw-flex-col tw-gap-4')}>
          <pre>
            {`export type Input = z.input<typeof SCHEMA>
type Input = {
  select: "a" | "b" | null;
  radio: "a" | "b";
  inputStringUncontrolled: string;
  inputNumberUncontrolled: string;
  inputNumberControlled: number | null;
}`}
          </pre>
          <pre>
            {`export type Output = z.output<typeof SCHEMA>
type Output = {
  select: "a" | "b";
  radio: "a" | "b";
  inputStringUncontrolled: string;
  inputNumberUncontrolled: number;
  inputNumberControlled: number;
}`}
          </pre>
          <pre>
            {`export const DEFAULT_VALUES = {
  select: null,
  radio: 'a',
  inputStringUncontrolled: '',
  inputNumberUncontrolled: '',
  inputNumberControlled: null,
} satisfies Input`}
          </pre>
        </div>
      </div>
    </div>
  )
}
