import React from "react"
import BackgroundImage from "gatsby-background-image"
import teamPictureStyle from "../../styles/about/teampicture.module.scss"

const TeamPicture = ({ img }) => (
    <BackgroundImage
      fluid={img}
      className={teamPictureStyle.teamPicture}
    ></BackgroundImage>
)

export default TeamPicture
