import Layout from '../components/Layout'
import Card from '../components/ui/Card'

export default function Admin() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card><p>Admin widget A</p></Card>
        <Card><p>Admin widget B</p></Card>
        <Card><p>Admin widget C</p></Card>
      </div>
    </Layout>
  )
}
