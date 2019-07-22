import React, { useState } from "react"
import navStyles from "./pattern-nav.module.scss"

const PatternNav = ({ posts }) => {
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
        <h3 className="category">Team and Process</h3>
        <ul>
          {posts.map(post => (
            <li key={post.id} className={navStyles.postLink}>
              <a href={`/process/#${post.slug}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default PatternNav
