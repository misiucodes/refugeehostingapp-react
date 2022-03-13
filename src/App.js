import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/Homepage/Home';
import BecomeHost from "./components/BecomeHost";
import FindHost from "./components/pages/FindHost/FindHost";
import Footer2 from "./components/pages/Footer/Footer2";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/becomeahost" element={<BecomeHost />} />
        <Route exact path="/findahost" element={<FindHost />} />
      </Routes>
      <Footer2 />
    </div>
  );
}

