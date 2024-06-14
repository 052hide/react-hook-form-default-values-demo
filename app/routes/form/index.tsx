import { clsx } from 'clsx'

import { DynamicDefaultValues } from './_components/DynamicDefaultValues'
import { DynamicDefaultValuesWithReset } from './_components/DynamicDefaultValuesWithReset'
import { DynamicValues } from './_components/DynamicValues'
import {
  RequiredDefaultValuesPropForCreate,
  RequiredDefaultValuesPropForUpdate,
} from './_components/RequiredDefaultValuesProp'
import { StaticDefaultValues } from './_components/StaticDefaultValues'
import { StaticDefaultValuesAndDynamicValues } from './_components/StaticDefaultValuesAndDynamicValues'

export default function Index() {
  return (
    <div className={clsx('tw-grid tw-grid-cols-3 tw-gap-8')}>
      <StaticDefaultValues />
      <DynamicDefaultValues />
      <DynamicDefaultValuesWithReset />
      <DynamicValues />
      <StaticDefaultValuesAndDynamicValues />
      <div />
      <RequiredDefaultValuesPropForCreate />
      <RequiredDefaultValuesPropForUpdate />
    </div>
  )
}
