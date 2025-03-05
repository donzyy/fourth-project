"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BsChevronDown,
  BsJustify,
  BsX,
  BsSearch,
  BsArrowRight,
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
} from "react-icons/bs";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";

function Header() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality or redirect to search page
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

  const featuredProducts = [
    {
      name: "ACU Camo Military Uniforms",
      href: "/products/acu-camo-military-uniforms",
      imageSrc:
        "https://www.corhunter-garment.com/uploads/202337095/small/acu-military-uniform7366b4a7-b5f9-4a14-bc6d-3b09569c915d.jpg",
      imageAlt: "ACU Camo Military Uniforms",
    },
    {
      name: "Frog Suit G2 Military Dress Uniforms",
      href: "/products/frog-suit-g2-military-dress-uniforms",
      imageSrc:
        "https://www.corhunter-garment.com/uploads/202237095/small/frog-suit-g2-military-dress-uniforms21056765128.jpg",
      imageAlt: "Frog Suit G2 Military Dress Uniforms",
    },
  ];

  const navigation = {
    pages: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/aboutus" },
      { name: "Contact Us", href: "/contactus" },
    ],
  };

  return (
    <section
      className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="border-b border-gray-100 w-full z-100">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-4">
            <Link to={"/"}>
              <img
                className="h-12"
                src="/Media/Taurean IT Logo1_vectorized.png"
                alt="Corhunter Garment"
              />
            </Link>
            <ul className="hidden lg:flex items-center gap-8 relative">
              {navigation.pages.map((page) => (
                <li
                  key={page.name}
                  className="hover:text-indigo-600 transition duration-200"
                >
                  <Link to={page.href}>{page.name}</Link>
                </li>
              ))}
              <li>
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition duration-200">
                    <span>Products</span>
                    <BsChevronDown size={16} />
                  </PopoverButton>

                  <PopoverPanel className="fixed inset-0 top-16 z-100 text-sm text-gray-500 rounded-sm bg-white mt-4 mx-2 shadow-lg">
                    <div className="mx-auto max-w-screen-xl px-4 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Categories (2 columns) */}
                        <div className="col-span-2 grid grid-cols-2 gap-8">
                          <div>
                            <p className="font-medium text-gray-900 text-xl mb-4 pb-2 border-b">
                              Product Categories
                            </p>
                            <ul className="mt-4 space-y-3">
                              {categories.slice(0, 4).map((category) => (
                                <li key={category.id} className="group">
                                  <Link
                                    to={`/products?category=${encodeURIComponent(
                                      category.name
                                    )}`}
                                    className="hover:text-indigo-600 transition duration-200 font-medium"
                                  >
                                    {category.name}
                                  </Link>
                                  {category.subcategories.length > 0 && (
                                    <ul className="ml-4 mt-2 space-y-1">
                                      {category.subcategories.map(
                                        (subcategory, index) => (
                                          <li key={index}>
                                            <Link
                                              to={`/products?category=${encodeURIComponent(
                                                category.name
                                              )}&subcategory=${encodeURIComponent(
                                                subcategory
                                              )}`}
                                              className="text-gray-500 hover:text-indigo-600 transition duration-200 text-sm"
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
                          <div>
                            <p className="font-medium text-gray-900 text-xl mb-4 pb-2 border-b">
                              More Categories
                            </p>
                            <ul className="mt-4 space-y-3">
                              {categories.slice(4).map((category) => (
                                <li key={category.id} className="group">
                                  <Link
                                    to={`/products?category=${encodeURIComponent(
                                      category.name
                                    )}`}
                                    className="hover:text-indigo-600 transition duration-200 font-medium"
                                  >
                                    {category.name}
                                  </Link>
                                  {category.subcategories.length > 0 && (
                                    <ul className="ml-4 mt-2 space-y-1">
                                      {category.subcategories.map(
                                        (subcategory, index) => (
                                          <li key={index}>
                                            <Link
                                              to={`/products?category=${encodeURIComponent(
                                                category.name
                                              )}&subcategory=${encodeURIComponent(
                                                subcategory
                                              )}`}
                                              className="text-gray-500 hover:text-indigo-600 transition duration-200 text-sm"
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

                        {/* Featured Products */}
                        <div className="col-span-1">
                          <p className="font-medium text-gray-900 text-xl mb-4 pb-2 border-b">
                            Featured Products
                          </p>
                          <div className="space-y-4 mt-4">
                            {featuredProducts.map((product) => (
                              <Link
                                key={product.name}
                                to={product.href}
                                className="group flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition duration-150"
                              >
                                <div className="flex-shrink-0 h-16 w-16 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc || "/placeholder.svg"}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-gray-900 truncate group-hover:text-indigo-600">
                                    {product.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                            <Link
                              to="/products"
                              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mt-2"
                            >
                              <span>View all products</span>
                              <BsArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-span-1">
                          <p className="font-medium text-gray-900 text-xl mb-4 pb-2 border-b">
                            Contact Us
                          </p>
                          <div className="space-y-3 mt-4">
                            <div className="flex items-start space-x-3">
                              <BsTelephone className="h-5 w-5 text-indigo-600 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  Phone
                                </p>
                                <p className="text-sm text-gray-500">
                                  +8613377883692
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <BsEnvelope className="h-5 w-5 text-indigo-600 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  Email
                                </p>
                                <a
                                  href="mailto:sara@whvison.cn"
                                  className="text-sm text-indigo-600 hover:text-indigo-800"
                                >
                                  sara@whvison.cn
                                </a>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <BsGeoAlt className="h-5 w-5 text-indigo-600 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  Address
                                </p>
                                <p className="text-sm text-gray-500">
                                  Room A404, Building 2, Huifeng Corporate
                                  Headquarters, Qiaokou District, Wuhan City,
                                  China
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              </li>
            </ul>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center gap-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="py-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm w-48 transition-all duration-300 focus:w-64"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600"
                >
                  <BsSearch size={16} />
                </button>
              </form>
              <Link
                className="py-2 px-5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200"
                to="/quote"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Menu Button and Search Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-400 hover:text-indigo-600"
              >
                <BsSearch size={20} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <BsJustify className="text-indigo-600 rounded" size={28} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar - Expandable */}
          {isSearchOpen && (
            <div className="pb-4 lg:hidden">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600"
                >
                  <BsSearch size={16} />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-50 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <BsX size={30} />
              </button>
            </div>

            {/* Search in Mobile Menu */}
            <div className="px-4 py-2 mt-8">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-600"
                >
                  <BsSearch size={16} />
                </button>
              </form>
            </div>

            {/* Mobile Navigation */}
            <div className="mt-2 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="py-2">
                  <Link
                    to={page.href}
                    className="block font-medium text-gray-900 hover:text-indigo-600 transition duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {page.name}
                  </Link>
                </div>
              ))}

              {/* Products Dropdown in Mobile */}
              <div className="py-2">
                <div
                  className="flex items-center justify-between font-medium text-gray-900 cursor-pointer"
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === "products" ? null : "products"
                    )
                  }
                >
                  <span>Products</span>
                  {activeCategory === "products" ? (
                    <BsChevronDown size={16} />
                  ) : (
                    <BsChevronDown size={16} className="transform -rotate-90" />
                  )}
                </div>

                {activeCategory === "products" && (
                  <div className="mt-2 ml-4 space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="py-1">
                        <div
                          className="flex items-center justify-between text-gray-700 cursor-pointer"
                          onClick={() =>
                            setActiveCategory(
                              activeCategory === category.id
                                ? "products"
                                : category.id
                            )
                          }
                        >
                          <Link
                            to={`/products?category=${encodeURIComponent(
                              category.name
                            )}`}
                            className="hover:text-indigo-600 transition duration-200"
                            onClick={() => setOpen(false)}
                          >
                            {category.name}
                          </Link>
                          {category.subcategories.length > 0 &&
                            (activeCategory === category.id ? (
                              <BsChevronDown size={14} />
                            ) : (
                              <BsChevronDown
                                size={14}
                                className="transform -rotate-90"
                              />
                            ))}
                        </div>

                        {activeCategory === category.id &&
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
                                      className="text-gray-500 hover:text-indigo-600 transition duration-200 text-sm"
                                      onClick={() => setOpen(false)}
                                    >
                                      {subcategory}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                      </div>
                    ))}
                    <div className="pt-2">
                      <Link
                        to="/products"
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                        onClick={() => setOpen(false)}
                      >
                        View all products
                        <BsArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <Link
                to="/quote"
                className="block text-center py-3 px-5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200"
                onClick={() => setOpen(false)}
              >
                Get A Quote
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}

export default Header;
