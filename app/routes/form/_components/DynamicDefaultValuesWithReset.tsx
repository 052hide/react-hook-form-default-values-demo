import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import type { Schema } from './type'

import { BaseForm } from './BaseForm'

export const DynamicDefaultValuesWithReset = () => {
  const [dynamicValues, setDynamicValues] = useState<Partial<Schema>>({})

  const methods = useForm({
    defaultValues: dynamicValues,
  })

  useEffect(() => {
    setTimeout(() => {
      setDynamicValues({
        fieldInput: 'updated',
        fieldSelect: 'b',
      })
    }, 2000)
  }, [])

  useEffect(() => {
    methods.reset(dynamicValues)
  }, [dynamicValues, methods])

  return (
    <FormProvider {...methods}>
      <div>
        <p>{'Dynamic DefaultValues with reset: OK'}</p>
        <BaseForm />
      </div>
    </FormProvider>
  )
}
