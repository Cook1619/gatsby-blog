import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
    console.log(data)
  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <ol>
        {data.allMarkdownRemark.edges.map(post => 
          <li><h2>{post.node.frontmatter.title}</h2><p>{post.node.frontmatter.date}</p></li>
        )}
        </ol>
      </Layout>
    </div>
  )
}
export default BlogPage
