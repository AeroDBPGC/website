const path = require("path")

module.exports.onCreateNode = ({node, actions}) => {
    const createNodeField = actions.createNodeField
    // Using destructuring : const {createNodeField} = actions

    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // Creating a slug value for converting filename to a dynamic variable for access

        createNodeField({
            node, 
            name: 'slug', 
            value: slug
        })
    }   
}

module.exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/components/blog/blog.js')
    const res = await graphql(`
    query{
        allMarkdownRemark {
          edges {
            node {              
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    
    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}