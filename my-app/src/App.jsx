import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartModal from "./components/CartModal";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load cart
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch products
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} openCart={() => setShowModal(true)} />

      <div className="max-w-7xl mx-auto p-5">
        {loading ? (
          <h1 className="text-center text-xl">Loading...</h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
            {products.map(product => (
              <div key={product.id} className="h-full">
                <ProductCard 
                  product={product}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <CartModal 
          cart={cart}
          close={() => setShowModal(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </>
    
  );
}

export default App;