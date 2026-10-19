import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <main className="page-shell about-page">
      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">A nursery with a little heart</p>
          <h1>Good things grow when we grow together.</h1>
          <p>
            Paradise Nursery began with a simple idea: everyone deserves a
            greener, calmer place to come home to. We make finding and caring
            for plants feel joyful, one leaf at a time.
          </p>
          <Link className="button button-dark" to="/plants">Explore our plants <span aria-hidden="true">→</span></Link>
        </div>
        <div className="about-image" role="img" aria-label="Sunlight filtering through lush nursery plants" />
      </section>

      <section className="mission-section">
        <p className="eyebrow">Our mission</p>
        <h2>Make plant joy feel easy, welcoming, and part of everyday life.</h2>
        <p>
          We carefully choose healthy, character-filled plants and share
          practical guidance so new and seasoned plant parents can grow with
          confidence.
        </p>
      </section>

      <section className="benefit-grid" aria-label="Why shop with Paradise Nursery">
        <article><span>01</span><h3>A thoughtful collection</h3><p>From first-time-friendly favorites to expressive statement leaves, there’s a plant for every space.</p></article>
        <article><span>02</span><h3>Care that comes with you</h3><p>Clear, approachable care tips help you understand what your new plant needs to thrive.</p></article>
        <article><span>03</span><h3>Here for your growing</h3><p>We believe the best plant journey is a personal one, and we’re delighted to be part of yours.</p></article>
      </section>
    </main>
  );
}
