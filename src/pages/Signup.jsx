import { useState } from 'react'
import { signUpEmail } from '../lib/firebase'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setErr(''); setMsg('')
    try {
      await signUpEmail(email, password)
      setMsg('Verification email sent. Please check your inbox, verify, then log in.')
    } catch (e2) {
      setErr(e2?.message || 'Sign up failed.')
    }
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold">Create account</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <Input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <Input type="password" placeholder="Password (min 6 chars)" value={password} onChange={e=>setPassword(e.target.value)} required />
          {err && <p className="text-sm text-red-600">{err}</p>}
          {msg && <p className="text-sm text-green-700">{msg}</p>}
          <Button type="submit" className="w-full">Sign up</Button>
        </form>
        <div className="text-sm"><Link to="/login">Back to login</Link></div>
      </div>
    </div>
  )
}
