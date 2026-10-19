import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItem, updateQuantity } from "./CartSlice.jsx";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function checkout() {
    if (!items.length) return;
    const confirmed = window.confirm(
      `Your total is $${total.toFixed(2)}. Place this sample order?`,
    );
    if (confirmed) {
      dispatch(clearCart());
      window.alert("Thank you! Your sample order has been placed.");
    }
  }

  return (
    <main className="page-shell cart-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">Your little corner of green</p>
          <h1>Shopping cart</h1>
          <p>{items.length ? "Everything you picked, all in one place." : "Your next favorite plant is waiting."}</p>
        </div>
      </section>

      {!items.length ? (
        <section className="empty-cart">
          <span className="empty-cart-icon" aria-hidden="true">✿</span>
          <h2>Your cart is ready to grow.</h2>
          <p>Browse our collection and find a plant that feels like you.</p>
          <Link className="button button-dark" to="/plants">Continue shopping <span aria-hidden="true">→</span></Link>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items" aria-label="Cart items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)} each</p>
                  <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </div>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    disabled={item.quantity <= 1}
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  >−</button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  >+</button>
                </div>
                <strong className="cart-subtotal">${(item.price * item.quantity).toFixed(2)}</strong>
              </article>
            ))}
          </section>

          <aside className="order-summary">
            <h2>Order summary</h2>
            <div className="summary-line"><span>Items ({items.reduce((count, item) => count + item.quantity, 0)})</span><span>${total.toFixed(2)}</span></div>
            <div className="summary-line"><span>Shipping</span><span className="free-shipping">Free</span></div>
            <div className="summary-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button className="button button-dark checkout-button" onClick={checkout}>Checkout <span aria-hidden="true">→</span></button>
            <Link className="continue-link" to="/plants">Continue shopping</Link>
          </aside>
        </div>
      )}
    </main>
  );
}
