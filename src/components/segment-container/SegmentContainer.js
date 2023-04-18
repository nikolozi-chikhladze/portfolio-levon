import React from "react"
import "./SegmentContainer.sass"
export const SegmentContainer = ({ children, noWrap = false }) => {
  return (
    <div
      className={
        !noWrap
          ? "segment-container"
          : "segment-container segment-container_nowrap"
      }
    >
      {children}
    </div>
  )
}
