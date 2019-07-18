import React from "react"
import { graphql, Link } from "gatsby"

const data = graphql(
  `
    query($id: String) {
      elements: allContentfulElement(
        filter: { subcategory: { slug: { eq: $id } } }
      ) {
        nodes {
          id
          title
          slug
        }
      }
    }
  `,
  { id: "actions" }
)

const NavInnerBlock = ({ subcategory }) => {
  return (
    <ul className="elementList">
      {data.elements &&
        data.elements.nodes.map(element => {
          return (
            <li key={element.id}>
              <Link
                className="elementLink"
                to={`/${subcategory.slug}/${element.slug}`}
              >
                {element.title}
              </Link>
            </li>
          )
        })}
    </ul>
  )
}

export default NavInnerBlock
