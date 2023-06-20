import React from "react"
import "./WorksItemHeader.sass"
import { StaticImage } from "gatsby-plugin-image"
import { Title } from "../title/Title"
import { navigate } from "gatsby"
import AnimatedText from "../animated-text/AnimatedText"
import AnimatedLine from "../animated-line/AnimatedLine"

export const WorksItemHeader = ({ title, link }) => {
  const navigateBack = () => {
    navigate("/works")
  }
  return (
    <div className="works-item-header_container">
      <AnimatedLine type="h" position="bottom" variaty="nav-regular" />
      <div className="works-item-header_back" onClick={navigateBack}>
        <AnimatedLine type="v" position="right" />
        <AnimatedText>
          <StaticImage
            src="../../images/arrow-left.svg"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        </AnimatedText>
      </div>
      <div className="works-item-header_title">
        <Title>
          <AnimatedText>{title}</AnimatedText>
        </Title>
      </div>
      <div className="works-item-header_link">
        <AnimatedLine type="v" position="left" />
        <AnimatedLine type="v" position="right" />
        <span>
          <AnimatedText>See full case study</AnimatedText>
        </span>
      </div>
    </div>
  )
}
