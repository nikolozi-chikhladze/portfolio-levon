import React from "react"
import "./WorksList.sass"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { StaticImage } from "gatsby-plugin-image"
import { WORKS_DATA } from "../../data"
import { Footer } from "../footer/Footer"

export const WorksList = () => {
  const getListItems = () =>
    WORKS_DATA.map((data, idx) => (
      <li
        className={
          idx === 0
            ? "works-list_list-item works-list_list-item_active"
            : "works-list_list-item"
        }
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
    console.log(link)
  }
  return (
    <div className="works-list_container">
      <Title>Levon Kostandian</Title>
      <SegmentContainer>
        <div className="works-list_row1">
          <StaticImage
            className="about_row1_img"
            src="../../images/planty-app-img.png"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="imag ehere"
          />
        </div>
        <div className="works-list_row2">
          <ul className="works-list_list">{getListItems()}</ul>
        </div>
      </SegmentContainer>
      <Footer />
    </div>
  )
}
