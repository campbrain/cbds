import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../../components/layout"
import PatternNav from "../../components/pattern-nav"
import SEO from "../../components/seo"

const options = {
  renderNode: {
    "embedded-asset-block": node => {
      const alt = node.data.target.fields.title["en-US"]
      const url = node.data.target.fields.file["en-US"].url
      return (
        <img
          style={{ maxWidth: "100%", display: "block" }}
          alt={alt}
          src={url}
        />
      )
    },
  },
}

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const Process = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPost(sort: { fields: [order], order: ASC }) {
          nodes {
            title
            slug
            id
            body {
              json
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Process"></SEO>
      <PatternNav posts={data.allContentfulPost.nodes} />
      <main>
        <div className="wrapper">
          {data.allContentfulPost.nodes.map((post, i) => (
            <div key={post.id} id={post.slug}>
              <h1 style={{ marginBottom: "20px" }}>{post.title}</h1>
              {post.body && documentToReactComponents(post.body.json, options)}
              {i < data.allContentfulPost.nodes.length - 1 && (
                <hr style={{ margin: "50px 0" }} />
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Process
