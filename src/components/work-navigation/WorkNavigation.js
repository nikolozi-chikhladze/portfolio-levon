import React from "react"
import "./WorkNavigation.sass"
import { navigate } from "gatsby"
import AnimatedLine from "../animated-line/AnimatedLine"
import AnimatedText from "../animated-text/AnimatedText"
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
      <AnimatedLine type="h" position="bottom" variaty="nav-regular" />
      <div
        onClick={onPress("previous")}
        className={
          previous
            ? "work-navigation_button"
            : "work-navigation_button work-navigation_button_disabled"
        }
      >
        <AnimatedText>Previous Work</AnimatedText>
        <AnimatedLine type="v" position="right" />
      </div>
      <div
        onClick={onPress("next")}
        className={
          next
            ? "work-navigation_button"
            : "work-navigation_button work-navigation_button_disabled"
        }
      >
        <AnimatedText>Next Work</AnimatedText>
        <AnimatedLine type="v" position="left" />
        <AnimatedLine type="v" position="right" />
      </div>
    </div>
  )
}
