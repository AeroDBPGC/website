import React from "react"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import config from "../../../config"

import blogPageStyle from "../../styles/blog/blog.module.scss"

import Header from "../header"
import Footer from "../footer"
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'

export const query = graphql`
    query( $slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            id
            frontmatter {
                title 
                date                
            }
            html
        }
    }
`

const BlogPost = (props) => {
    let disqusConfig = {
        url: `${config.siteURL + props.location.pathname}`,
        identifier: props.data.markdownRemark.id,
        title: props.data.markdownRemark.frontmatter.title
    }    
    return (
        <div className={blogPageStyle.wrapper}>
            <Header siteTitle="Blog" />
            <Container className={blogPageStyle.container}>
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                {/* <p>{props.data.markdownRemark.frontmatter.author}</p> */}
                <p>{props.data.markdownRemark.frontmatter.date}</p>
                <CommentCount config={disqusConfig} placeholder={'...'} />
                <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                <hr></hr>
                <Disqus config={disqusConfig} />
            </Container>
            <Footer />
        </div>
    )
}

export default BlogPost