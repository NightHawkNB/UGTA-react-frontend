//* Style Sheets
import "./App.css";
import "./custom.css";

//* Pages
import HomePage from "./pages/HomePage.jsx";
import ManagePage from "./pages/ManagePage.jsx";

//* Components
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";

//* Routing package imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <Navbar />

        {/* Define routes for the application */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manage" element={<ManagePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;