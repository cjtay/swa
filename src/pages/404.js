import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="container container-center">
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <Link to="/">
        <p>Go to home page</p>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
