import React from "react"
import "./SegmentContainer.sass"
import AnimatedLine from "../animated-line/AnimatedLine"
export const SegmentContainer = ({ children, noWrap = false }) => {
  return (
    <div
      className={
        !noWrap
          ? "segment-container"
          : "segment-container segment-container_nowrap"
      }
      style={{ position: "relative" }}
    >
      <AnimatedLine position="top" type="h" variaty={"nav-regular"} />
      <AnimatedLine position="right" type="v" />
      <AnimatedLine position="left" type="v" />
      {children}
      <AnimatedLine position="bottom" type="h" />
    </div>
  )
}
