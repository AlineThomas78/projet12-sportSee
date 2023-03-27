import "./index.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from './Components/Header';
import HeaderVertical from "./Components/HeaderVertical/HeaderVertical";
import Home from './Pages/Home';

/**
The main entry point of the application that renders the UI.
*/
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="Container">
        <Header />
          <div className="bodyVertical">
            <HeaderVertical /> 
{/*  Defines the routes for the application */}
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>    
          </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
   document.getElementById("root")
);



