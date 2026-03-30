function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition flex flex-col h-full bg-white">
      
      {/* Image */}
      <div className="h-40 flex items-center justify-center">
        <img 
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow mt-2">
        <h2 className="text-sm font-semibold">
          {product.title}
        </h2>

        <p className="text-green-600 font-bold mt-1">
          ₹{product.price}
        </p>
      </div>

      {/* Button bottom */}
      <button 
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;