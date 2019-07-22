import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./navblock.scss"

const NavBlock = ({ category }) => {
  const data = useStaticQuery(graphql`
    query {
      subcategories: allContentfulSubcategory(
        sort: { fields: [order], order: ASC }
      ) {
        nodes {
          id
          title
          slug
          category {
            id
          }
        }
      }
      elements: allContentfulElement(sort: { fields: [order], order: ASC }) {
        nodes {
          id
          title
          slug
          subcategory {
            id
          }
        }
      }
    }
  `)

  const filteredSubcategories = data.subcategories.nodes.filter(
    subcategory => subcategory.category.id === category.id
  )
  return (
    <div className="navblock">
      <h3 className="category">{category.title}</h3>
      <ul>
        {filteredSubcategories &&
          filteredSubcategories.map(subcategory => {
            return (
              <li key={subcategory.id} style={{ marginBottom: "10px" }}>
                <Link
                  to={`/${subcategory.slug}/${
                    data.elements.nodes.filter(
                      element => element.subcategory.id === subcategory.id
                    )[0].slug
                  }`}
                >
                  <h3 className="subcategory">{subcategory.title}</h3>
                </Link>
                <ul className="elementList">
                  {data.elements &&
                    data.elements.nodes
                      .filter(
                        element => element.subcategory.id === subcategory.id
                      )
                      .map(element => {
                        return (
                          <li key={element.id}>
                            <Link
                              className="elementLink"
                              to={`/${subcategory.slug}/${element.slug}`}
                              activeClassName="active-nav-link"
                            >
                              {element.title}
                            </Link>
                          </li>
                        )
                      })}
                </ul>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default NavBlock
