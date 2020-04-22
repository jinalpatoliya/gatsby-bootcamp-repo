import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout/layout"
import Head from '../components/head'
const IndexPage = () =>{
    return(
        <Layout>
        <div>
            <Head title="Home"/>
            <h1>Hello</h1>
            <h2>I'm Jinal a full-stack Developer</h2>
            <p>Need a developer ?<Link to="/contact"> contact me.</Link></p>
        </div>
        </Layout>
    )
}
export default IndexPage