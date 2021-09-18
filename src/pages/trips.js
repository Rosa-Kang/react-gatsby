import * as React from "react"
import Trips from "../components/Trips"
import Layout from "../components/Layout"
import Seo from "../components/Seo"



const TripsPage = () => (
  <Layout>
    <Seo title="TripsPage" />
    <Trips heading="Our Favorite Destinations" />
  </Layout>
)

export default TripsPage
