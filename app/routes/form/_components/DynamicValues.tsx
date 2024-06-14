import { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import type { Schema } from './type'

import { BaseForm } from './BaseForm'

export const DynamicValues = () => {
  const [dynamicValues, setDynamicValues] = useState<Partial<Schema>>({})

  const methods = useForm({
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
        <p>{'Dynamic Values: OK'}</p>
        <BaseForm />
      </div>
    </FormProvider>
  )
}
