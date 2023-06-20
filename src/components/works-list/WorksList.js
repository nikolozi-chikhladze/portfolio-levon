import React, { useEffect, useLayoutEffect, useState } from "react"
import "./WorksList.sass"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { StaticImage } from "gatsby-plugin-image"
import { WORKS_DATA_VALUES } from "../../data"
import { Footer } from "../footer/Footer"
import { navigate } from "gatsby"
import AnimatedLine from "../animated-line/AnimatedLine"
import AnimatedText from "../animated-text/AnimatedText"

export const WorksList = () => {
  const [selectedElement, setSelectedElement] = useState(null)
  const [timeoutPassed, setTimeoutPassed] = useState(false)

  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutPassed(true)
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

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
            className="works-list_image"
          />
        )
      case "roommate":
        return (
          <StaticImage
            src="../../images/works/roommate.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      case "list-am":
        return (
          <StaticImage
            src="../../images/works/list-am.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      case "medical-app":
        return (
          <StaticImage
            src="../../images/works/medical-app.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      case "keeps-me":
        return (
          <StaticImage
            src="../../images/works/keeps-me.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      case "fin-fly":
        return (
          <StaticImage
            src="../../images/works/fin-fly.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )

      case "novartis":
        return (
          <StaticImage
            src="../../images/works/novartis.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      case "hca-healthcare":
        return (
          <StaticImage
            src="../../images/works/hca-healthcare.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      case "spvrkd":
        return (
          <StaticImage
            src="../../images/works/spvrkd.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      case "inecobank":
        return (
          <StaticImage
            src="../../images/works/inecobank.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            className="works-list_image"
          />
        )
      default:
        return <div style={{ height: "734px", width: "712px" }}></div>
    }
  }

  const getListItems = () =>
    WORKS_DATA_VALUES.map(data => (
      <li
        onMouseEnter={timeoutPassed ? onElementHover(data.tag) : null}
        className={
          timeoutPassed
            ? "works-list_list-item works-list_list-item-hover"
            : "works-list_list-item"
        }
        onClick={navigateToItem(data.link)}
      >
        <AnimatedText>
          <span>{data.title}</span>
        </AnimatedText>
        <StaticImage
          src="../../images/arrow-right.svg"
          loading="eager"
          quality={100}
          formats={["auto", "webp", "avif"]}
        />
        <AnimatedLine position="bottom" type="h" />
      </li>
    ))
  const navigateToItem = link => () => {
    navigate(`/works${link}`)
  }
  return (
    <div className="works-list_container">
      <Title>
        <AnimatedText>Levon Kostandian</AnimatedText>
      </Title>
      <SegmentContainer>
        <div className="works-list_row1">{getStaticImage()}</div>
        <div className="works-list_row2">
          <AnimatedLine position="left" type="v" />
          <ul onMouseLeave={onElementsLeave} className="works-list_list">
            {getListItems()}
          </ul>
        </div>
      </SegmentContainer>
      <Footer />
    </div>
  )
}
