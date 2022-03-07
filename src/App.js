import "./App.css";
import Home from "./Home";
import About from "./About";
import GetInvolved from "./GetInvolved";
import FindHost from "./FindHost";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/getinvolved" element={<GetInvolved />} />
        <Route exact path="/findahost" element={<FindHost />} />
      </Routes>
      <Footer />
    </div>
  );
}

