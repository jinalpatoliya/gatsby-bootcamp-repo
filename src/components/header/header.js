import React from 'react'
import { Link , graphql , useStaticQuery} from 'gatsby'
import './header.scss' 
const Header = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        site{
          siteMetadata{
            title
          }
        }
      }
    `)
    return(
        <header>
        <h1>{ data.site.siteMetadata.title }</h1>
        <nav>
            <ul>
                <li><Link activeClassName="active" to="/"> Home</Link></li>
                <li><Link activeClassName="active" to="/blog"> Blog</Link></li>
                <li><Link activeClassName="active" to="/about"> About</Link></li>
                <li><Link activeClassName="active" to="/contact"> Contact</Link></li>
            </ul>
        </nav>
        </header>
    )
}
export default Header