import React from "react"
import "./About.sass"
import { StaticImage } from "gatsby-plugin-image"
import { SocialList } from "../social-list/SocialList"
import { Description } from "../description/Description"
import { ABOUT_DESCRIPTION_DATA } from "../../data"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"

export const About = () => {
  return (
    <div className="about">
      <Title>Levon Kostandian</Title>

      <SegmentContainer>
        <div className="about_row1">
          <StaticImage
            className="about_row1_img"
            src="../../images/Rectangle 9.svg"
            loading="eager"
            // width={64}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </div>
        <div className="about_row2">
          <div>
            <div className="about_text-title">About</div>
            <div className="about_text_description">
              {ABOUT_DESCRIPTION_DATA.map(text => (
                <Description>{text}</Description>
              ))}
            </div>
          </div>
          <div className="about_row2_cv">
            <span>Download CV</span>
          </div>
        </div>
        <SocialList />
      </SegmentContainer>
    </div>
  )
}
