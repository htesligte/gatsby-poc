import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import Blogs from "../components/blogs"
import Orders from "../components/orders"

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <Login path="/app/login" />
            <Blogs path="/app/blogs" />
            <Orders path="/app/orders" />
        </Router>
    </Layout>
)

export default App