import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import type { Schema } from './type'

import { BaseForm } from './BaseForm'
import { STATIC_DEFAULT_VALUES } from './const'

const RequiredDefaultValuesProp = ({
  label,
  defaultValues,
}: {
  label: string
  defaultValues: Schema
}) => {
  const methods = useForm({
    defaultValues,
  })

  return (
    <FormProvider {...methods}>
      <div>
        <p>{label}</p>
        <BaseForm />
      </div>
    </FormProvider>
  )
}

export const RequiredDefaultValuesPropForCreate = () => {
  return (
    <RequiredDefaultValuesProp
      label={'Static DefaultValues: OK'}
      defaultValues={STATIC_DEFAULT_VALUES}
    />
  )
}

export const RequiredDefaultValuesPropForUpdate = () => {
  const [dynamicValues, setDynamicValues] = useState<Schema | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setDynamicValues({
        fieldInput: 'updated',
        fieldSelect: 'b',
      })
    }, 2000)
  }, [])

  return dynamicValues ? (
    <RequiredDefaultValuesProp
      label={'Static DefaultValues: OK'}
      defaultValues={{
        ...dynamicValues,
      }}
    />
  ) : (
    <div className={clsx('tw-h-full', 'tw-bg-gray-200', 'tw-animate-pulse')} />
  )
}
