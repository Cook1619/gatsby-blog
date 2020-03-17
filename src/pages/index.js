import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer';

const IndexPage = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <p>I'm Matt, living in MN</p>
            <p>Need a Dev?? <Link to="/contact">Contact Me</Link></p>
            <Footer />
        </div>
    )
}

export default IndexPage;