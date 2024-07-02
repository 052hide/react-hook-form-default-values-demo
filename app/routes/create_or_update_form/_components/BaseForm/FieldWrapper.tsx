import { clsx } from 'clsx'

import type { ReactNode } from 'react'

export const FieldWrapper = ({
  label,
  inputNode,
  errorMessage,
}: {
  label: string
  inputNode: ReactNode
  errorMessage: string
}) => {
  return (
    <div>
      <div className={clsx('tw-flex tw-items-center tw-gap-4')}>
        <label>{label}</label>
        {inputNode}
      </div>
      <p className={clsx('tw-mt-1', 'tw-text-sm tw-text-red-500')}>
        {errorMessage}
      </p>
    </div>
  )
}
