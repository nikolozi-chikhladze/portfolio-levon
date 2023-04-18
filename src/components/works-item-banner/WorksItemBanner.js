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
    case "roommate":
      return (
        <StaticImage
          src={"../../images/work-pages/roommate/banner.png"}
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "list-am":
      return (
        <StaticImage
          src={"../../images/work-pages/list-am/banner.png"}
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "medical-app":
      return (
        <StaticImage
          src={"../../images/work-pages/medical-app/banner.png"}
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "keeps-me":
      return (
        <StaticImage
          src={"../../images/work-pages/keeps-me/banner.png"}
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "fin-fly":
      console.log("WTF FIX IT")
      return (
        <StaticImage
          src={"../../images/work-pages/fin-fly/banner.png"}
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "novartis":
      console.log("WTF FIX IT")
      return (
        <StaticImage
          src={"../../images/work-pages/novartis/banner.png"}
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "hca-healthcare":
      console.log("WTF FIX IT 99???")
      return (
        <StaticImage
          src={"../../images/work-pages/hca-healthcare/banner.png"}
          loading="eager"
          quality={99}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "spvrkd":
      console.log("WTF FIX IT 99???")
      return (
        <StaticImage
          src={"../../images/work-pages/spvrkd/banner.png"}
          loading="eager"
          quality={99}
          formats={["auto", "webp", "avif"]}
        />
      )
    case "inecobank":
      console.log("WTF FIX IT 99???")
      return (
        <StaticImage
          src={"../../images/work-pages/inecobank/banner.png"}
          loading="eager"
          quality={99}
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
