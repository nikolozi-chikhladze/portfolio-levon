import React from "react"
import { Header } from "../../components/header/Header"
import { WorksList } from "../../components/works-list/WorksList"
import { WorksItemHeader } from "../../components/works-item-header/WorksItemHeader"
import { WORKS_DATA, WORKS_DATA_EXPANDED } from "../../data"
import { WorksItemBanner } from "../../components/works-item-banner/WorksItemBanner"
import { SegmentContainer } from "../../components/segment-container/SegmentContainer"
import { Description } from "../../components/description/Description"
import { WorksItemContent } from "../../components/works-item-content/WorksItemContent"

const WorksPage = ({ location }) => {
  const item = WORKS_DATA["planty-app"]
  const content = WORKS_DATA_EXPANDED["planty-app"]
  return (
    <div style={{ paddingRight: 32, backgroundColor: "#242424" }}>
      <Header location={location} />
      <WorksItemHeader title={item.title} />
      <WorksItemBanner tag={item.tag} />
      <WorksItemContent content={content} />
    </div>
  )
}

export default WorksPage
