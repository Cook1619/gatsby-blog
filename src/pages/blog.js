import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <Layout>
        <h1>My Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(post => {
            return (
              <li>
                <Link to={`/blog/${post.node.fields.slug}`}><h2>{post.node.frontmatter.title}</h2></Link>
                <p>{post.node.frontmatter.date}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
export default BlogPage
