import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'

import { useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import type { Schema } from './type'

import { SCHEMA } from './const'

import { FieldWrapper } from './FieldWrapper'

export const BaseForm = ({
  defaultValues,
  apiErrors,
  onSubmit,
}: {
  defaultValues: Schema
  apiErrors?: Record<keyof Schema, string>
  onSubmit: (schema: Schema) => void
}) => {
  const methods = useForm<Schema>({
    resolver: zodResolver(SCHEMA),
    defaultValues,
  })

  useEffect(() => {
    if (apiErrors) {
      methods.setError('fieldInput', {
        type: 'api',
        message: apiErrors.fieldInput,
      })
      methods.setError('fieldSelect', {
        type: 'api',
        message: apiErrors.fieldSelect,
      })
    }
  }, [apiErrors, methods])

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className={clsx('tw-flex tw-flex-col tw-gap-4', 'tw-px-4 tw-py-4')}
    >
      <FormProvider {...methods}>
        <FieldWrapper
          label={'fieldInput'}
          inputNode={
            <input
              type="text"
              {...methods.register('fieldInput')}
              className={clsx(
                'tw-h-[40px]',
                'tw-rounded',
                'tw-border',
                'tw-px-2'
              )}
            />
          }
          errorMessage={methods.formState.errors.fieldInput?.message || ''}
        />
        <FieldWrapper
          label={'fieldSelect'}
          inputNode={
            <div className={clsx('tw-flex tw-gap-8')}>
              <label className={clsx('tw-flex tw-gap-2')}>
                <input
                  type={'radio'}
                  value={'a'}
                  {...methods.register('fieldSelect')}
                />
                <span>{'Option A'}</span>
              </label>
              <label className={clsx('tw-flex tw-gap-2')}>
                <input
                  type={'radio'}
                  value={'b'}
                  {...methods.register('fieldSelect')}
                />
                <span>{'Option B'}</span>
              </label>
            </div>
          }
          errorMessage={
            methods.formState.dirtyFields.fieldSelect
              ? ''
              : methods.formState.errors.fieldSelect?.message || ''
          }
        />

        <button
          type="submit"
          className={clsx(
            'tw-h-[40px]',
            'tw-rounded',
            'tw-border',
            'tw-px-4',
            'tw-bg-black tw-text-white'
          )}
        >
          {'submit'}
        </button>
      </FormProvider>
    </form>
  )
}
