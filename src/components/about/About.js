import React from "react"
import "./About.sass"
import { StaticImage } from "gatsby-plugin-image"

export const About = () => {
  return (
    <div className="about">
      <span className="about_text-title">Levon Kostandian</span>
      <div className="about_main">
        <div className="about_row1">
          <StaticImage
            className="about_row1_img"
            src="../../images/Rectangle 9.svg"
            loading="eager"
            // width={64}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
          {/* <img src="../../images/Rectangle 9.svg" alt="" srcset="" /> */}
        </div>
        <div className="about_row2">
          <div>
            <div className="about_text-title">About</div>
            <div className="about_text_description">
              <p>
                Hello, my name is Levon, and I am thrilled to introduce myself
                as a highly skilled UX Designer with over 10 years of experience
                in the industry. Throughout my career, I have developed a deep
                commitment to creating and maintaining design process that
                elevate user experience and deliver visual consistency across a
                wide range of businesses.
              </p>
              <p>
                My expertise in UX design has been honed through my work with
                both digital agencies and large international technology
                companies. This diverse range of experiences has equipped me
                with the skills needed to tackle complex design challenges and
                deliver innovative solutions that meet the unique needs of each
                client.
              </p>
              <p>
                My approach to UX design is rooted in a deep understanding of
                user behavior, coupled with a passion for creating intuitive and
                engaging user experiences. Whether I am working on a website,
                mobile app, or other digital platform, I always strive to
                deliver a design that not only looks great but also meets the
                needs of the end-user.
              </p>
              <p>
                In addition to my extensive experience in UX design, I am also
                highly skilled in project management, team leadership, and
                stakeholder communication. I understand the importance of
                working collaboratively with clients and stakeholders to ensure
                that the final product meets their needs and exceeds their
                expectations.
              </p>
            </div>
          </div>
          <div className="about_row2_cv">
            <span>Download CV</span>
          </div>
        </div>
        <ul className="about_row3">
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Behance</li>
          <li>Dribbble</li>
        </ul>
      </div>
    </div>
  )
}
