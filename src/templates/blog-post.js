import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { parseEmbeddedEntry, parseEmbeddedAsset, parseLinkedEntry, fixMarks } from '../services/richText'

export default ({ data }) => {
  fixMarks(data);
  const post = data.contentfulBlogPost;
    const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => parseEmbeddedEntry(node),
      [BLOCKS.EMBEDDED_ASSET]: (node) => parseEmbeddedAsset(node),
      [INLINES.ENTRY_HYPERLINK]: (node) => parseLinkedEntry(node)
    }
  }
  return (
    <Layout>
      <h1>{post.title}</h1>
       <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(post.richBody, options) }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug } ) {
      heroImage {
        file {
          url
        }
      }
      title
      richBody {
        nodeType
        content {
          data {
            target {
              fields {
                file {
                  en_US {
                    url
                    contentType
                  }
                }
                title {
                  en_US
                }
                slug {
                  en_US
                }
              }
              sys {
                id
                type
                
              }
            }
          }
					nodeType
          content {
            data {
              uri
            }
            marks {
              type
            }
            value
            nodeType
            content {
              nodeType
              value
              content {
                data {
                  target {
                    fields {
                      title {
                        en_US
                      }
                      slug {
                        en_US
                      }
                    }
                  }
                }
                nodeType
                marks {
                  type
                }
                value
              }
            }
          }
        }
      }
    }
  }
`