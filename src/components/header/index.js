import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSection(sort: { fields: [order], order: ASC }) {
        nodes {
          title
          slug
          id
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <h1 style={{ marginLeft: "30px" }}>Campbrain Design System</h1>
      </Link>
      <nav className={headerStyles.nav}>
        <ul>
          {data.allContentfulSection.nodes.map(section => {
            return (
              <li key={section.id}>
                <Link
                  to={`/${section.slug}`}
                  activeClassName={headerStyles.activeLink}
                >
                  {section.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
