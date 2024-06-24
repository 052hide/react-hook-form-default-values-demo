import { clsx } from 'clsx'

import type { ReactNode } from 'react'

export const Row = ({
  ColTag,
  title,
  description,
  input,
  output,
  schema,
}: {
  ColTag: 'td' | 'th'
  title: ReactNode
  description: ReactNode
  input: ReactNode
  output: ReactNode
  schema: ReactNode
}) => {
  return (
    <tr>
      <ColTag className={clsx('tw-px-2 tw-py-1')}>
        <p className={clsx('tw-text-sm')}>{title}</p>
      </ColTag>
      <ColTag className={clsx('tw-max-w-[400px]', 'tw-px-2 tw-py-1')}>
        <p className={clsx('tw-text-sm')}>{description}</p>
      </ColTag>
      <ColTag className={clsx('tw-px-2 tw-py-1')}>
        <p className={clsx('tw-text-sm')}>{input}</p>
      </ColTag>
      <ColTag className={clsx('tw-px-2 tw-py-1')}>
        <p className={clsx('tw-text-sm')}>{output}</p>
      </ColTag>
      <ColTag className={clsx('tw-max-w-[400px]', 'tw-px-2 tw-py-1')}>
        <pre className={clsx('tw-whitespace-pre-line tw-break-all tw-text-sm')}>
          {schema}
        </pre>
      </ColTag>
    </tr>
  )
}
