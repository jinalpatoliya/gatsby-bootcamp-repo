import React from 'react'
import Layout from '../components/layout/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
export const query = graphql`
  query(
    $slug:String
  ){
    contentfulBlogPost(slug:{eq:$slug}){
      title
      publishedDate(formatString : "MMMM DD,YYYY")
      body{
        json
      }
    }
  }
`
// query(
//     $slug:String!
//   ){
//     markdownRemark(
//       fields : {
//         slug:{
//           eq:$slug
//         }
//       }
//     ){
//       frontmatter{
//         title
//         date
//       }
//       html
//     }
//   }

const Blog = (props) =>{
  const options = {
    renderNode:{
      "embedded-asset-block":(node)=>{
        const alt=node.data.target.fields.title['en-US']
        const url=node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url}/>
      }
    }
  }
    return(
        <Layout>
          <Head title="Blog Template"/>
            {/* This is the blog Template */}
            {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
             <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div> */}
             <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
             {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
             
        </Layout>

    )
}

export default Blog