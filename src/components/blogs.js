import React from "react"
import { StaticQuery, graphql } from "gatsby"


export default ({data}) => (
    <StaticQuery
        query={graphql`
            query {
                allContentfulBlogPost {
                    edges {
                        node {
                            title
                        }
                    }
                }
            }
        `}
        render={data => (
    <div>
        <h1>Blogs</h1>
        <ul>
            {data.allContentfulBlogPost.edges.map(({ node }, index) => (
                <li key={index}>{node.title}</li>
            ))} 
        </ul>
    </div>
)}
/>
)