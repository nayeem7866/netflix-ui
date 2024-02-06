import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Login from "./pages/Login";
import Player from "./pages/Player";
import MoviePage from "./pages/Movies";
import TVShows from "./pages/TVShows.jsx";

export default  function App() 
{
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/Signup" element={<Signup/>}/>
      <Route exact path="/Login" element={<Login/>}/>
      <Route exact path="player" element={<Player/>}/>
      <Route exaxt path="/movies" element={<MoviePage/>}/>
      <Route exaxt path="/tv" element={<TVShows/>}/> 
      <Route exact path="/" element={<Netflix/>}/>
    </Routes>
    </BrowserRouter>
  );
}


