import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BsSearch,
  BsCart,
  BsFilter,
  BsChevronDown,
  BsChevronRight,
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  BsX,
} from "react-icons/bs";
import DefaultLayout from "../../Layout/DefaultLayout";

function Products() {
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const categories = [
    {
      id: 1,
      name: "Military Combat Uniform",
      subcategories: [
        "ACU uniform",
        "BDU uniform",
        "Frog Suit",
        "Military Jacket",
      ],
    },
    {
      id: 2,
      name: "Tactical Uniform",
      subcategories: [
        "Tactical Suit",
        "Tactical Shirt",
        "Military Tactical Pants",
        "Camouflage Clothing",
      ],
    },
    {
      id: 3,
      name: "Security Uniform",
      subcategories: [
        "Security Officer Uniform",
        "Security Tactical jacket",
        "Reflective Clothing",
      ],
    },
    {
      id: 4,
      name: "Military Beret & Cap & Hat",
      subcategories: ["Beret", "Cap", "Hat"],
    },
    {
      id: 5,
      name: "Military Bags",
      subcategories: ["Backpack"],
    },
    {
      id: 6,
      name: "Tactical Boots",
      subcategories: [],
    },
    {
      id: 7,
      name: "Bulletproof Equipment",
      subcategories: ["Bulletproof Helmet", "Bulletproof Vest"],
    },
    {
      id: 8,
      name: "Tactical Gears",
      subcategories: [
        "Tactical Glasses",
        "Tactical Gloves",
        "Tactical Belt",
        "Protective Gear Kneepad",
      ],
    },
  ];

  const products = [
    {
      id: 1,
      name: "ACU Camo Military Uniforms",
      image:
        "https://www.corhunter-garment.com/uploads/202337095/small/acu-military-uniform7366b4a7-b5f9-4a14-bc6d-3b09569c915d.jpg",
      category: "Military Combat Uniform",
      subcategory: "ACU uniform",
      description:
        "Customization: Min. Order: 500 Sets. Material: 65% Polyester 35% Cotton. Feature: Ripstop.",
      url: "/products/acu-camo-military-uniforms",
    },
    {
      id: 2,
      name: "BDU Military Uniform",
      image:
        "https://www.corhunter-garment.com/uploads/202237095/small/bdu-military-uniform58106687049.jpg",
      category: "Military Combat Uniform",
      subcategory: "BDU uniform",
      description:
        "65% polyester and 35% cotton, plaid camouflage, light, durable, breathable, protective",
      url: "/products/bdu-military-uniform",
    },
    {
      id: 3,
      name: "Frog Suit G2 Military Dress Uniforms",
      image:
        "https://www.corhunter-garment.com/uploads/202237095/small/frog-suit-g2-military-dress-uniforms21056765128.jpg",
      category: "Military Combat Uniform",
      subcategory: "Frog Suit",
      description:
        "Customization: Min. Order: 1000 Sets. Material: 65% Polyester 35% Cotton. Feature: Anti-Static.",
      url: "/products/frog-suit-g2-military-dress-uniforms",
    },
    {
      id: 4,
      name: "ACU Camouflage Combat Uniforms",
      image:
        "https://www.corhunter-garment.com/uploads/202337095/small/acu-camouflage-combat-uniforms-tc65-35-fabric78a70e99-1fdf-42ea-b456-15c85fdb6521.jpg",
      category: "Military Combat Uniform",
      subcategory: "ACU uniform",
      description:
        "Customization: Min. Order: 1000 Sets. Material: 65% Polyester 35% Cotton. Feature: Breathable.",
      url: "/products/acu-camouflage-combat-uniforms",
    },
    {
      id: 5,
      name: "ACU Digital Ocean Camouflage Uniforms",
      image:
        "https://www.corhunter-garment.com/uploads/202337095/small/acu-digital-ocean-camouflage-uniforms6ac2c9a1-81f8-4273-b6c2-e1e3d8727d54.jpg",
      category: "Military Combat Uniform",
      subcategory: "ACU uniform",
      description:
        "Customization: Min. Order: 1000 Sets. Material: 65% Polyester 35% Cotton. Feature: Breathability.",
      url: "/products/acu-digital-ocean-camouflage-uniforms",
    },
    {
      id: 6,
      name: "Custom Black Python Camouflage ACU Uniform",
      image:
        "https://www.corhunter-garment.com/uploads/202337095/small/custom-black-python-camouflage-acu-uniform88317719-8e1b-407d-8286-d5038cdcb922.jpg",
      subcategory: "ACU uniform",
      description:
        "Customization: Min. Order: 1000 Sets. Material: 65% Polyester 35% Cotton. Feature: Durable.",
      url: "/products/custom-black-python-camouflage-acu-uniform",
    },
    {
      id: 7,
      name: "In Stock ACU Uniform Digital Jungle Camouflage",
      image:
        "https://www.corhunter-garment.com/uploads/202337095/small/in-stock-acu-uniform-digital-jungle272109db-3d8f-4bdd-adf5-38da06afd89c.jpg",
      category: "Military Combat Uniform",
      subcategory: "ACU uniform",
      description:
        "Customization: Min. Order: 1000 Sets. Material: 65% Polyester 35% Cotton. Feature: Waterproof.",
      url: "/products/in-stock-acu-uniform-digital-jungle",
    },
    {
      id: 8,
      name: "G3 Outdoor Training Frog Suit Physical Fitness Uniform",
      image:
        "https://www.corhunter-garment.com/uploads/37095/small/g3-outdoor-training-frog-suit-physicalfb262.jpg",
      category: "Military Combat Uniform",
      subcategory: "Frog Suit",
      description:
        "Camouflage tactical frog suit, made of elastic fabric, breathable and skin-friendly, soft and comfortable.",
      url: "/products/g3-outdoor-training-frog-suit-physical",
    },
    {
      id: 9,
      name: "Python Pattern Camouflage Long-sleeved Soldier Outdoor Frog Uniform",
      image:
        "https://www.corhunter-garment.com/uploads/37095/small/desert-python-pattern-camouflage-long-sleeved5c8de.jpg",
      category: "Military Combat Uniform",
      subcategory: "Frog Suit",
      description:
        "Camouflage tactical frog suit, made of elastic fabric, breathable and skin-friendly, soft and comfortable.",
      url: "/products/desert-python-pattern-camouflage-long-sleeved",
    },
  ];

  const latestProducts = products.slice(0, 4);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const productsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Mobile filter dialog */}
        <div
          className={`fixed inset-0 flex z-40 lg:hidden ${
            mobileFiltersOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={() => setMobileFiltersOpen(false)}
          ></div>

          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition-all transform ease-in-out duration-300">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                onClick={() => setMobileFiltersOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <BsX className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile filters */}
            <div className="mt-4 border-t border-gray-200">
              <div className="px-4 py-6">
                <h3 className="font-medium text-gray-900">Categories</h3>
                <ul className="mt-4 space-y-4">
                  {categories.map((category) => (
                    <li key={category.id} className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Link
                          to={`/products?category=${encodeURIComponent(
                            category.name
                          )}`}
                          className="text-gray-600 hover:text-indigo-600"
                        >
                          {category.name}
                        </Link>
                        {category.subcategories.length > 0 && (
                          <button
                            onClick={() => toggleCategory(category.name)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            {activeCategory === category.name ? (
                              <BsChevronDown size={16} />
                            ) : (
                              <BsChevronRight size={16} />
                            )}
                          </button>
                        )}
                      </div>

                      {activeCategory === category.name &&
                        category.subcategories.length > 0 && (
                          <ul className="ml-4 space-y-2">
                            {category.subcategories.map(
                              (subcategory, index) => (
                                <li key={index}>
                                  <Link
                                    to={`/products?category=${encodeURIComponent(
                                      category.name
                                    )}&subcategory=${encodeURIComponent(
                                      subcategory
                                    )}`}
                                    className="text-gray-500 hover:text-indigo-600"
                                  >
                                    {subcategory}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="font-medium flex items-center">
                  <BsFilter className="w-5 h-5 mr-2" /> Filters
                </span>
                <BsChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileFiltersOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Sidebar */}
            <aside
              className={`lg:w-1/4 ${
                mobileFiltersOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="sticky top-8 space-y-6">
                {/* Search */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <BsSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
                    Categories
                  </h2>
                  <ul className="space-y-1">
                    {categories.map((category) => (
                      <li key={category.id} className="py-1">
                        <div
                          className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors"
                          onClick={() => toggleCategory(category.name)}
                        >
                          <span className="font-medium">{category.name}</span>
                          {category.subcategories.length > 0 &&
                            (activeCategory === category.name ? (
                              <BsChevronDown className="h-4 w-4" />
                            ) : (
                              <BsChevronRight className="h-4 w-4" />
                            ))}
                        </div>

                        {activeCategory === category.name &&
                          category.subcategories.length > 0 && (
                            <ul className="ml-4 mt-1 space-y-1">
                              {category.subcategories.map(
                                (subcategory, index) => (
                                  <li key={index} className="py-1">
                                    <Link
                                      to={`/products?category=${encodeURIComponent(
                                        category.name
                                      )}&subcategory=${encodeURIComponent(
                                        subcategory
                                      )}`}
                                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                                    >
                                      {subcategory}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Latest Products */}
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

                {/* Contact Us */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
                    Contact Us
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <BsTelephone className="w-4 h-4 mt-1 mr-2 text-indigo-600 flex-shrink-0" />
                      <span>+8613377883692</span>
                    </div>
                    <div className="flex items-start">
                      <BsEnvelope className="w-4 h-4 mt-1 mr-2 text-indigo-600 flex-shrink-0" />
                      <a
                        href="mailto:sara@whvison.cn"
                        className="text-indigo-600 hover:underline"
                      >
                        sara@whvison.cn
                      </a>
                    </div>
                    <div className="flex items-start">
                      <BsGeoAlt className="w-4 h-4 mt-1 mr-2 text-indigo-600 flex-shrink-0" />
                      <span>
                        Room A404, Building 2, Huifeng Corporate Headquarters,
                        Qiaokou District, Wuhan City, Hubei Province, China
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Our Products
                </h1>
                <p className="text-gray-600">
                  Browse our extensive collection of military and tactical
                  equipment. With over 15 years of experience, we specialize in
                  high-quality military uniforms, tactical gear, and customized
                  solutions.
                </p>
              </div>

              {/* Products Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {currentProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <Link to={product.url} className="block">
                      <div className="relative w-full pb-[100%] overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          src={product.image || "/placeholder.jpg"}
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 text-gray-900 overflow-hidden text-ellipsis line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 overflow-hidden text-ellipsis line-clamp-3">
                          {product.description}
                        </p>
                        <div className="flex justify-between items-start gap-2 flex-col">
                          <span className="text-xs text-gray-500">
                            {product.subcategory}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors"
                          >
                            <span>Add to Inquiry</span>
                            <BsCart className="ml-1 h-4 w-4" />
                          </motion.button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center space-x-1">
                    <button
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      First
                    </button>

                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      // Show pages around current page
                      let pageNum = i + 1;
                      if (totalPages > 5) {
                        if (currentPage > 3) {
                          pageNum = currentPage - 3 + i;
                        }
                        if (pageNum > totalPages) {
                          pageNum = totalPages - (4 - i);
                        }
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-1 rounded-md ${
                            currentPage === pageNum
                              ? "bg-indigo-600 text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => setCurrentPage(totalPages)}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      Last
                    </button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Products;
