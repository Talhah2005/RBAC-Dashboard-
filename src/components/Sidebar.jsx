import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import Button from './ui/Button'
import { useAuthStore } from '../store/authStore'
import { logout } from '../lib/firebase'
import { useState } from 'react'

export default function Sidebar() {
  const { role } = useAuthStore()
  const [open, setOpen] = useState(true)

  const linkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 transition ${
      isActive ? 'bg-neutral-200 dark:bg-neutral-800' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
    }`

 return (
  <aside
    className={`h-screen border-r bg-white/70 dark:bg-neutral-900/60 transition-all ${
      open ? 'w-64' : 'w-16'
    } sticky top-0`}
  >
    <div className="flex items-center justify-between p-3">
      <span className="font-semibold">{open ? 'Dashboard' : 'DB'}</span>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm opacity-70 hover:opacity-100"
      >
        {open ? '⟨⟨' : '⟩⟩'}
      </button>
    </div>
    <nav className="px-2 space-y-1">
      <NavLink to="/dashboard" className={linkClass}>User Panel</NavLink>
      {role === 'admin' && <NavLink to="/admin" className={linkClass}>Admin Panel</NavLink>}
    </nav>
    <div className="absolute bottom-3 left-0 right-0 px-3 flex items-center gap-2">
      <ThemeToggle />
      <Button className="bg-red-500" onClick={() => logout()}>Logout</Button>
    </div>
  </aside>
)
}