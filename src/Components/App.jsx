import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Developer from "./Developer";
import Creative from "./Creative";

function App() {
  return (
    <Router>
      <div className="papa-container">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/full-stack" element={<Developer />}/>
          <Route path="/creative" element={<Creative />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

