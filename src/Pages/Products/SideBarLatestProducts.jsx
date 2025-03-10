import { Link } from "react-router-dom";

function SideBarLatestProducts({ latestProducts = [] }) {
  // If latestProducts is not provided or empty, return null or a placeholder
  if (!latestProducts || latestProducts.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
          Latest Products
        </h2>
        <p className="text-gray-500 text-sm">No products available</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
        Latest Products
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {latestProducts.map((product, id) => (
          <Link
            key={id}
            to={`/product/${product.slug}`}
            className="block group"
          >
            <div className="relative w-full pb-[100%] overflow-hidden rounded-md">
              <img
                src={product.image || "/placeholder.jpg"}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBarLatestProducts;
