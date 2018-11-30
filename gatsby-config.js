module.exports = {
  siteMetadata: {
    title: 'Blogs about recent India trip',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ENTER_SPACEID_HERE`,
        accessToken: `ENTER_ACCESS_TOKEN_HERE`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-transformer-remark`
  ],
}
