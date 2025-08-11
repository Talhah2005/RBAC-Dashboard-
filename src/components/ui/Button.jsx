import { twMerge } from 'tailwind-merge'
export default function Button({ className, children, ...props }) {
  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50',
        'bg-primary text-white hover:opacity-90 px-4 py-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
