import React from 'react'
import { Link } from 'react-router-dom'

export const ShortFiction = () => {
  return (
    <div>
      <h1>Here is a list of short fiction: </h1>
      <Link className="link" to="/pirouettes">Pirouette </Link>
      <br />
      <Link className="link" to="/latestPost">Latest Post </Link>
      <br />
      <Link className="link" to="/houseAndGarden">House And Garden </Link>


    </div>
  )
}
