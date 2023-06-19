import React from "react"
import "./Experience.sass"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { EXPERIENCE_DATA } from "../../data"
import { Description } from "../description/Description"
import { DescriptionList } from "../description-list/DescriptionList"
import AnimatedText from "../animated-text/AnimatedText"
import AnimatedLine from "../animated-line/AnimatedLine"

export const Experience = () => {
  const getDescription = data =>
    data.text.description.map(description => (
      <Description>{description}</Description>
    ))
  return (
    <div className="experience">
      <Title>
        <AnimatedText>Experience</AnimatedText>
      </Title>
      <SegmentContainer>
        {EXPERIENCE_DATA.map(data => (
          <div className="experience_container">
            <AnimatedText>
              <div className="details-container">
                <span className="details-container_company">
                  {data.company}
                </span>
                <span className="details-container_position">
                  {data.position}
                </span>
                <span className="details-container_date">{data.date}</span>
              </div>
            </AnimatedText>
            <div className="text-container">
              <AnimatedText>
                {getDescription(data)}
                <DescriptionList
                  title={data.text.list.title}
                  items={data.text.list.items}
                />
              </AnimatedText>
              <AnimatedLine type="v" position="left" />
            </div>
            <AnimatedLine type="h" position="bottom" />
          </div>
        ))}
      </SegmentContainer>
    </div>
  )
}
