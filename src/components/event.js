import React from "react"
import Image from "gatsby-image"

const Event = ({ events }) => {
  return (
    <ul>
      {events.map(event => {
        return (
          <li key={event.id} className="event-card">
            <div className="event-img">
              {event.mainPhoto && (
                <Image
                  fluid={event.mainPhoto.childImageSharp.fluid}
                  alt={event.title}
                />
              )}
            </div>
            <div className="event-info-container">
              <h2>{event.title}</h2>
              <p>{event.intro}</p>
              <div className="event-footer">
                {/* <div className="event-author-photo">
                  <Image
                    fluid={event.author.photo.childImageSharp.fluid}
                    alt={event.author.username}
                  />
                </div>
                <p>{event.author.username}</p>
                <p>{event.published_at}</p> */}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Event
