import React from "react"
import { Header } from "../../components/header/Header"
import { WorksList } from "../../components/works-list/WorksList"
import { WorksItemHeader } from "../../components/works-item-header/WorksItemHeader"
import { WORKS_DATA, WORKS_DATA_EXPANDED } from "../../data"
import { WorksItemBanner } from "../../components/works-item-banner/WorksItemBanner"
import { SegmentContainer } from "../../components/segment-container/SegmentContainer"
import { Description } from "../../components/description/Description"
import { WorksItemContent } from "../../components/works-item-content/WorksItemContent"
import { Footer } from "../../components/footer/Footer"
import { WorkNavigation } from "../../components/work-navigation/WorkNavigation"

const JOB_KEY = "list-am"

const ListAmPage = ({ location }) => {
  const item = WORKS_DATA[JOB_KEY]
  const content = WORKS_DATA_EXPANDED[JOB_KEY]
  return (
    <div style={{ paddingRight: 32, backgroundColor: "#242424" }}>
      <Header location={location} />
      <WorksItemHeader title={item.title} />
      <WorksItemBanner tag={item.tag} />
      <WorksItemContent content={content} jobKey={JOB_KEY} />
      <WorkNavigation previous={"/roommate"} next={"/medical-app"} />
      <Footer />
    </div>
  )
}

export default ListAmPage
