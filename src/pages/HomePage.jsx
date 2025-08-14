import FeatureItem from "../components/feature";

export default function HomePage() {
  return (
    <main>
      <section className="intro-section">
        <h2 className="section-heading">Intro Section | Hero Section</h2>
        <p>Introduction to the system. (Hero Section)</p>
      </section>

      <hr />

      <section className="feature-section">
        <h2 className="section-heading">Features</h2>

        <div className="feature-grid">
          <FeatureItem title="feature 1" index={1} />
          <FeatureItem title="feature 2" index={2} />
          <FeatureItem title="feature 3" index={3} />
          <FeatureItem title="feature 4" index={4} />
        </div>
      </section>
    </main>
  );
}