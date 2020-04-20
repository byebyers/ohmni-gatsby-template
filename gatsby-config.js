module.exports = {
  siteMetadata: {
    title: `Ohmni`,
    description: `Template for Ohmni Projects`,
    siteUrl: 'https://ohmni-temp.netlify.app',
    image: 'https://ohmni-temp.netlify.app/img/logo-title.svg',
    author: `@byersjacob`,
    organization: {
      name: 'Ohmni',
      url: 'https://ohmni-temp.netlify.app',
      logo: 'https://ohmni-temp.netlify.app/img/logo-title.svg',
    },
    social: {
      twitter: '@ohmnitec',
      fbAppID: '513264866034794',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
       resolve: `gatsby-plugin-typography`,
       options: {
         pathToConfigModule: `src/utils/typography`,
       },
     },
     {
       resolve: 'gatsby-plugin-netlify-cms',
       options: {
         modulePath: `${__dirname}/src/cms/cms.js`,
       },
     },
     `gatsby-plugin-offline`,
     "gatsby-plugin-netlify",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  mapping: {
    'MarkdownRemark.fields.author': `MarkdownRemark`,
  },
}
