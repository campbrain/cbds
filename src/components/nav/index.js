import React, { useState } from "react"

import navStyles from "./nav.module.scss"
import NavBlock from "../navblock"

const Nav = ({ categories }) => {
  const [isOpen, toggleNav] = useState(true)

  return (
    <aside className={isOpen ? navStyles.sidebarOpen : navStyles.sidebarClosed}>
      <button
        onClick={() => toggleNav(!isOpen)}
        className={navStyles.navButton}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category.id} style={{ marginBottom: "30px" }}>
              <NavBlock category={category} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Nav
