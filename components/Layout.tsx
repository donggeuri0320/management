import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const jst = {
  header: { 
    background: "#6666FF",
    height: "50px",
  },
  nav: {
    float: "left",
    width: "200px",
    height: "800px",
    color: "white",
    background: "#9966CC"
  },
  selection: {
      width:"200px",
      textAlign: "left",
      float: "left",
      padding: "10px",
      background: "green"
  },
  footer: {
    background: "#CCFF66",
    height: "100px",
    clear: "both"
  }
}


const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <header style={jst.header}> 
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </header>
    <nav style={jst.nav}>
        <Link href="/">
          <a>Home</a>
        </Link><br/>
        <Link href="/about">
          <a>About</a>
        </Link><br/>
        <Link href="/users">
          <a>Users List</a>
        </Link><br/>
        <a href="/api/users">Users API</a>
    </nav>
    <selection style={jst.selection}>
    {children}
    </selection>
    <footer style={jst.footer}>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
