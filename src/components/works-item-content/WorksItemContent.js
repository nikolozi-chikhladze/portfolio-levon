import React from "react"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { Description } from "../description/Description"
import "./WorksItemContent.sass"
import { StaticImage } from "gatsby-plugin-image"
import { DescriptionTitledList } from "../description-titled-list/DescriptionTitledList"

const getStaticImage = (jobKey, type) => {
  switch (jobKey) {
    case "planty-app":
      switch (type) {
        case "wireframe":
          return (
            <StaticImage src="../../images/work-pages/planty-app/wireframe.png" />
          )
        case "testing":
          return (
            <StaticImage src="../../images/work-pages/planty-app/testing.png" />
          )
        case "final-ui":
          return (
            <StaticImage src="../../images/work-pages/planty-app/final-ui.png" />
          )

        default:
          break
      }
    case "roommate":
      switch (type) {
        case "research":
          return (
            <StaticImage src="../../images/work-pages/roommate/research.png" />
          )
        case "define-users":
          return (
            <StaticImage src="../../images/work-pages/roommate/define-users.png" />
          )
        case "ideate":
          return (
            <StaticImage src="../../images/work-pages/roommate/ideate.png" />
          )
        case "design":
          return (
            <StaticImage src="../../images/work-pages/roommate/design.png" />
          )

        default:
          break
      }
  }
}

export const WorksItemContent = ({ content, jobKey }) => {
  return (
    <SegmentContainer>
      {content.map(section => (
        <div className="segment_container">
          <div className="segment_row1">{section.title}</div>
          <div className="segment_row2">
            {section.data.map(data => {
              switch (data.type) {
                case "text":
                  return <Description>{data.value}</Description>
                case "titledSegment":
                  return (
                    <DescriptionTitledList
                      title={data.title}
                      items={data.items}
                    />
                  )
                case "image":
                  return getStaticImage(jobKey, data.tag)
                default:
                  break
              }
            })}
          </div>
        </div>
      ))}
    </SegmentContainer>
  )
}
