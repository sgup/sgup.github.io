module.exports = {
  siteMetadata: {
    title: `Shridhar Gupta`,
    description: `Hi, I’m Shridhar Gupta, a UX-focused Web & Mobile Engineer from San Francisco, California. I travel and work remotely while building products I’m passionate about.`,
    author: `@shridhargupta`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#92ffc0`,
        theme_color: `#92ffc0`,
        display: `minimal-ui`,
        icon: `src/images/sg-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "qhi8qth",
          families: ["Museo Sans:300,700"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
