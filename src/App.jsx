import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Footer from "./Components/Footer";
import Contactus from "./Pages/ContactUs/Contactus";
import Map from "./Components/Map";
import GetAQuote from "./Pages/GetAQuote/GetAQuote";
import Landing from "./Pages/LandingPage/Landing";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quote" element={<GetAQuote />} />
      </Routes>
    </Router>
  );
}

export default App;
