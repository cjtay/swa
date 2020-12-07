import React from "react";
import { Link } from "gatsby";
import Event from "../components/event";

const Events = ({ events, title }) => {
  return (
    <div className="container container-center">
      <h1>{title}</h1>
      <ul>
        {events.map(event => {
          return (
            <Link key={event.id} to={`/event-blogs/${event.slug}`}>
              <Event event={event} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Events;
