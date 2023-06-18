import React from "react"
import "./AnimatedLine.sass"

const getHeightByVariaty = variaty => {
  switch (variaty) {
    case "nav-bold":
      return 10
    case "nav-regular":
      return 2
    default:
      return "100%"
  }
}

const AnimatedLine = ({ type, position, variaty }) => {
  return (
    <div
      className={`line line-${type} ${position ? "line-" + position : ""}`}
      style={{ height: `${getHeightByVariaty(variaty)}px` }}
    ></div>
  )
}

export default AnimatedLine
