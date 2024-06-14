import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import type { Schema } from './type'

import { BaseForm } from './BaseForm'

import { STATIC_DEFAULT_VALUES } from './const'

export const StaticDefaultValuesAndDynamicValues = () => {
  const [dynamicValues, setDynamicValues] = useState<Partial<Schema>>({})

  const methods = useForm({
    defaultValues: STATIC_DEFAULT_VALUES,
    values: dynamicValues,
  })

  useEffect(() => {
    setTimeout(() => {
      setDynamicValues({
        fieldInput: 'updated',
        fieldSelect: 'b',
      })
    }, 2000)
  }, [])

  return (
    <FormProvider {...methods}>
      <div>
        <p>{'Static DefaultValues and Dynamic Values: OK???'}</p>
        <BaseForm />
      </div>
    </FormProvider>
  )
}
