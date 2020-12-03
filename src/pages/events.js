import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Events from "../components/events"

const EventsPage = ({ data }) => {
  const {
    allStrapiEvent: { nodes: events },
  } = data
  console.log("events page", events) //destructuring out the data and rename 'nodes' to 'events' just to make it clearer

  return (
    <Layout>
      <div>
        <Events events={events} title="All Events" />
      </div>
    </Layout>
  )
}

export default EventsPage

export const query = graphql`
  {
    allStrapiEvent {
      nodes {
        description
        featured
        id
        intro
        slug
        title
        mainPhoto {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
