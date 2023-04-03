import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Header from './Components/Header';
import HeaderVertical from "./Components/HeaderVertical/HeaderVertical";
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="Container">
        <Header />
        <div className="bodyVertical">
          <HeaderVertical />
          {/*  Defines the routes for the application */}
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
