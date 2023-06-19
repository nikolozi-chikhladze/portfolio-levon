import React from "react"
import "./Contact.sass"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { SocialList } from "../social-list/SocialList"
import AnimatedText from "../animated-text/AnimatedText"
import AnimatedLine from "../animated-line/AnimatedLine"
export const Contact = () => {
  return (
    <div className="contact">
      <AnimatedText>
        <Title>Levon Kostandian</Title>
        {/* <AnimatedLine position="bottom" type="h" /> */}
      </AnimatedText>
      <SegmentContainer>
        <div style={{ display: "flex", flex: 1, position: "relative" }}>
          <AnimatedLine position="right" type="v" />
        </div>
        <div className="contact_container">
          <AnimatedLine position="bottom" type="h" />
          <div style={{ display: "flex", position: "relative" }}>
            <div
              className="contact_text_container"
              style={{ position: "relative" }}
            >
              <p className="contact_text_title">
                <AnimatedText>Contact</AnimatedText>
              </p>
              <p className="contact_text_description">
                <AnimatedText>
                  I am always excited to meet new people, whether for work or
                  personal reasons. If you have any questions, comments, or
                  would want to discuss future opportunities, please contact me
                  through the following channels:
                </AnimatedText>
              </p>
              <p className="contact_text_email">
                <AnimatedText>levon.kostandyan@gmail.com</AnimatedText>
              </p>
            </div>
            <div className="contact_socials">
              <AnimatedLine position="left" type="v" />
              <SocialList />
            </div>
          </div>
        </div>
      </SegmentContainer>
    </div>
  )
}
