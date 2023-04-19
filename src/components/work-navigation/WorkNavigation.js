import React from "react"
import "./WorkNavigation.sass"
import { navigate } from "gatsby"
export const WorkNavigation = ({ previous, next }) => {
  const onPress = direction => () => {
    console.log(direction, next)
    switch (direction) {
      case "previous":
        return previous && navigate(`/works${previous}`)
      case "next":
        return next && navigate(`/works${next}`)
    }
  }
  return (
    <div className="work-navigation_container">
      <div
        onClick={onPress("previous")}
        className={
          previous
            ? "work-navigation_button"
            : "work-navigation_button work-navigation_button_disabled"
        }
      >
        Previous Work
      </div>
      <div
        onClick={onPress("next")}
        className={
          next
            ? "work-navigation_button"
            : "work-navigation_button work-navigation_button_disabled"
        }
      >
        Next Work
      </div>
    </div>
  )
}
