require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `The Poetics of Home`,
    // Default title of the page
    siteTitleAlt: `Stefana Dilova's Portfolio`,
    // Can be used for e.g. JSONLD
    siteHeadline: `The Poetics of Home`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://stefanadilova.me/`, // TODO: add one after gh pages integration
    // Used for SEO
    siteDescription: `Master's Project Architecture Berlin University of Arts: Stefana Dilova`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`, //TODO: add one
    // Twitter Handle
    author: ``, // TODO: add one
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cormorant Garamond`,
            variants: [`300`, `300i`, `500`]
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
