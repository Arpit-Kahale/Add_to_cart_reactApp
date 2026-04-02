function Navbar({ cartCount, openCart }) {
  return (
    <div className="sticky top-0 z-50 bg-black text-white p-4 flex justify-between items-center shadow-md">
      
      {/* 🔥 LOGO / TITLE */}
      <h1 className="text-xl font-bold">
        My Store
      </h1>

      {/* CART BUTTON */}
      <button
        onClick={openCart}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Cart ({cartCount})
      </button>

    </div>
  );
}

export default Navbar;