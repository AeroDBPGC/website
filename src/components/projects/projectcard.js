import React from "react"

// Styles for Project Card component.
import projectCardStyle from "../../styles/projects/projectcard.module.scss"

// Project Card component.
const ProjectCard = ({ title, description }) => (
  <div className={projectCardStyle.card}>
    <div className={projectCardStyle.textWrapper}>
      <h1 className={projectCardStyle.title}>{ title }</h1>
      <p className={projectCardStyle.description}>{ description }</p>
    </div>
  </div>
)

export default ProjectCard
