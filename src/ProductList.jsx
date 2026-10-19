import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./CartSlice.jsx";
import { categories } from "./data/plants.js";

export default function ProductList() {
  const dispatch = useDispatch();
  const itemCount = useSelector((state) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0),
  );

  return (
    <main className="page-shell">
      <section className="page-heading shop-heading">
        <div>
          <p className="eyebrow">Find your green</p>
          <h1>Plants for your happy place.</h1>
          <p>Meet the leafy companions we think you’ll love growing.</p>
        </div>
        <Link className="button button-dark" to="/cart">
          View cart <span className="cart-badge">{itemCount}</span>
        </Link>
      </section>

      {categories.map((category) => (
        <section className="plant-category" key={category.id}>
          <div className="category-heading">
            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <span className="category-count">{String(category.plants.length).padStart(2, "0")} plants</span>
          </div>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <div className="plant-image-wrap">
                  <img className="plant-image" src={plant.image} alt={plant.alt} loading="lazy" />
                  <span className="plant-tag">Nursery favorite</span>
                </div>
                <div className="plant-card-content">
                  <div className="plant-card-title">
                    <h3>{plant.name}</h3>
                    <span className="plant-price">${plant.price.toFixed(2)}</span>
                  </div>
                  <p>{plant.detail}</p>
                  <button className="button button-outline add-button" onClick={() => dispatch(addItem(plant))}>
                    Add to cart <span aria-hidden="true">+</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
