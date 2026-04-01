function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded shadow flex flex-col">

      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 object-contain mx-auto"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/150";
        }}
      />

      <h2 className="text-sm font-semibold mt-2">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold">
        ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-500 text-white mt-3 p-2 rounded"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;