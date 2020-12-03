import React from "react"
import { Link } from "gatsby"
import { FaHome, FaHandsHelping, FaBook } from "react-icons/fa"
import { BsFillPeopleFill, BsCalendar } from "react-icons/bs"

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "what we do",
    url: "/what/",
    icon: <BsFillPeopleFill />,
  },
  {
    id: 3,
    text: "how we do",
    url: "/how/",
    icon: <FaBook />,
  },
  {
    id: 4,
    text: "events",
    url: "/events/",
    icon: <BsCalendar />,
  },
  {
    id: 5,
    text: "participate",
    url: "/participate/",
    icon: <FaHandsHelping />,
  },
]

export default ({ styleClass }) => {
  const tempLinks = data.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url}>
          <div className="nav-links-container">
            <span>{link.icon}</span>
            <div>{link.text}</div>
          </div>
        </Link>
      </li>
    )
  })

  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
