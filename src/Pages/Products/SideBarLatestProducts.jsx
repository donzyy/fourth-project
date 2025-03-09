import React from 'react'

function SideBarLatestProducts({product, latestProducts}) {

  
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
    <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
      Latest Products
    </h2>
    <div className="grid grid-cols-2 gap-2">
      {latestProducts.map((product) => (
        <Link
          key={product.id}
          to={product.url}
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
  )
}

export default SideBarLatestProducts
