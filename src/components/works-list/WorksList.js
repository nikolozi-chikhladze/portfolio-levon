import React, { useState } from "react"
import "./WorksList.sass"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { StaticImage } from "gatsby-plugin-image"
import { WORKS_DATA_VALUES } from "../../data"
import { Footer } from "../footer/Footer"
import { navigate } from "gatsby"

export const WorksList = () => {
  const [selectedElement, setSelectedElement] = useState(null)
  const onElementHover = tag => () => {
    console.log("hover")
    setSelectedElement(tag)
  }

  const onElementsLeave = () => {
    setSelectedElement(null)
  }
  const getStaticImage = () => {
    switch (selectedElement) {
      case "planty-app":
        return (
          <StaticImage
            src="../../images/works/planty-app.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "roommate":
        return (
          <StaticImage
            src="../../images/works/roommate.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "list-am":
        return (
          <StaticImage
            src="../../images/works/list-am.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "medical-app":
        return (
          <StaticImage
            src="../../images/works/medical-app.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "keeps-me":
        return (
          <StaticImage
            src="../../images/works/keeps-me.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "fin-fly":
        return (
          <StaticImage
            src="../../images/works/fin-fly.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )

      case "novartis":
        return (
          <StaticImage
            src="../../images/works/novartis.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "hca-healthcare":
        return (
          <StaticImage
            src="../../images/works/hca-healthcare.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "spaarkd":
        return (
          <StaticImage
            src="../../images/works/spaarkd.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      case "inecobank":
        return (
          <StaticImage
            src="../../images/works/inecobank.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
          />
        )
      default:
        return <div style={{ height: "734px", width: "712px" }}></div>
    }
  }

  const getListItems = () =>
    WORKS_DATA_VALUES.map(data => (
      <li
        onMouseEnter={onElementHover(data.tag)}
        className="works-list_list-item"
        onClick={navigateToItem(data.link)}
      >
        <span>{data.title}</span>
        <StaticImage
          src="../../images/arrow-right.svg"
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
      </li>
    ))
  const navigateToItem = link => () => {
    navigate(`/works${link}`)
  }
  return (
    <div className="works-list_container">
      <Title>Levon Kostandian</Title>
      <SegmentContainer>
        <div className="works-list_row1">{getStaticImage()}</div>
        <div className="works-list_row2">
          <ul onMouseLeave={onElementsLeave} className="works-list_list">
            {getListItems()}
          </ul>
        </div>
      </SegmentContainer>
      <Footer />
    </div>
  )
}
