import { Link, NavLink, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs.jsx";
import CartItem from "./CartItem.jsx";
import ProductList from "./ProductList.jsx";
import { useSelector } from "react-redux";

function Header() {
  const itemCount = useSelector((state) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0),
  );

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Paradise Nursery home">
        <span className="brand-mark" aria-hidden="true">✿</span>
        <span>Paradise <strong>Nursery</strong></span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/plants">Shop plants</NavLink>
        <NavLink to="/about">Our story</NavLink>
        <NavLink className="cart-nav" to="/cart">
          Cart <span className="cart-badge" aria-label={`${itemCount} items in cart`}>{itemCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <main className="landing-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">A little more green, every day</p>
          <h1>Make room for <em>something</em> beautiful.</h1>
          <p className="hero-copy">
            Thoughtfully grown houseplants to bring calm, color, and a breath of
            fresh air into your home.
          </p>
          <Link className="button button-light" to="/plants">Get Started <span aria-hidden="true">→</span></Link>
          <p className="hero-note">Find your next favorite leaf.</p>
        </div>
        <div className="hero-caption">GROW WELL. LIVE WELL.</div>
      </section>
      <section className="home-intro">
        <p className="eyebrow">Rooted in good things</p>
        <h2>Plants that make a house feel like home.</h2>
        <Link className="text-link" to="/about">Get to know us <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<CartItem />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <footer className="site-footer">
        <span>Paradise Nursery</span>
        <span>Made for growing, wherever you are.</span>
      </footer>
    </>
  );
}
