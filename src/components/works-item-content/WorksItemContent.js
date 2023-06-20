import React from "react"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { Description } from "../description/Description"
import "./WorksItemContent.sass"
import { StaticImage } from "gatsby-plugin-image"
import { DescriptionTitledList } from "../description-titled-list/DescriptionTitledList"
import AnimatedLine from "../animated-line/AnimatedLine"
import AnimatedText from "../animated-text/AnimatedText"

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
    case "list-am":
      switch (type) {
        case "research":
          return (
            <StaticImage src="../../images/work-pages/list-am/research.png" />
          )
        case "define-users":
          return (
            <StaticImage src="../../images/work-pages/list-am/define-users.png" />
          )
        case "problems-value":
          return (
            <StaticImage src="../../images/work-pages/list-am/problems-value.png" />
          )
        case "customer-goals":
          return (
            <StaticImage src="../../images/work-pages/list-am/customer-goals.png" />
          )
        case "develop":
          return (
            <StaticImage src="../../images/work-pages/list-am/develop.png" />
          )
        case "wireframe":
          return (
            <StaticImage src="../../images/work-pages/list-am/wireframe.png" />
          )
        case "unit-tests":
          console.log("WTF FIX IT")
          return (
            <StaticImage src="../../images/work-pages/list-am/unit-tests.png" />
          )
        case "ui-system":
          return (
            <StaticImage src="../../images/work-pages/list-am/ui-system.png" />
          )
      }
    case "medical-app":
      switch (type) {
        case "banner":
          return (
            <StaticImage src="../../images/work-pages/medical-app/banner.png" />
          )
        case "analysis":
          console.log("test")
          return (
            <StaticImage src="../../images/work-pages/medical-app/analysis.png" />
          )
        case "user-journey":
          return (
            <StaticImage src="../../images/work-pages/medical-app/user-journey.png" />
          )

        default:
          break
      }
    case "keeps-me":
      switch (type) {
        case "achievements":
          return (
            <StaticImage src="../../images/work-pages/keeps-me/achievements.png" />
          )

        default:
          break
      }
    case "fin-fly":
      switch (type) {
        case "final-design":
          return (
            <StaticImage src="../../images/work-pages/fin-fly/final-design.png" />
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
          <AnimatedLine type="h" variaty="nav-regular" position="bottom" />
          <div className="segment_row1">
            <AnimatedLine type="v" position="right" />
            <AnimatedText>{section.title}</AnimatedText>
          </div>
          <div className="segment_row2">
            <AnimatedText>
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
            </AnimatedText>
          </div>
        </div>
      ))}
    </SegmentContainer>
  )
}
