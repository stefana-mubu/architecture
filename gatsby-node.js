const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/pages/the-poetics-of-home.tsx`),
  })

  createPage({
    path: '/the-poetics-of-home',
    component: require.resolve(`./src/pages/the-poetics-of-home.tsx`),
  })
}
