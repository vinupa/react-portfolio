import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (

    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
      </div>
    </Router>
  
  );
}

export default App;
