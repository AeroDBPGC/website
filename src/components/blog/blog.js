import React from "react"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"

import blogPageStyle from "../../styles/blog/blog.module.scss"

import Header from "../header"
import Footer from "../footer"

export const query = graphql`
    query( $slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title 
                date                
            }
            html
        }
    }
`

const BlogPost = (props) => {
    return (                
        <div className={ blogPageStyle.wrapper }>                
            <Header siteTitle="Blog"/>
                <Container className={ blogPageStyle.container }>       
                    <h1>{ props.data.markdownRemark.frontmatter.title }</h1>
                    <p>{ props.data.markdownRemark.frontmatter.date }</p>
                    <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                </Container>
            <Footer />
        </div>
    )
}

export default BlogPost