import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';

const AboutPage = () => (
    <div>
        <h1>About Page</h1>
        <p>A fullstack javascript web developer</p>
        <p>Need some dev work done?<Link to="/contact"> Contact Me</Link></p>
        <Footer />
    </div>
)

export default AboutPage;