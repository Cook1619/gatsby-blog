import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => (
    <div>
        <h1>About Page</h1>
        <p>A fullstack javascript web developer</p>
        <p>Need some dev work done?<Link to="/contact"> Contact Me</Link></p>
    </div>
)

export default AboutPage;