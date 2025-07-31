import "./App.css";
import { FeatureItem } from "./components/feature.jsx"
import { Header } from "./components/header.jsx";

import DetailsForm from "./components/form.jsx";

import { useState } from "react";

function App() {
  
  let main_title = "Student Management System";

  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count+1);
  }

  function decrementCounter() {
    setCount(count-1);
  }

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

        <div className="conatiner"
          style={{ 
            display: "flex",
            gap: "10px",
            justifyContent: "start",
            alignItems: "center" 
          }}
        >
          <button onClick={incrementCounter}>+</button>
          Counter : {count}
          <button onClick={decrementCounter}>-</button>
        </div>

        <hr />

        <div className="feature-section">
          <h2 className="section-heading">Features</h2>

          <div className="feature-grid">
            <FeatureItem title="feature 1" index={1} main={main_title} />
            <FeatureItem title="feature 2" index={2} main={main_title} />
            <FeatureItem title="feature 3" index={3} main={main_title} />
            <FeatureItem title="feature 4" index={4} main={main_title} />
          </div>
        </div>

        <h1>Student Details Form</h1>
        <DetailsForm />

      </main>

      <footer>
        <p>© 2025 Student Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
