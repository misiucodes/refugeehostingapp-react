import "./App.css";
import Navbar from "./Navbar";
import Home from './components/pages/Homepage/Home';
import BecomeHost from "./BecomeHost";
import FindHost from "./FindHost";
import Footer from "./Footer";
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
      <Footer />
    </div>
  );
}

