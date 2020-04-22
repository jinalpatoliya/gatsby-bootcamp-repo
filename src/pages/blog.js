import React from 'react'
import Layout from '../components/layout/layout'
import { Link , graphql , useStaticQuery} from 'gatsby'
import Head from '../components/head'
const BlogPage = () => {
    const  data = useStaticQuery(graphql`
    query{
      allContentfulBlogPost(
        sort:{
          fields:publishedDate,
          order:DESC
        }
      ){
        edges{
          node{
            title
            slug
            publishedDate(formatString:"MMMM DD,YYYY")
          }
        }
      }
    }
    `)
     // allMarkdownRemark{
        //   edges{
        //     node{
        //       frontmatter{
        //         title
        //         date                
        //       }
        //       fields{
        //           slug
        //       }
        //     }
        //   }
        // }
      // }
    // console.log("Blog Data",data);
    return(
        <Layout>
          <Head title="Blog"/>
        <div>            
            <h1>Blog</h1>
            <p>Post will show up here.</p>
            {/* <ol>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    return(
                        <li>                           
                           <Link to={`/blog/${edge.node.fields.slug}`}>  <h2>{edge.node.frontmatter.title}</h2></Link>
                           <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol> */}
            <ol>
                {data.allContentfulBlogPost.edges.map((edge)=>{
                    return(
                        <li>                           
                           <Link to={`/blog/${edge.node.slug}`}> 
                            <h2>{edge.node.title}</h2></Link>
                           <p>{edge.node.publishedDate}</p>
                        </li>
                    )
                })}
            </ol> 
        </div>
        </Layout>
    )
}
export default BlogPage