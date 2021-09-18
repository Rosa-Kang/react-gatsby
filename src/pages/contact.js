import * as React from "react"
import Email from '../components/Email'
import Layout from "../components/Layout"
import Seo from "../components/Seo"

// import Stats from "../components/Stats"


const Contact = () => (
  <Layout>
    <Seo title="Contact Us" />
    <Email />
    {/* <Stats /> */}
  </Layout>
)

export default Contact
