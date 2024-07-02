import { clsx } from 'clsx'

import { useEffect, useState } from 'react'

import type { ComponentProps } from 'react'

import { CodeSection } from './_components/CodeSection'
import { CreateForm } from './_components/CreateForm'
import { UpdateForm } from './_components/UpdateForm'

export default function Index() {
  const [fetchedData, setFetchedData] = useState<
    ComponentProps<typeof UpdateForm>['fetchedData'] | null
  >(null)

  useEffect(() => {
    setTimeout(() => {
      setFetchedData({
        fieldInput: 123,
        fieldSelect: 'b',
      })
    }, 2000)
  }, [])

  return (
    <div className={clsx('tw-grid tw-grid-cols-2 tw-gap-8', 'tw-p-8')}>
      <div className={clsx('tw-rounded', 'tw-p-4', 'tw-bg-neutral-50')}>
        <p>{'作成Form'}</p>
        <CreateForm />
      </div>

      <div className={clsx('tw-rounded', 'tw-p-4', 'tw-bg-neutral-50')}>
        <p>{'更新Form'}</p>
        {fetchedData ? (
          <UpdateForm fetchedData={fetchedData} />
        ) : (
          <p>{'fetching...'}</p>
        )}
      </div>

      <div className={clsx('tw-rounded', 'tw-p-4', 'tw-bg-neutral-50')}>
        <CodeSection
          code={`export const CreateForm = () => {
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
}`}
        />
      </div>

      <div className={clsx('tw-rounded', 'tw-p-4', 'tw-bg-neutral-50')}>
        <CodeSection
          code={`export const UpdateForm = ({
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
        fieldInput: \`\${fetchedData.fieldInput}\`,
        fieldSelect: fetchedData.fieldSelect,
      }}
      apiErrors={apiErrors}
      onSubmit={onSubmit}
    />
  )
}`}
        />
      </div>
    </div>
  )
}
