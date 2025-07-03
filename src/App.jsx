import "./App.css";
import { FeatureItem } from "./components/feature.jsx"
import { Header } from "./components/header.jsx";

function App() {
  return (
    <div className="main-container">
      
      <Header />

      <main>
        <div className="intro-section">
          <h2 className="section-heading">Intro Section | Hero Section</h2>
          <p>
            Introduction to the system. (Hero Section)
          </p>
        </div>

        <hr/>

        <div className="feature-section">
          <h2 className="section-heading">Features</h2>

          <div className="feature-grid">
            <FeatureItem name="feature 01" />
            <FeatureItem name="feature 02" />
            <FeatureItem name="feature 02" />
            <FeatureItem name="feature 04" />
          </div>
        </div>

      </main>

      <footer>
        <p>© 2025 Student Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
