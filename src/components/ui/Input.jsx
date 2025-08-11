import { twMerge } from 'tailwind-merge'
export default function Input({ className, ...props }) {
  return (
    <input
      className={twMerge(
        'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm',
        'placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      {...props}
    />
  )
}
