import React from "react"
import "./SocialList.sass"
import AnimatedText from "../animated-text/AnimatedText"

export const SocialList = () => {
  return (
    <ul className="social-list">
      <li>
        <AnimatedText>Linkedin</AnimatedText>
      </li>
      <li>
        <AnimatedText>Instagram</AnimatedText>
      </li>
      <li>
        <AnimatedText>Behance</AnimatedText>
      </li>
      <li>
        <AnimatedText>Dribbble</AnimatedText>
      </li>
    </ul>
  )
}
