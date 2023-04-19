import React from "react"
import "./Contact.sass"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { SocialList } from "../social-list/SocialList"

export const Contact = () => {
  return (
    <div className="contact">
      <Title>Levon Kostandian</Title>
      <SegmentContainer>
        <div style={{ display: "flex", flex: 1 }}></div>
        <div style={{ borderLeft: "1px solid #fff" }}>
          <div className="contact_container">
            <div className="contact_text_container">
              <p className="contact_text_title">Contact</p>
              <p className="contact_text_description">
                I am always excited to meet new people, whether for work or
                personal reasons. If you have any questions, comments, or would
                want to discuss future opportunities, please contact me through
                the following channels:
              </p>
              <p className="contact_text_email">levon.kostandyan@gmail.com</p>
              <p className="contact_text_number">+374 91 017868</p>
            </div>
            <div className="contact_socials">
              <SocialList />
            </div>
          </div>
        </div>
      </SegmentContainer>
    </div>
  )
}
