import React from "react"
import "./Experience.sass"
import { Title } from "../title/Title"
import { SegmentContainer } from "../segment-container/SegmentContainer"
import { EXPERIENCE_DATA } from "../../data"
import { Description } from "../description/Description"
import { DescriptionList } from "../description-list/DescriptionList"

export const Experience = () => {
  const getDescription = data =>
    data.text.description.map(description => (
      <Description>{description}</Description>
    ))
  return (
    <div className="experience">
      <Title>Experience</Title>
      <SegmentContainer>
        {EXPERIENCE_DATA.map(data => (
          <div className="experience_container">
            <div className="details-container">
              <span className="details-container_company">{data.company}</span>
              <span className="details-container_position">
                {data.position}
              </span>
              <span className="details-container_date">{data.date}</span>
            </div>
            <div className="text-container">
              {getDescription(data)}
              <DescriptionList
                title={data.text.list.title}
                items={data.text.list.items}
              />
            </div>
          </div>
        ))}
      </SegmentContainer>
    </div>
  )
}
