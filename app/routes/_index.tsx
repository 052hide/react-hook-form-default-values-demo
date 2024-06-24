import { clsx } from 'clsx'

import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className={clsx('tw-flex tw-flex-col tw-gap-4')}>
      <a href={'/form'}>{'Form'}</a>
      <a href={'/form_schema'}>{'Form Schema'}</a>
    </div>
  )
}
