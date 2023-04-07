import React, { useState } from "react"
import "./header.sass"

export const Header = () => {
  const [active, setActive] = useState("about")
  // TODO - implement scrolling
  return (
    <div className="header">
      <span className="header_text-title header_text ">Senior UX Designer</span>
      <ul className="header_nav">
        <li
          onClick={() => {
            setActive("about")
          }}
          className={`header_text header_nav_list-item ${
            active === "about" && "header_nav_list-item_active"
          }`}
        >
          About
        </li>
        <li
          onClick={() => {
            setActive("works")
          }}
          className={`header_text header_nav_list-item ${
            active === "works" && "header_nav_list-item_active"
          }`}
        >
          Works
        </li>
        <li
          onClick={() => {
            setActive("contact")
          }}
          className={`header_text header_nav_list-item ${
            active === "contact" && "header_nav_list-item_active"
          }`}
        >
          Contact
        </li>
      </ul>
    </div>
  )
}
