"use client";
import { useContext } from "react";
import { CartContext, CartProvider } from "./cart";

const ProductList = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext must be used within CartProvider");
  const { addToCart } = context;

  const products = [
    { id: 1, name: "Apple", price: 20 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Orange", price: 15 },
  ];

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Products</h3>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>
            {product.name} Rs{product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            style={{ marginLeft: "10px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

const Cart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext must be used within CartProvider");
  const { cart, removeFromCart, totalPrice } = context;

  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart.length === 0 && <p>The cart is empty.</p>}
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span>
            {item.name} (x{item.qty}) - Rs{(item.price * item.qty).toFixed(2)}
          </span>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </button>
        </div>
      ))}
      <h4>Total: Rs{totalPrice.toFixed(2)}</h4>
    </div>
  );
};

export default function Page() {
  return (
    <CartProvider>
      <div
        style={{
          padding: "20px",
          maxWidth: "400px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h2>Shopping Cart</h2>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
