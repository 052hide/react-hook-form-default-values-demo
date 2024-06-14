import { clsx } from 'clsx'

import type { ReactNode } from 'react'

export const FieldWrapper = ({
  label,
  inputNode,
}: {
  label: string
  inputNode: ReactNode
}) => {
  return (
    <div className={clsx('tw-flex tw-items-center tw-gap-4')}>
      <label>{label}</label>
      {inputNode}
    </div>
  )
}
