import React from "react"
import "./WorksItemHeader.sass"
import { StaticImage } from "gatsby-plugin-image"
import { Title } from "../title/Title"
import { navigate } from "gatsby"

export const WorksItemHeader = ({ title, link }) => {
  const navigateBack = () => {
    navigate("/works")
  }
  return (
    <div className="works-item-header_container">
      <div className="works-item-header_back" onClick={navigateBack}>
        <StaticImage
          src="../../images/arrow-left.svg"
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      </div>
      <div className="works-item-header_title">
        <Title>{title}</Title>
      </div>
      <div className="works-item-header_link">
        <span>See full case study</span>
      </div>
    </div>
  )
}
