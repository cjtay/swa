import React from "react"
import Event from "../components/event"

const Events = ({ events, title }) => {
  return (
    <div className="container container-center">
      <h1>{title}</h1>
      <Event events={events} />
    </div>
  )
}

export default Events
