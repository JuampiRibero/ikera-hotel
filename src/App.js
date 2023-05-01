import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import ContactForm from "./components/ContactForm/ContactForm";
import UnderConstruction from "./components/UnderConstruction/UnderConstruction";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/rooms" element={<UnderConstruction />}>
          </Route>
          <Route path="/restaurant" element={<UnderConstruction />}>
          </Route>
          <Route path="/gallery" element={<Gallery />}>
          </Route>
          <Route path="/contact" element={<ContactForm />}>
          </Route>
          <Route path="*">
            {/* <Navigate to="/" /> */}
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
