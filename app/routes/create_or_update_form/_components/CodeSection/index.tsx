import { clsx } from 'clsx'

export const CodeSection = ({ code }: { code: string }) => {
  return (
    <code className={clsx('tw-whitespace-pre tw-break-all tw-text-sm')}>
      {code}
    </code>
  )
}
