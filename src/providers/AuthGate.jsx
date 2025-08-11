import { useEffect } from 'react'
import { onAuth } from '../lib/firebase'
import { useAuthStore } from '../store/authStore'
import { getUserRole } from '../lib/firebase'

export default function AuthGate({ children }) {
  const { setUser, setRole, setLoading } = useAuthStore()

  useEffect(() => {
    const unsub = onAuth(async (u) => {
      if (!u) {
        setUser(null); setRole(null); setLoading(false); return
      }
      if (!u.emailVerified) {
        setUser(null); setRole(null); setLoading(false); return
      }
      const role = await getUserRole(u.uid)
      setUser(u); setRole(role); setLoading(false)
    })
    return () => unsub()
  }, [])

  return children
}
