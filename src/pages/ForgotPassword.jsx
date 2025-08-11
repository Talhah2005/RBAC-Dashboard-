import { useState } from 'react'
import { resetPassword } from '../lib/firebase'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [err, setErr] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setErr(''); setMsg('')
    try {
      await resetPassword(email)
      setMsg('Password reset email sent.')
    } catch {
      setErr('Unable to send reset email.')
    }
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <Input type="email" placeholder="Your email" value={email} onChange={e=>setEmail(e.target.value)} required />
          {err && <p className="text-sm text-red-600">{err}</p>}
          {msg && <p className="text-sm text-green-700">{msg}</p>}
          <Button type="submit" className="w-full">Send reset link</Button>
        </form>
        <div className="text-sm"><Link to="/login">Back to login</Link></div>
      </div>
    </div>
  )
}
