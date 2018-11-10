import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      You should <Link to="/app/login">log in</Link> to see restricted content
    </p>
  </Layout>
)

export default IndexPage
