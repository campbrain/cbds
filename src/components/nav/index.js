import React from "react"

import navStyles from "./nav.module.scss"
import NavBlock from "../navblock"

const Nav = ({ categories }) => {
  return (
    <aside className={navStyles.sidebar}>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id}>
              <NavBlock category={category} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Nav
