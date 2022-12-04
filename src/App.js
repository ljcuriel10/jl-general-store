import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./Home/Hero";
import Home from "./Home/Home";
import Lodging from "./Lodging";
import Navbar from "./NavBar";


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          
          <Route exact={true} path='/'>
            <Hero />
            <Home />
          </Route>
          <Route path='/lodging'>
            <Lodging />
          </Route>
      </div>
    </Router>
  );
}

export default App;
