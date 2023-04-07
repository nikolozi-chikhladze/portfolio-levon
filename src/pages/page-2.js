import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Header } from "../components/header/Header"
import { About } from "../components/about/About"
import { Experience } from "../components/experience/Experience"

const SecondPage = () => {
  const pageStart = useRef(null)

  useEffect(() => {
    pageStart.current.scrollIntoView()
  }, [])

  return (
    // <Layout>
    //   <h1>Hi from the second page</h1>
    //   <p>Welcome to page 2</p>
    //   <Link to="/">Go back to the homepage</Link>
    // </Layout>
    <div
      style={{
        backgroundColor: "#242424",
      }}
      ref={pageStart}
    >
      <Header />
      <About />
      <Experience />
    </div>
  )
}

export const Head = () => <Seo title="Page two" />

export default SecondPage
