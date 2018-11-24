const path = require('path');

// Implement the Gatsby API "onCreatePage". This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
    // page.matchPath is a special key that's used for matching pages
    // only on the client
    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"
        
        // update the page
        createPage(page)
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        graphql(`
            query {
                allContentfulBlogPost {
                    edges {
                        node {
                            title
                            slug
                            id
                        }
                    }
                }
            }
        `).then(result => {
            result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
                createPage({
                    path: `app/blogs/${node.slug}`,
                    component: path.resolve(`./src/templates/blog-post.js`),
                    context: {
                        slug: node.slug,
                        id: node.id
                    }
                })    
            })
            resolve()
        })
    })
}