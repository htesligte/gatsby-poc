import React from "react"
import { Router, Route } from "react-router-dom"
import Layout from "../components/layout"
import Blogs from "../components/blogs"
import createBrowserHistory from "history/createBrowserHistory"

const history = createBrowserHistory();

history.listen(() => {
    console.log("Yo.");
})

const App = () => (
        <Layout>
                <Router history={history}>
                    <>
                        <Route path="/app/blogs" component={Blogs} />
                    </>
                </Router>
        </Layout>
)

export default App