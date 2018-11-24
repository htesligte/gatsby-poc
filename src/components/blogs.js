import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"


export default ({data}) => (
    <StaticQuery
        query={graphql`
            {
              contentfulBlogList(contentful_id: { eq:"7GeOVJxAFqWAI0gOWcIuSg"}) {
                blogs {
                  title
                  slug
                }
              }
            }
        `}
        render={data => (
    <div>
        <h1>Blogs</h1>
        <ul>
            {
                data.contentfulBlogList.blogs.map((node, index) => console.log(node, index))
            }
            {data.contentfulBlogList.blogs.map((node, index) => (
                <li key={index}><Link to={`app/blogs/${node.slug}`}>{node.title}</Link></li>
            ))} 
        </ul>
    </div>
)}
/>
)