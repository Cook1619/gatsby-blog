import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <div>
    <header>
      <h1>Matt's Blog Site</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
)

export default Header
