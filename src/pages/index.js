import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main style={{ padding: "50px" }}>
      <h1>Hello</h1>
      <p>Welcome to the CampBrain Design System.</p>
      <div className="sharethis-inline-share-buttons"></div>
    </main>
  </Layout>
)

export default IndexPage
