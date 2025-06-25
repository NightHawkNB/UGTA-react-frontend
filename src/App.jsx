import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header>
        <h1>Student Management System</h1>
      </header>

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
            <div className="feature-item">Item 01</div>
            <div className="feature-item">Item 02</div>
            <div className="feature-item">Item 03</div>
            <div className="feature-item">Item 04</div>
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
