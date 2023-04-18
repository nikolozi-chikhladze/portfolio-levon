import { Description } from "../description/Description"
import "./DescriptionTitledList.sass"
import React from "react"

const getDescriptionList = items =>
  items.map(item => <Description>{item}</Description>)

export const DescriptionTitledList = ({ title, items }) => {
  return (
    <div className="description-titled-list_container">
      <p className="description-titled-list_title">{title}</p>
      <span className="description-titled-list_linebreak">---------</span>
      {getDescriptionList(items)}
    </div>
  )
}
