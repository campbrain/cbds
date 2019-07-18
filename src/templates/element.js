import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import Variation from "../components/variation"
import elementStyles from "./element.module.scss"

export const query = graphql`
  query($slug: String!, $section: String!) {
    element: contentfulElement(slug: { eq: $slug }) {
      title
      description {
        json
      }
    }
    variations: allContentfulVariation(
      filter: { element: { slug: { eq: $slug } } }
      sort: { fields: [order], order: ASC }
    ) {
      nodes {
        title
        id
        codePenId
        codePenHeight
        description {
          json
        }
      }
    }
    categories: allContentfulCategory(
      sort: { fields: [order], order: ASC }
      filter: { section: { slug: { eq: $section } } }
    ) {
      nodes {
        id
        title
        slug
      }
    }
  }
`

class ElementPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedComponent: props.data.variations.nodes[0],
    }
  }

  handleChange = event => {
    this.setState({
      selectedComponent: this.props.data.variations.nodes.find(
        variation => variation.id === event.target.value
      ),
    })
  }

  render() {
    const { element, categories, variations } = this.props.data
    return (
      <Layout>
        <SEO title={element.title}></SEO>
        <Nav categories={categories.nodes} />
        <main>
          <div className="wrapper">
            <h1 style={{ marginBottom: "10px" }}>{element.title}</h1>
            <div className={elementStyles.description}>
              {element.description &&
                documentToReactComponents(element.description.json)}
            </div>
            {(element.description || element.title) && (
              <hr style={{ marginBottom: "20px", opacity: ".25" }} />
            )}
            {variations.nodes.length > 1 && (
              <select
                value={this.state.selectedComponent.id}
                name="variation"
                id="variation"
                onChange={this.handleChange}
              >
                {variations &&
                  variations.nodes.map(variation => {
                    return (
                      <option key={variation.id} value={variation.id}>
                        {variation.title}
                      </option>
                    )
                  })}
              </select>
            )}
            {this.state.selectedComponent && (
              <Variation
                key={this.state.selectedComponent.id}
                title={this.state.selectedComponent.title}
                description={this.state.selectedComponent.description}
                codePenId={this.state.selectedComponent.codePenId}
                codePenHeight={this.state.selectedComponent.codePenHeight}
              />
            )}
          </div>
        </main>
      </Layout>
    )
  }
}

export default ElementPage
