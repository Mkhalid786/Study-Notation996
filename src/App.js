import { Route, Routes } from "react-router-dom";
import {useState} from 'react';
import Navbar from "./Componants/Navbar"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Deskbord from "./Pages/Deskbord";

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/deskbord" element={<Deskbord/>}></Route> 

      </Routes>

    </div>
  );
}

export default App;
