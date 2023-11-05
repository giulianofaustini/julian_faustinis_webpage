
import { Link } from 'react-router-dom'

export const ShortFiction = () => {
  return (
    <div>
      <h1>Here is a list of short fiction: </h1>
      <div  className='listOfShortPieces'>
      <Link className="linkToShortPiece" to="/pirouettes">Pirouette </Link>
      <br />
      <Link className="linkToShortPiece" to="/latestPost">Latest Post </Link>
      <br />
      <Link className="linkToShortPiece" to="/houseAndGarden">House And Garden </Link>
      </div>
    
    </div>
  )
}
