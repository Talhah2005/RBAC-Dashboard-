import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'

export function ProtectedRoute() {
  const { user, loading } = useAuthStore()
  if (loading) return <div className="p-6">Loading…</div>
  return user ? <Outlet /> : <Navigate to="/login" replace />
}
