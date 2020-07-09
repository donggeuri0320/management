import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import { User } from '../interfaces'
import List from '../components/List'

type Props = {
  items: User[]
}

const Index = ({ items }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js ?</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <List items={items} />
    </p>
  </Layout>
)

export const getServerSideProps : GetServerSideProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const res = await fetch('http://localhost:3000/api/users')
  const json = await res.json()
  const items: User[] = json
  return { props: { items } }
}

export default Index
