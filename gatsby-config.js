/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// const ac=process.env.CONTENTFUL_SPACE_ID || process.env.CONTENTFUL_ACCESS_TOKEN
// require('dotenv').config({path: `./.env.${ac}`}); 
const env=process.env.NODE_ENV || "development";
require('dotenv').config({
  path: `.env.${env}`, // or '.env'
});
const config = require('gatsby-plugin-config');
console.log("config",config)
module.exports = {
  /* Your site config here */
  siteMetadata:{
      title:'Full-Stack Bootcamp',
      author:'Jinal Patoliya'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
        resolve : 'gatsby-source-contentful',
        options:{
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
        }
    },
    'gatsby-plugin-sass',
    {
      resolve : `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    'gatsby-plugin-sharp',
    {
          resolve:'gatsby-transformer-remark',
          options : {
            plugins : [
              'gatsby-remark-relative-images',
              {
                resolve : 'gatsby-remark-images',
                options:{
                      maxWidth : 750,
                      linkImageToOriginal : false
                }
              }
            ]
          }
    }
  ]
}
