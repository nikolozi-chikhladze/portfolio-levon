import React from "react"
import "./About.sass"
import { StaticImage } from "gatsby-plugin-image"
import { SocialList } from "../social-list/SocialList"
import { Description } from "../description/Description"
import { ABOUT_DESCRIPTION_DATA } from "../../data"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import AnimatedLine from "../animated-line/AnimatedLine"
import AnimatedText from "../animated-text/AnimatedText"

export const About = () => {
  return (
    <div className="about">
      <Title>
        <AnimatedText>Levon Kostandian</AnimatedText>
      </Title>

      <SegmentContainer noWrap>
        <div className="about_row1">
          <AnimatedText>
            <StaticImage
              className="about_row1_img"
              src="../../images/Rectangle.svg"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </AnimatedText>
        </div>
        <div className="about_row2">
          <AnimatedLine position="left" type="v" />
          <AnimatedLine position="right" type="v" />
          <div>
            <Title>
              <AnimatedText>About</AnimatedText>
            </Title>
            <div className="about_text_description">
              {ABOUT_DESCRIPTION_DATA.map(text => (
                <Description>
                  <AnimatedText>{text}</AnimatedText>
                </Description>
              ))}
            </div>
          </div>
          <div className="about_row2_cv">
            <AnimatedLine position="top" type="h" variaty="nav-regular" />
            <AnimatedText>
              <span>Download CV</span>
            </AnimatedText>
          </div>
        </div>
        <SocialList />
      </SegmentContainer>
    </div>
  )
}
