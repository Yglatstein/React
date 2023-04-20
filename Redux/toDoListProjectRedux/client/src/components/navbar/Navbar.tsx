import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./navbar.scss"

function Navbar() {
  const navigate = useNavigate()

  async function handleLogout() {
    try {
        const { data } = await axios.get("/api/users/logout");
        console.log("recived: ", data);
        if(data.success){
          navigate("/")
        }
      } catch (error) {
        console.error(error);
      }
  }
    
  
  return (
      <div>
        <nav>
          <h2>ToDo List</h2>
          <ul>
            <li onClick={handleLogout}><Link to="/Login">Logout</Link></li>
          </ul>
        </nav>
      </div>
    );
  }

  export default Navbar