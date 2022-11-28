import { Link } from 'react-router-dom';
import './index.css';

function Header() {
    return(
        <header className="Header">
        <div className="Brabo">
          <h1><Link to="/">Os Brabo</Link></h1>
        </div>

        <ul className="Menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/squad">Squad</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>

      </header>
    )
}

export default Header;