import { clsx } from 'clsx'
import { useFormContext } from 'react-hook-form'

import type { Schema } from './type'

import { FieldWrapper } from './FieldWrapper'

export const BaseForm = () => {
  const { register } = useFormContext<Schema>()

  return (
    <form className={clsx('tw-flex tw-flex-col tw-gap-4', 'tw-px-4 tw-py-4')}>
      <FieldWrapper
        label={'fieldInput'}
        inputNode={
          <input
            type="text"
            {...register('fieldInput')}
            className={clsx(
              'tw-h-[40px]',
              'tw-rounded',
              'tw-border',
              'tw-px-2'
            )}
          />
        }
      />
      <FieldWrapper
        label={'fieldSelect'}
        inputNode={
          <div className={clsx('tw-flex tw-gap-8')}>
            <label className={clsx('tw-flex tw-gap-2')}>
              <input type={'radio'} value={'a'} {...register('fieldSelect')} />
              <span>{'Option A'}</span>
            </label>
            <label className={clsx('tw-flex tw-gap-2')}>
              <input type={'radio'} value={'b'} {...register('fieldSelect')} />
              <span>{'Option B'}</span>
            </label>
          </div>
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
    </form>
  )
}
