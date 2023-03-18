import React , {useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Routes, BrowserRouter ,useNavigate } from "react-router-dom";
import Page404 from "./views/Page404";
import Home from './views/Home';
import Navbar from './components/navbar/Navbar';
import Dog from './views/Dog';
import Login from "./views/Login";
import { UserContext } from "./contexts/UserContexts";


function App() {  

  const [user, setUser] = useState<any>();
  const navigate = useNavigate()
  useEffect(() => {
    console.log("user foundcd")
    navigate("/login");
    if (!user) {
      navigate("/login")
    }
  }, []);


  return (
    <UserContext.Provider value={{user, setUser}} />
      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/dog/:breed" element={<Dog />} />
        </Route>
    </Routes>
  );
}

export default App;