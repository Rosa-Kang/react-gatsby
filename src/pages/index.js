import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
  </Layout>
)

export default IndexPage
