import Layout from '../components/Layout'
import Card from '../components/ui/Card'
import { useAuthStore } from '../store/authStore'

export default function Dashboard() {
  const { role, user } = useAuthStore()
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">User Panel</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card><div className="space-y-1"><p className="text-sm opacity-70">Welcome</p><p className="text-lg font-medium">{user?.email}</p></div></Card>
        <Card><p>Role: <span className="font-semibold">{role}</span></p></Card>
        <Card><p>Your content goes here.</p></Card>
      </div>
    </Layout>
  )
}
