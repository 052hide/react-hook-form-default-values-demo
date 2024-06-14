import { useForm, FormProvider } from 'react-hook-form'

import { BaseForm } from './BaseForm'

import { STATIC_DEFAULT_VALUES } from './const'

export const StaticDefaultValues = () => {
  const methods = useForm({
    defaultValues: STATIC_DEFAULT_VALUES,
  })

  return (
    <FormProvider {...methods}>
      <div>
        <p>{'Static DefaultValues: OK'}</p>
        <BaseForm />
      </div>
    </FormProvider>
  )
}
