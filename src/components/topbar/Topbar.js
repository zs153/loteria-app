import "./topbar.css"
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">Loteria</span>
        </Link>
      </div>
    </div>
  )
}

export default Topbar
