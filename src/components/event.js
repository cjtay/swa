import React from "react";
import Image from "gatsby-image";

const Event = ({ event }) => {
  return (
    <li className="event-card">
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
        {/* <div className="event-programme">{event.programme}</div> */}
        <span>{event.programme}</span>
        <div className="event-footer">
          <p>{event.author.username}</p>
          <p>{event.published_at}</p>
        </div>
      </div>
    </li>
  );
};

export default Event;
