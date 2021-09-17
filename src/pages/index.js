import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Trips from "../components/Trips"
import Testimonials from "../components/Testimonials"
import Stats  from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Trips heading="Our Favorite Destinations" />
    <Testimonials />
    <Stats/>
  </Layout>
)

export default IndexPage
