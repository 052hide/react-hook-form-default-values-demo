import { useState } from 'react'

import type { ComponentProps } from 'react'

import { BaseForm } from '../BaseForm'

export const UpdateForm = ({
  fetchedData,
}: {
  fetchedData: {
    fieldInput: number // APIレスポンスとFormの入力の型が同じとは限らない
    fieldSelect: 'a' | 'b'
  }
}) => {
  const [apiErrors, setApiErrors] =
    useState<ComponentProps<typeof BaseForm>['apiErrors']>(undefined)

  const onSubmit = () => {
    alert('更新API呼び出し')
    setApiErrors({
      fieldInput: 'fieldInputは更新APIでAPIエラーです',
      fieldSelect: 'fieldSelectは更新APIでAPIエラーです',
    })
  }

  return (
    <BaseForm
      defaultValues={{
        fieldInput: `${fetchedData.fieldInput}`,
        fieldSelect: fetchedData.fieldSelect,
      }}
      apiErrors={apiErrors}
      onSubmit={onSubmit}
    />
  )
}
