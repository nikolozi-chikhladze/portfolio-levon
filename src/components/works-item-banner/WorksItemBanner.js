import React from "react"
import "./WorksItemBanner.sass"
import { StaticImage } from "gatsby-plugin-image"

const getBannerByTag = tag => {
  switch (tag) {
    case "planty-app":
      return (
        <StaticImage
          src={"../../images/work-pages/planty-app/banner.png"}
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      )

    default:
      break
  }
}

export const WorksItemBanner = ({ tag }) => {
  return (
    <div className="works-item-banner_container">{getBannerByTag(tag)}</div>
  )
}
