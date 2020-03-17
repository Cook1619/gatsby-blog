import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
    <div>
        <h1>Matt's Blog Site</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blogs</Link>
        <Link to="/contact">Contact</Link>
    </div>
)

export default Header;