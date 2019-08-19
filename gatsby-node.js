// const path = require("path")

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const ElementPage = path.resolve("./src/templates/element.js")

//   const elements = await graphql(`
//     query {
//       allContentfulElement {
//         nodes {
//           title
//           slug
//           id
//           section {
//             slug
//           }
//           subcategory {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   // 3) create new pages
//   elements.data.allContentfulElement.nodes.forEach(element => {
//     createPage({
//       component: ElementPage,
//       path: `/${element.subcategory.slug}/${element.slug}`,
//       context: {
//         slug: element.slug,
//         subcategory: element.subcategory.slug,
//         section: element.section.slug,
//       },
//     })
//   })
// }
