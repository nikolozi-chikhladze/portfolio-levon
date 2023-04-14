import React, { useState } from "react"
import "./header.sass"
import { navigate } from "gatsby"
import { useEffect } from "react"

const getActiveByLocation = location => {
  switch (location) {
    case "/works/":
      return "works"
    case "/contact/":
      return "contact"
    default:
      return "about"
  }
}

export const Header = ({ location }) => {
  useEffect(() => {
    setActive(getActiveByLocation(location.pathname))
  }, [location])

  const [active, setActive] = useState(
    location.pathname === "/" ? "about" : getActiveByLocation(location.pathname)
  )

  // TODO - implement scrolling
  return (
    <div className="header">
      <span className="header_text-title header_text ">Senior UX Designer</span>
      <ul className="header_nav">
        <li
          onClick={() => {
            navigate("/")
          }}
          className={`header_text header_nav_list-item ${
            active === "about" && "header_nav_list-item_active"
          }`}
        >
          About
        </li>
        <li
          onClick={() => {
            navigate("/works")
          }}
          className={`header_text header_nav_list-item ${
            active === "works" && "header_nav_list-item_active"
          }`}
        >
          Works
        </li>
        <li
          onClick={() => {
            // setActive("contact")
            navigate("/contact")
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
