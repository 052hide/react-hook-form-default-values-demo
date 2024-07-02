import { useState } from 'react'

import type { ComponentProps } from 'react'

import { STATIC_DEFAULT_VALUES } from './_const'
import { BaseForm } from '../BaseForm'

export const CreateForm = () => {
  const [apiErrors, setApiErrors] =
    useState<ComponentProps<typeof BaseForm>['apiErrors']>(undefined)

  const onSubmit = () => {
    alert('作成API呼び出し')
    setApiErrors({
      fieldInput: 'fieldInputは作成APIでAPIエラーです',
      fieldSelect: 'fieldSelectは作成APIでAPIエラーです',
    })
  }

  return (
    <BaseForm
      defaultValues={STATIC_DEFAULT_VALUES}
      apiErrors={apiErrors}
      onSubmit={onSubmit}
    />
  )
}
