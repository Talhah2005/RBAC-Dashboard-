import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export function AdminRoute() {
  const { role, loading } = useAuthStore()
  if (loading) return <div className="p-6">Loading…</div>
  return role === 'admin' ? <Outlet /> : <Navigate to="/dashboard" replace />
}
