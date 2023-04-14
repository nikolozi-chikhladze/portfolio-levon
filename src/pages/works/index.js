import React from "react"
import { Header } from "../../components/header/Header"
import { WorksList } from "../../components/works-list/WorksList"

const WorksPage = ({ location }) => {
  return (
    <>
      <Header location={location} />
      <WorksList />
    </>
  )
}

export default WorksPage
