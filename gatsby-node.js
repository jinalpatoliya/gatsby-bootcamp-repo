const path = require('path')

// module.exports.onCreateNode = ({ node , actions}) => {
//     const { createNodeField} = actions
//     if(node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath,'.md')
//         // console.log("@@@@@@@@@@@@@@@@2",slug)
//         // console.log(JSON.stringify(node,undefined,4))
//         createNodeField({
//             node,
//             name:'slug',
//             value : slug

//         })
//     }

//     // console.log(node)
//     // console.log(JSON.stringify(node,undefined,4))
// }

module.exports.createPages = async ({ graphql , actions}) => {
    const { createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query{
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)

    // query{
    //     allMarkdownRemark{
    //         edges{
    //             node{
    //                 fields{
    //                     slug
    //                 }
    //             }
    //         }
    //     }
    // }
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component:blogTemplate,
            path:`/blog/${edge.node.slug}`,
            context:{
                slug : edge.node.slug
            }
        })
    })
}