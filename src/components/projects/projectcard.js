import React from "react"
import BackgroundImage from "gatsby-background-image"
// Styles for Project Card component.
import projectCardStyle from "../../styles/projects/projectcard.module.scss"

// Project Card component.
const ProjectCard = ({ title, description, repoLink, img }) => (
    <a href={repoLink} style={{ textDecoration: "none", cursor: "pointer" }}>
      <BackgroundImage fluid={img} className={projectCardStyle.card}>
        <div className={projectCardStyle.textWrapper}>
          <h1 className={projectCardStyle.title}>{title}</h1>
          <p className={projectCardStyle.description}>{description}</p>
        </div>
      </BackgroundImage>
    </a>
)

export default ProjectCard
