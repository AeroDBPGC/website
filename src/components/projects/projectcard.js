
import React from "react"

import projectCardStyle from "../../styles/projects/projectcard.module.scss"

const ProjectCard = () => (
    <div className={projectCardStyle.card}>
        <div className={projectCardStyle.image}>
            <h1 className={projectCardStyle.title}>PROJECT NAME</h1>
            <p className={projectCardStyle.description}>This is a brief project description.</p>
        </div>
    </div>
)

export default ProjectCard
