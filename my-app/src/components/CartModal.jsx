function CartModal({ cart, close, removeFromCart }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={close}
    >
      <div
        className="bg-white p-5 rounded w-96 max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4 text-center">
          Cart Items
        </h2>

        {cart.length === 0 ? (
          <p className="text-center">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 mb-4 border-b pb-2"
            >
              {/* 🔥 IMAGE */}
              <img
                src={item.thumbnail || item.image}
                alt={item.title}
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50";
                }}
              />

              {/* 🔥 TITLE */}
              <p className="text-sm flex-1">
                {item.title}
              </p>

              {/* 🔥 REMOVE BUTTON */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}

        {/* CLOSE BUTTON */}
        <button
          onClick={close}
          className="bg-gray-700 text-white w-full mt-4 p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default CartModal;