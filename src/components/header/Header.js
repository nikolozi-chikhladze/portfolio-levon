import React, { useState } from "react"
import "./Header.sass"
import { navigate } from "gatsby"
import { useEffect } from "react"
import AnimatedLine from "../animated-line/AnimatedLine"
import AnimatedText from "../animated-text/AnimatedText"

const getActiveByLocation = location => {
  if (location.includes("works")) {
    return "works"
  } else if (location.includes("contact")) {
    return "contact"
  } else {
    return "about"
  }
}

export const Header = ({ location }) => {
  useEffect(() => {
    setActive(getActiveByLocation(location.pathname))
  }, [location])

  useEffect(() => {
    console.log({ location })
  }, [])

  const [active, setActive] = useState(
    location.pathname === "/" ? "about" : getActiveByLocation(location.pathname)
  )

  // TODO - implement scrolling
  return (
    <div style={{ position: "relative" }}>
      <div className="header">
        <AnimatedLine type="h" position="top" variaty="nav-bold" />
        <span className="header_text-title header_text text">
          Senior UX Designer
        </span>
        <ul className="header_nav">
          <li
            onClick={() => navigate("/")}
            className={`header_text header_nav_list-item ${
              active === "about" && "header_nav_list-item_active"
            }`}
          >
            <AnimatedLine type="v" position="left" />
            <AnimatedText>About</AnimatedText>
            {active === "about" && <div className="navState"></div>}
          </li>
          <li
            onClick={() => navigate("/works")}
            className={`header_text header_nav_list-item ${
              active === "works" && "header_nav_list-item_active"
            }`}
          >
            <AnimatedLine type="v" position="left" />
            <AnimatedText>Works</AnimatedText>
            {active === "works" && <div className="navState"></div>}
          </li>
          <li
            onClick={() => navigate("/contact")}
            className={`header_text header_nav_list-item ${
              active === "contact" && "header_nav_list-item_active"
            }`}
          >
            <AnimatedLine type="v" position="left" />
            <AnimatedText>Contact</AnimatedText>
            {active === "contact" && <div className="navState"></div>}
          </li>
        </ul>
        <AnimatedLine type="h" position="bottom" variaty="nav-regular" />
      </div>
    </div>
  )
}
