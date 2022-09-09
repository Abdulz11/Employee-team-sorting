import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="nav">
     <div>
     <Link to="/" className="a">Home</Link>
     <Link to="/infopg"  className="a">Info</Link>
     </div>
    </div>
  )
}

export default Navbar