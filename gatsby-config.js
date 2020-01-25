require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Computer Science Enrichment Club',
    keywords: ['CSEC', 'CSEC-W', 'CSEC-A', 'CSEC-S', 'Computer Science Enrichment Club', 'AMACSS', 'UTSC', '~csec', 'cs', 'algorithms', 'development', 'club', 'UTSC CS', 'UofT CS', 'University of Toronto', 'Scarborough', 'Computer Science', 'Programming', 'Programming Club', 'UTSC Programming Club', 'UTSC Computer Science Clubs', 'UTSC Computer Science', 'Nick\'s Programming Club', 'AMACSS'],
    description: 'Welcome to CSEC. The Computer Science Enrichment Club is a student-run group that focuses on helping students with a passion for Computer Science take the next steps in their career.',
    author: 'Frederic Pun',
    themeColor: "#1d2731"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-layout',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          { family: 'Rubik', variants: ['400', '500'] }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /\.svg$/,
        exclude: /node_modules/
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: './src/images/Logo.png'
      }
    },
    {
      resolve: 'gatsby-plugin-module-resolver',
      options: {
        aliases: {
          '@components': './src/components',
          '@util': './src/util',
          '@sections': './src/components/pages',
          '@styles': './src/styles',
          '@images': './src/images'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 8001,
        production: true
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_STAPI,
        queryLimit: 1000000, // Default to 100
        contentTypes: [`album`, `article`, `division`, `resource`, `executive`, `seminar`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112733614-2"
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
