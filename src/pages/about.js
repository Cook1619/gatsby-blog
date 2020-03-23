import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => (
  <div>
    <Head title="About" />
    <Layout>
      <h1>About Page</h1>
      <p>A fullstack javascript web developer</p>
      <p>
        Need some dev work done?<Link to="/contact"> Contact Me</Link>
      </p>
    </Layout>
  </div>
)

export default AboutPage
