import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      Go to <Link to="/app/blogs">Blogs</Link> to see the India blogs.
    </p>
  </Layout>
)

export default IndexPage
