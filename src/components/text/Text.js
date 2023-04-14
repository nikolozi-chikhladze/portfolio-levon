import React from "react"
import "./Text.sass"

const getStyles = (type, weight) => {
  const styles = {
    fontWeight: weight,
  }
  switch (type) {
    case "h1":
      styles.fontSize = "40px"
      return styles

    default:
      break
  }
}

export const Text = ({ type = "p", weight = 400, textStyle = {} }) => {
  return (
    <span className="text" style={[getStyles(type, weight), textStyle]}>
      Text
    </span>
  )
}
