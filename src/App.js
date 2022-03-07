import "./App.css";
import Home from "./Home";
import About from "./About";
import GetInvolved from "./GetInvolved";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/getinvolved" element={<GetInvolved />} />
      </Routes>
  );
}

