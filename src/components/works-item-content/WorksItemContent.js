import React from "react"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { Description } from "../description/Description"
import "./WorksItemContent.sass"
import { StaticImage } from "gatsby-plugin-image"
import { DescriptionTitledList } from "../description-titled-list/DescriptionTitledList"

const getStaticImage = type => {
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
}

export const WorksItemContent = ({ content }) => {
  return (
    <SegmentContainer>
      {content.map(section => (
        <div className="segment_container">
          <div className="segment_row1" style={{ padding: 32 }}>
            {section.title}
          </div>
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
                  return getStaticImage(data.tag)
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
