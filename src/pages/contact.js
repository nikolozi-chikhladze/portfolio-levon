import React from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { Title } from "../components/title/Title"
import { Contact } from "../components/contact/Contact"
const ContactPage = ({ location }) => {
  return (
    <div style={{ backgroundColor: "#242424" }}>
      <Header location={location} />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
