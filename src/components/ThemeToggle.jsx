import Button from './ui/Button'
import { useThemeStore } from '../store/themeStore'

export default function ThemeToggle() {
  const { theme, toggle } = useThemeStore()
  return <Button onClick={toggle} className="bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white">{theme === 'dark' ? 'Light' : 'Dark'}</Button>
}
