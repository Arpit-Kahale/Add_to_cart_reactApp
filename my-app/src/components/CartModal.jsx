import { useEffect } from "react";

function CartModal({ cart, close, removeFromCart }) {

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={close}
    >
      <div 
        className="bg-white p-5 rounded w-96 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">🛒 Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-3">
              <p className="text-sm">{item.title}</p>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))
        )}

        <button 
          onClick={close}
          className="mt-4 w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;