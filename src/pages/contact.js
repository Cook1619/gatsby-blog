import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => (
  <div>
    <Layout>
      <Head title="Contact" />
      <h1>Contact Page</h1>
      <p>Testin@gmail.com</p>
      <p>
        Follow me at{" "}
        <a href="https://twitter.com/mcook1619" target="_blank">
          @mcook1619
        </a>
      </p>
    </Layout>
  </div>
)

export default ContactPage
