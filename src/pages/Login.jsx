import { useState } from 'react'
import { signInEmail, auth } from '../lib/firebase'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    setError('')
    try {
      const cred = await signInEmail(email, password)
      if (!cred.user.emailVerified) {
        setError('Please verify your email before logging in.')
        await auth.signOut()
        return
      }
      navigate('/dashboard')
    } catch (err) {
      setError('Invalid credentials.')
    }
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold">Log in</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <Input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full">Sign in</Button>
        </form>
        <div className="text-sm flex justify-between">
          <Link to="/forgot">Forgot password?</Link>
          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </div>
  )
}
