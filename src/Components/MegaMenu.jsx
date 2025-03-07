import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { BsChevronDown, BsChevronRight, BsArrowRight } from "react-icons/bs";

const MegaMenu = ({
  categories,
  featuredProducts,
  isMobile = false,
  isOpen = false,
  onClose = () => {},
  activeMobileSubmenu = null,
  setActiveMobileSubmenu = () => {},
  scrolled = false, // Default to false if not provided
}) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle hover events for desktop menu
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Mobile version
  if (isMobile) {
    return (
      <div className={`${isOpen ? "block" : "hidden"} mt-2 pl-4 space-y-1`}>
        <Link
          to="/products"
          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
          onClick={onClose}
        >
          All Products
        </Link>

        {categories.map((category) => (
          <div key={category.id} className="py-1">
            <button
              onClick={() =>
                setActiveCategory(
                  activeCategory === category.id ? null : category.id
                )
              }
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
            >
              <span>{category.name}</span>
              {category.subcategories.length > 0 && (
                <BsChevronRight
                  className={`h-4 w-4 transition-transform ${
                    activeCategory === category.id ? "rotate-90" : ""
                  }`}
                />
              )}
            </button>
            {activeCategory === category.id &&
              category.subcategories.length > 0 && (
                <div className="mt-1 pl-4 space-y-1 bg-gray-50 rounded-md py-2 shadow">
                  {category.subcategories.map((subcategory, index) => (
                    <Link
                      key={index}
                      to={`/products?category=${encodeURIComponent(
                        category.name
                      )}&subcategory=${encodeURIComponent(subcategory)}`}
                      className="block px-3 py-2 text-sm text-gray-500 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
                      onClick={onClose}
                    >
                      {subcategory}
                    </Link>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    );
  }

  // Desktop version with hover functionality
  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
    >
      <div className="flex items-center">
        <Link
          to="/products"
          className="text-base font-medium text-gray-700 hover:text-indigo-600 mr-1"
        >
          Products
        </Link>
        <BsChevronDown
          className={`h-4 w-4 transition-transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <Transition
        show={isMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`fixed inset-x-0 z-40 bg-white shadow-xl ${
            scrolled ? "top-[58.5px]" : "top-[99px]"
          }`}
          style={{
            transition: "top 0.3s ease-in-out",
          }}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Categories (3 columns) */}
              <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="group relative p-4 rounded-lg bg-white  hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {/* Column 1: Category Image */}
                      <div className="flex-shrink-0">
                        <div className="h-full w-full overflow-hidden rounded-md border border-gray-200 shadow-sm">
                          <img
                            src={
                              category.image ||
                              "/placeholder.svg?height=40&width=40" ||
                              "/placeholder.svg" ||
                              "/placeholder.svg"
                            }
                            alt={category.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>

                      {/* Column 2: Category Name and Subcategories */}
                      <div>
                        <Link
                          to={`/products?category=${encodeURIComponent(
                            category.name
                          )}`}
                          className="text-base font-medium text-gray-900 hover:text-indigo-600"
                        >
                          {category.name}
                        </Link>

                        {category.subcategories.length > 0 && (
                          <ul className="mt-2 space-y-1">
                            {category.subcategories.map(
                              (subcategory, index) => (
                                <li key={index}>
                                  <Link
                                    to={`/products?category=${encodeURIComponent(
                                      category.name
                                    )}&subcategory=${encodeURIComponent(
                                      subcategory
                                    )}`}
                                    className="text-sm text-gray-500 hover:text-indigo-600 transition-colors duration-200"
                                  >
                                    {subcategory}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Products (1 column) */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-base font-medium text-gray-900 mb-4">
                  Featured Products
                </h3>
                <div className="space-y-4">
                  {featuredProducts.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="group flex items-center gap-3 rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 shadow-sm hover:shadow"
                    >
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-sm">
                        <img
                          src={
                            product.imageSrc ||
                            "/placeholder.svg?height=64&width=64" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg"
                          }
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 group-hover:text-indigo-600">
                          {product.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    to="/products"
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 hover:shadow-md transition-all duration-200"
                  >
                    View All Products
                    <BsArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default MegaMenu;
