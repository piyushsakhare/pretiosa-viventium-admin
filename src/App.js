import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import Destinations from "./components/Destinations";
import CreateDestinations from "./components/CreateDestinations";
import Revenue from "./components/Revenue";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { useContext } from "react";
import { AuthContext } from "./components/context/auth/AuthContext";

function App() {

  const {user} = useContext(AuthContext)
  
  return (
    <div className="App">
      
      
      
      {user && 
      <Nav /> }
      <div className="w-full flex px-12" >

        {user && <div className="w-1/5" >
          <Sidebar />
        </div>}
        <div className="w-4/5 ml-10 mt-12" >
        <Routes>
        <Route path="/" element={user ? <Navigate replace to="/home"/> : <Login />}   />
            {user &&
            <>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/createdestination" element={<CreateDestinations />} />
            <Route path="/revenue" element={<Revenue />} />
            </>
          }
            </Routes>
        </div>
      </div>
 
      
    </div>
  );
}

export default App;
