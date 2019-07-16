import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import Nav from "../../components/nav"
import SEO from "../../components/seo"

const Patterns = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategory(sort: { fields: [order], order: ASC }) {
        nodes {
          id
          title
          slug
          order
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Patterns"></SEO>
      <Nav categories={data.allContentfulCategory.nodes} />
      <main>
        <h1>Patterns</h1>
      </main>
    </Layout>
  )
}

export default Patterns
