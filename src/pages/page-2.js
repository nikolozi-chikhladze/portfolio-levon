import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Header } from "../components/header/Header"
import { About } from "../components/about/About"

const SecondPage = () => (
  // <Layout>
  //   <h1>Hi from the second page</h1>
  //   <p>Welcome to page 2</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>
  <>
    <Header />
    <About />
  </>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
