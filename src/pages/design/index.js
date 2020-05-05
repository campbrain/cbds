import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Nav from "../../components/nav"

const Design = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulCategory(
          sort: { fields: [order], order: ASC }
          filter: { section: { slug: { eq: "design" } } }
        ) {
          nodes {
            id
            title
            slug
            order
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Design"></SEO>
      <Nav categories={data.allContentfulCategory.nodes} />
      <main>
        <div className="wrapper">
          <h1>Design TEST</h1>
        </div>
      </main>
    </Layout>
  )
}

export default Design
