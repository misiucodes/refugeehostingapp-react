import "./App.css";
import Navbar from "./components/Navbar";
import Home from './components/pages/Homepage/Home';
import BecomeHost from "./components/BecomeHost";
import FindHost from "./components/FindHost";
import Footer from "./components/pages/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./SearchResults";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/becomeahost" element={<BecomeHost />} />
        <Route exact path="/findahost" element={<FindHost />} />
      </Routes>
      <SearchResults />
      <Footer />
    </div>
  );
}

