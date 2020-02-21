import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Fullban from "../components/banners/full-banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Fullban />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
