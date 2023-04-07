import React from "react"
import "./DescriptionList.sass"

export const DescriptionList = ({ title, items }) => {
  return (
    <div className="description-list">
      <span>{title}</span>
      <ul className="description-list_container">
        {items.map(item => (
          <li className="description-list_item">{item}</li>
        ))}
      </ul>
    </div>
  )
}
