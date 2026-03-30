function Navbar({ cartCount, openCart }) {
  return (
    <div className="flex justify-between items-center bg-black text-white p-4">
      <h1 className="text-xl font-bold">My Store</h1>

      <button 
        onClick={openCart}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Cart ({cartCount})
      </button>
    </div>
  );
}

export default Navbar;