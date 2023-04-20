import { Link, Outlet } from 'react-router-dom';
import "./navbar.scss"

function Navbar() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
  
        <hr />
  
        <Outlet />
      </div>
    );
  }

  export default Navbar