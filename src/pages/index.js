import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Header } from "../components/header/Header"
import { About } from "../components/about/About"
import { Experience } from "../components/experience/Experience"
import { Footer } from "../components/footer/Footer"

const AboutPage = ({ location }) => {
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
      <Header location={location} />
      <About />
      <Experience />
      <Footer />
    </div>
  )
}

export const Head = () => <Seo title="Page two" />

export default AboutPage
