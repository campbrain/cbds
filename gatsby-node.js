const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const ElementPage = path.resolve("./src/templates/element.js")

  const res = await graphql(`
    query {
      allContentfulElement {
        nodes {
          title
          slug
          id
          subcategory {
            slug
          }
        }
      }
    }
  `)

  // 3) create new pages
  res.data.allContentfulElement.nodes.forEach(element => {
    createPage({
      component: ElementPage,
      path: `/${element.subcategory.slug}/${element.slug}`,
      context: {
        slug: element.slug,
        subcategory: element.subcategory.slug,
      },
    })
  })
}
