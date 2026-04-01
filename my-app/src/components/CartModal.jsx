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
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>

        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <p className="text-sm">{item.title}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}

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