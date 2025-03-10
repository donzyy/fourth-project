import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsChevronDown,
  BsJustify,
  BsX,
  BsSearch,
  BsTelephone,
  BsEnvelope,
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsGlobe,
} from "react-icons/bs";
import {
  Popover,
  Transition,
  TransitionChild,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import MegaMenu from "./MegaMenu";
import Data from "../data";

function Header() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

  useEffect(() => {
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
  };

  const categories = Data.categories;
  const featuredProducts = [
    {
      name: "ACU Camo Military Uniforms",
      href: "/products/acu-camo-military-uniform",
      imageSrc:
        "https://www.corhunter-garment.com/uploads/202337095/small/acu-military-uniform7366b4a7-b5f9-4a14-bc6d-3b09569c915d.jpg",
      imageAlt: "ACU Camo Military Uniforms",
    },
    {
      name: "Frog Suit G2 Military Dress Uniforms",
      href: "/products/frog-suit-g2-military-dress-uniform",
      imageSrc:
        "https://www.corhunter-garment.com/uploads/202237095/small/frog-suit-g2-military-dress-uniforms21056765128.jpg",
      imageAlt: "Frog Suit G2 Military Dress Uniforms",
    },
    {
      name: "Tactical Boots",
      href: "/products/tactical-boot",
      imageSrc:
        "https://www.corhunter-garment.com/uploads/37095/list/n20240912162647415c8.jpg",
      imageAlt: "Tactical Boots",
    },
  ];

  const navigation = {
    pages: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/aboutus" },
      { name: "Contact Us", href: "/contactus" },
    ],
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "عربي", flag: "🇦🇪" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "pt", name: "Português", flag: "🇵🇹" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "vn", name: "Việt Nam", flag: "🇻🇳" },
    { code: "ru", name: "русский", flag: "🇷🇺" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200 hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Language Selector */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="flex items-center text-sm text-gray-600 hover:text-indigo-600 focus:outline-none">
                    <BsGlobe className="mr-1 h-4 w-4" />
                    <span>Language</span>
                    <BsChevronDown
                      className={`ml-1 h-3 w-3 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </PopoverButton>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel className="absolute z-[101] left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1 max-h-96 overflow-y-auto">
                        {languages.map((language) => (
                          <a
                            key={language.code}
                            href={`#${language.code}`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <span className="mr-2">{language.flag}</span>
                            {language.name}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>

            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <a
                href="tel:+8613377883692"
                className="text-sm text-gray-600 hover:text-indigo-600 flex items-center"
              >
                <BsTelephone className="mr-1 h-3 w-3" />
                <span>+8613377883692</span>
              </a>
              <a
                href="mailto:sara@whvison.cn"
                className="text-sm text-gray-600 hover:text-indigo-600 flex items-center"
              >
                <BsEnvelope className="mr-1 h-3 w-3" />
                <span>sara@whvison.cn</span>
              </a>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/corhuntertacticalgear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <BsFacebook size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/company/corhuntergarment/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <BsLinkedin size={16} />
                </a>
                <a
                  href="https://www.youtube.com/@corhuntermilitaryuniformst2062/featured"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-indigo-600 transition-colors"
                >
                  <BsYoutube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="/Media/Taurean IT Logo1_vectorized.png"
                alt="Corhunter Garment"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="text-base font-medium text-gray-700 hover:text-indigo-600"
              >
                Home
              </Link>

              {/* Mega Menu Component - Desktop */}
              <MegaMenu
                categories={categories}
                featuredProducts={featuredProducts}
                scrolled={scrolled}
              />
              {navigation.pages.slice(1).map((page) =>
                page.hasSubmenu ? (
                  <Popover key={page.name} className="relative">
                    {({ open }) => (
                      <>
                        <PopoverButton
                          className={`flex items-center text-base font-medium focus:outline-none ${
                            open
                              ? "text-indigo-600"
                              : "text-gray-700 hover:text-indigo-600"
                          }`}
                        >
                          <span>{page.name}</span>
                          <BsChevronDown
                            className={`ml-1 h-4 w-4 transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </PopoverButton>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <PopoverPanel className="absolute left-0 z-10 mt-3 w-screen max-w-xs transform px-2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {page.submenu.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </PopoverPanel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="text-base font-medium text-gray-700 hover:text-indigo-600"
                  >
                    {page.name}
                  </Link>
                )
              )}
            </nav>

            {/* Search and CTA */}
            <div className="hidden lg:flex items-center space-x-4">
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
                to="/quote"
                className="py-2 px-5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition duration-200"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-500 hover:text-indigo-600 focus:outline-none"
              >
                <BsSearch size={20} />
              </button>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="p-2 text-gray-500 hover:text-indigo-600 focus:outline-none"
              >
                <BsJustify size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pb-4 lg:hidden overflow-hidden"
              >
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu */}
      <Transition show={open} as={Fragment}>
        <div className="relative z-50 lg:hidden">
          {/* Background overlay */}
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onClick={() => setOpen(false)}
            />
          </TransitionChild>

          {/* Sliding menu panel */}
          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="fixed inset-y-0 left-0 flex max-w-xs w-full">
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <BsX className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-10 w-auto"
                      src="/Media/Taurean IT Logo1_vectorized.png"
                      alt="Corhunter Garment"
                    />
                  </div>
                  <div className="mt-5 px-2 space-y-1">
                    <Link
                      to="/"
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                      onClick={() => setOpen(false)}
                    >
                      Home
                    </Link>

                    {/* Products Menu */}
                    <div>
                      <button
                        onClick={() =>
                          setActiveMobileSubmenu(
                            activeMobileSubmenu === "products"
                              ? null
                              : "products"
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                      >
                        <span>Products</span>
                        <BsChevronDown
                          className={`h-4 w-4 transition-transform ${
                            activeMobileSubmenu === "products"
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Mega Menu Component - Mobile */}
                      <MegaMenu
                        categories={categories}
                        featuredProducts={featuredProducts}
                        isMobile={true}
                        isOpen={activeMobileSubmenu === "products"}
                        onClose={() => setOpen(false)}
                      />
                    </div>

                    {/* Other Navigation Items */}
                    {navigation.pages.slice(1).map((page) => (
                      <div key={page.name}>
                        {page.hasSubmenu ? (
                          <div>
                            <button
                              onClick={() =>
                                setActiveMobileSubmenu(
                                  activeMobileSubmenu === page.name
                                    ? null
                                    : page.name
                                )
                              }
                              className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                            >
                              <span>{page.name}</span>
                              <BsChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  activeMobileSubmenu === page.name
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            {activeMobileSubmenu === page.name && (
                              <div className="mt-2 pl-4 space-y-1">
                                {page.submenu.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href}
                                    className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                                    onClick={() => setOpen(false)}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={page.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                            onClick={() => setOpen(false)}
                          >
                            {page.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <a
                      href="https://www.facebook.com/corhuntertacticalgear/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      <BsFacebook size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/corhuntergarment/about/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      <BsLinkedin size={18} />
                    </a>
                    <a
                      href="https://www.youtube.com/@corhuntermilitaryuniformst2062/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      <BsYoutube size={18} />
                    </a>
                  </div>
                  <div className="mt-4">
                    <Link
                      to="/inquiry"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      onClick={() => setOpen(false)}
                    >
                      Request Inquiry
                    </Link>
                  </div>
                  <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                    <a href="tel:+8613377883692" className="flex items-center">
                      <BsTelephone className="mr-2 h-4 w-4 text-gray-400" />
                      +8613377883692
                    </a>
                    <a
                      href="mailto:sara@whvison.cn"
                      className="flex items-center"
                    >
                      <BsEnvelope className="mr-2 h-4 w-4 text-gray-400" />
                      sara@whvison.cn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Transition>
    </>
  );
}

export default Header;
