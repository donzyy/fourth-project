import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { BsCart, BsEnvelope } from "react-icons/bs";
import DefaultLayout from "../../Layout/DefaultLayout";
import SideBar from "./SideBar";
import Data from "../../data";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState(Data.categories);
  //const [products, setProducts] = useState(Data.products);
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFilterLoading, setIsFilterLoading] = useState(false);

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  const categoryQuery = searchParams.get("category");
  const idQuery = searchParams.get("id");
  const subCategoryQuery = searchParams.get("subCategory");
  const nameQuery = searchParams.get("name");

  // Initial page load effect
  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (
      categoryQuery ||
      subCategoryQuery ||
      idQuery ||
      nameQuery ||
      searchQuery
    ) {
      setIsFilterLoading(true);

      // Simulate loading delay, temp till db fetch is added
      const timer = setTimeout(() => {
        setIsFilterLoading(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [categoryQuery, subCategoryQuery, idQuery, nameQuery, searchQuery]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryQuery, subCategoryQuery, idQuery, nameQuery, searchQuery]);

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
      url: "/product/acu-camo-military-uniforms",
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
      url: "/product/bdu-military-uniform",
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
      url: "/product/frog-suit-g2-military-dress-uniforms",
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
      url: "/product/acu-camouflage-combat-uniforms",
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
      url: "/product/acu-digital-ocean-camouflage-uniforms",
    },
    {
      id: 6,
      name: "Custom Black Python Camouflage ACU Uniform",
      image:
        "https://www.corhunter-garment.com/uploads/202337095/small/custom-black-python-camouflage-acu-uniform88317719-8e1b-407d-8286-d5038cdcb922.jpg",
      subcategory: "ACU uniform",
      description:
        "Customization: Min. Order: 1000 Sets. Material: 65% Polyester 35% Cotton. Feature: Durable.",
      url: "/product/custom-black-python-camouflage-acu-uniform",
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
      url: "/product/in-stock-acu-uniform-digital-jungle",
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
      url: "/product/g3-outdoor-training-frog-suit-physical",
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
      url: "/product/desert-python-pattern-camouflage-long-sleeved",
    },
  ];

  // Helper function to normalize text for searching
  const normalizeText = (text) => {
    if (!text) return "";
    return text.toLowerCase().replace(/[\s-]+/g, "");
  };

  const filteredProducts = products.filter((product) => {
    // First filter by search query if it exists
    if (searchQuery) {
      const normalizedQuery = normalizeText(searchQuery);
      const normalizedName = normalizeText(product.name);
      const normalizedDescription = normalizeText(product.description);

      if (
        !normalizedName.includes(normalizedQuery) &&
        !normalizedDescription.includes(normalizedQuery)
      ) {
        return false;
      }
    }

    // Then filter by category if it exists
    if (categoryQuery) {
      const normalizedCategoryQuery = normalizeText(categoryQuery);
      const normalizedCategory = normalizeText(product.category);

      if (normalizedCategory !== normalizedCategoryQuery) {
        return false;
      }
    }

    // Then filter by subcategory if it exists
    if (subCategoryQuery) {
      const normalizedSubCategoryQuery = normalizeText(subCategoryQuery);
      const normalizedSubCategory = normalizeText(product.subcategory);

      if (normalizedSubCategory !== normalizedSubCategoryQuery) {
        return false;
      }
    }

    // Then filter by id if it exists
    if (idQuery && product.id !== Number.parseInt(idQuery)) {
      return false;
    }

    // Then filter by name if it exists
    if (nameQuery) {
      const normalizedNameQuery = normalizeText(nameQuery);
      const normalizedName = normalizeText(product.name);

      if (!normalizedName.includes(normalizedNameQuery)) {
        return false;
      }
    }

    return true;
  });

  const latestProducts = products.slice(0, 4);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-1">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            First
          </button>

          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Prev
            </button>
          )}

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`px-3 py-1 rounded-md ${
                currentPage === number
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 rounded-md text-gray-700 hover:bg-gray-100"
            >
              Next
            </button>
          )}

          <button
            onClick={() => handlePageChange(totalPages)}
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
        <div className="ml-4 text-sm text-gray-500 self-center">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    );
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
    </div>
  );

  // No items found component
  const NoItemsFound = () => (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        No items found
      </h3>
      <p className="text-gray-600 mb-6">
        However, we can get that for you. We specialize in custom military and
        tactical equipment. Send us an enquiry and we'll help you find exactly
        what you need.
      </p>
      <Link
        to="/contactus"
        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        <BsEnvelope className="mr-2" /> Send Enquiry
      </Link>
    </div>
  );

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar - now handles both mobile and desktop */}
              <SideBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                setSearchParams={setSearchParams}
                categories={categories}
                activeCategory={activeCategory}
                toggleCategory={toggleCategory}
                categoryQuery={categoryQuery}
                subCategoryQuery={subCategoryQuery}
                latestProducts={latestProducts}
                mobileFiltersOpen={mobileFiltersOpen}
                setMobileFiltersOpen={setMobileFiltersOpen}
              />

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Products
                  </h1>
                  <p className="text-gray-600">
                    Browse our extensive collection of military and tactical
                    equipment. With over 15 years of experience, we specialize
                    in high-quality military uniforms, tactical gear, and
                    customized solutions.
                  </p>
                </div>

                {/* Products Grid */}
                {isFilterLoading ? (
                  <LoadingSpinner />
                ) : filteredProducts.length === 0 ? (
                  <NoItemsFound />
                ) : (
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
                )}

                {/* Pagination */}
                {renderPagination()}
              </div>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Products;
