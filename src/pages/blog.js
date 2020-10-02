import React from "react"
import { Container } from "react-bootstrap"
import { Link, useStaticQuery, graphql } from "gatsby"

import blogPageStyle from "../styles/blog/blog.module.scss"
import blogCardStyle from "../styles/blog/blogcard.module.scss"

import Header from "../components/header"
import Footer from "../components/footer"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                author
                date
              }     
              fields {
                slug
              }         
            }
          }
        }
      }`
    )    

    return (
        <div className={ blogPageStyle.wrapper }>
        <Header siteTitle="Blog"/>
        <Container className={ blogPageStyle.container }>
            <ul className="list-unstyled">                              
                {data.allMarkdownRemark.edges.map(edge => (                                      
                      <Link to={ `/blog/${edge.node.fields.slug}` } style={{ textDecoration: "none", color: "#FFF" }}>
                        <li className={ blogCardStyle.blogCard }>
                          <div className={ blogCardStyle.blogTextWrapper }>
                            <h2 className={ blogCardStyle.blogTitle }>{ edge.node.frontmatter.title }</h2>
                            {/* <p className={blogCardStyle.blogAuthor}><i>Written By:</i> <strong>{ edge.node.frontmatter.author }</strong></p> */}
                            <p className={ blogCardStyle.blogDate }><i>Date Posted:</i> <strong>{ edge.node.frontmatter.date }</strong></p>
                          </div>
                        </li>
                      </Link>                
                  ))}
            </ul>
        </Container>
        <Footer />
        </div>
    )
}

export default BlogPage