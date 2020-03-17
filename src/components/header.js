import React from "react"
import { Link } from "gatsby"
// import './header.module.scss'
import headerStyles from "./header.module.scss"

const Header = () => (
  <div>
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          Mathew Cook
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/about">About</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/blog">Blogs</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}  to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
)

export default Header
