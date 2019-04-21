module.exports = {
  siteMetadata: {
    title: 'Computer Science Enrichment Club',
    keywords: ['CSEC', 'CSEC-W', 'CSEC-A', 'CSEC-S', 'Computer Science Enrichment Club', 'AMACSS', 'UTSC', '~csec', 'cs', 'algorithms', 'development', 'club', 'UTSC CS', 'UofT CS', 'University of Toronto', 'Scarborough', 'Computer Science', 'Programming', 'Programming Club', 'UTSC Programming Club', 'UTSC Computer Science Clubs', 'UTSC Computer Science', 'Nick\'s Programming Club', 'AMACSS'],
    description: 'Welcome to CSEC. The Computer Science Enrichment Club is a student-run group that focuses on helping students with a passion for Computer Science take the next steps in their career.',
    author: 'Frederic Pun'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          { family: 'Rubik', variants: ['400', '500'] }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
          '@sections': './src/pages/components',
          '@styles': './src/styles',
          '@images': './src/images'
        }
      }
    },
    'gatsby-plugin-sass'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
