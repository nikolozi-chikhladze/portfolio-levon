import React from "react"
import { Header } from "../../components/header/Header"
import { WorksList } from "../../components/works-list/WorksList"
import Seo from "../../components/seo"

const WorksPage = ({ location }) => {
  return (
    <>
      <Header location={location} />
      <WorksList />
    </>
  )
}

export const Head = () => <Seo title="Works" />

export default WorksPage
