import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsChevronDown,
  BsShare,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsEnvelope,
  BsSend,
  BsCheck2,
} from "react-icons/bs";
import Data from "../../data";
import SideBar from "../Products/SideBar";
import DefaultLayout from "../../Layout/DefaultLayout";

export default function ProductPage() {
  const { productSlug } = useParams();
  const [categories, setCategories] = useState(Data.categories || []);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(Data.products || []);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const latestProducts = products.slice(0, 4);

  const [activeImage, setActiveImage] = useState(0);
  const thumbnailsRef = useRef(null);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const zoomRef = useRef(null);

  // Fetch product data and related products
  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      setIsLoading(true);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const foundProduct = products.find((p) => p.slug === productSlug);

      if (foundProduct) {
        setProduct(foundProduct);

        // Filter related products by matching category or subcategory
        const filtered = products
          .filter(
            (p) =>
              p.slug !== foundProduct.slug && // Exclude current product
              (p.categories[0].name === foundProduct.categories[0].name ||
                p.categories[0].subcategories[0].name ===
                  foundProduct.categories[0].subcategories[0].name)
          )
          .slice(0, 4); // Limit to 4 items

        setRelatedProducts(filtered);
      }

      setIsLoading(false);
    };

    fetchProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productSlug, products]);

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

  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = direction === "next" ? 200 : -200;
      thumbnailsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone) {
      errors.phone = "Phone number is required";
    }

    if (!formData.message) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      }, 1500);
    }
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current || !zoomRef.current) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setZoomPosition({ x, y });

    zoomRef.current.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  };

  const handleMouseEnter = () => {
    if (zoomRef.current) {
      zoomRef.current.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    if (zoomRef.current) {
      zoomRef.current.style.opacity = "0";
    }
  };

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <SideBar
              showSearch={false}
              categories={categories}
              activeCategory={activeCategory}
              toggleCategory={toggleCategory}
              latestProducts={latestProducts}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {isLoading ? (
                <LoadingSpinner />
              ) : !product ? (
                <NoItemsFound />
              ) : (
                <>
                  {/* Product Overview */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Product Images */}
                      <div className="w-full md:w-1/2">
                        <div className="relative">
                          {/* Main Image */}
                          <div
                            className="aspect-square overflow-hidden rounded-lg mb-4 bg-gray-100 relative cursor-zoom-in"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            <img
                              ref={imageRef}
                              src={
                                product.images && product.images.length > 0
                                  ? product.images[activeImage]
                                  : "/placeholder.svg"
                              }
                              alt={product.name}
                              className="object-cover w-full h-full"
                              loading="lazy"
                            />
                            <div
                              ref={zoomRef}
                              className="absolute inset-0 bg-no-repeat bg-cover opacity-0 transition-opacity duration-300"
                              style={{
                                backgroundImage: `url(${
                                  product.images && product.images.length > 0
                                    ? product.images[activeImage]
                                    : "/placeholder.svg"
                                })`,
                                backgroundSize: "200%",
                              }}
                            />
                          </div>

                          {/* Thumbnails */}
                          {product.images && product.images.length > 1 && (
                            <div className="relative">
                              <button
                                onClick={() => scrollThumbnails("prev")}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                                aria-label="Previous image"
                              >
                                <BsChevronLeft size={20} />
                              </button>

                              <div
                                ref={thumbnailsRef}
                                className="flex space-x-2 overflow-x-auto py-2 px-6 scrollbar-hide"
                              >
                                {product.images.map((image, index) => (
                                  <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${
                                      activeImage === index
                                        ? "border-indigo-600"
                                        : "border-transparent"
                                    }`}
                                  >
                                    <img
                                      src={image || "/placeholder.svg"}
                                      alt={`${product.name} thumbnail ${
                                        index + 1
                                      }`}
                                      className="object-cover w-full h-full"
                                      loading="lazy"
                                    />
                                  </button>
                                ))}
                              </div>

                              <button
                                onClick={() => scrollThumbnails("next")}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                                aria-label="Next image"
                              >
                                <BsChevronRight size={20} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="w-full md:w-1/2">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          {product.name}
                        </h1>

                        {product.specifications &&
                          product.specifications.length > 0 && (
                            <div className="space-y-4 mb-6">
                              {product.specifications.map((spec, index) => (
                                <p key={index} className="text-gray-700">
                                  {spec}
                                </p>
                              ))}
                            </div>
                          )}

                        {/* Category and Subcategory */}
                        {product.categories &&
                          product.categories.length > 0 && (
                            <div className="mb-6 space-y-2">
                              <div className="flex flex-col gap-2">
                                {product.categories[0].name && (
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-gray-600">
                                      Category:
                                    </span>
                                    <Link
                                      to={`/products?category=${product.categories[0].name}`}
                                      className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800 cursor-pointer"
                                    >
                                      {product.categories[0].name}
                                    </Link>
                                  </div>
                                )}

                                {product.categories[0].subcategories &&
                                  product.categories[0].subcategories.length >
                                    0 && (
                                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                                      <span className="text-sm font-semibold text-gray-600">
                                        Subcategory:
                                      </span>
                                      <Link
                                        to={`/products?category=${product.categories[0].name}&subcategory=${product.categories[0].subcategories[0].name}`}
                                        className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800 cursor-pointer"
                                      >
                                        {
                                          product.categories[0].subcategories[0]
                                            .name
                                        }
                                      </Link>
                                    </div>
                                  )}
                              </div>
                            </div>
                          )}

                        {/* Social Share */}
                        <div className="flex space-x-3 mb-6">
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                            <BsFacebook size={18} />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-500 transition-colors">
                            <BsTwitter size={18} />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-700 transition-colors">
                            <BsLinkedin size={18} />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                            <BsEnvelope size={18} />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
                            <BsShare size={18} />
                          </button>
                        </div>

                        {/* CTA Button */}
                        <button
                          onClick={() =>
                            document
                              .getElementById("inquiry-form")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                          className="w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
                        >
                          <BsSend className="mr-2" size={18} />
                          Send Inquiry
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Product Details Tabs */}
                  <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                    <TabGroup>
                      <TabList className="flex border-b">
                        <Tab
                          className={({ selected }) =>
                            `py-4 px-6 text-base font-medium outline-none ${
                              selected
                                ? "text-indigo-600 border-b-2 border-indigo-600"
                                : "text-gray-600 hover:text-indigo-600"
                            }`
                          }
                        >
                          Description
                        </Tab>
                        {product.details &&
                          product.details.specifications &&
                          product.details.specifications.length > 0 && (
                            <Tab
                              className={({ selected }) =>
                                `py-4 px-6 text-base font-medium outline-none ${
                                  selected
                                    ? "text-indigo-600 border-b-2 border-indigo-600"
                                    : "text-gray-600 hover:text-indigo-600"
                                }`
                              }
                            >
                              Specifications
                            </Tab>
                          )}
                        {product.details &&
                          ((product.details.features &&
                            product.details.features.length > 0) ||
                            (product.details.applications &&
                              product.details.applications.length > 0)) && (
                            <Tab
                              className={({ selected }) =>
                                `py-4 px-6 text-base font-medium outline-none ${
                                  selected
                                    ? "text-indigo-600 border-b-2 border-indigo-600"
                                    : "text-gray-600 hover:text-indigo-600"
                                }`
                              }
                            >
                              Features
                            </Tab>
                          )}
                      </TabList>
                      <TabPanels>
                        {/* Description Panel */}
                        <TabPanel className="p-6">
                          <div className="prose max-w-none">
                            <p className="mb-4 text-lg">
                              {product.details && product.details.description
                                ? product.details.description
                                : product.description}
                            </p>
                          </div>

                          {/* Product Detail Images */}
                          {product.details &&
                            product.details.detailImages &&
                            product.details.detailImages.length > 0 && (
                              <div className="mt-8">
                                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                  Details Show
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                  {product.details.detailImages.map(
                                    (image, index) => (
                                      <div key={index} className="text-center">
                                        <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                                          <img
                                            src={
                                              image.src || "/placeholder.svg"
                                            }
                                            alt={
                                              image.title ||
                                              `Detail ${index + 1}`
                                            }
                                            className="w-full h-auto"
                                          />
                                        </div>
                                        {image.title && (
                                          <p className="font-medium text-gray-800">
                                            {image.title}
                                          </p>
                                        )}
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            )}
                        </TabPanel>

                        {/* Specifications Panel */}
                        {product.details &&
                          product.details.specifications &&
                          product.details.specifications.length > 0 && (
                            <TabPanel className="p-6">
                              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                Product Specifications
                              </h3>
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                  <tbody className="divide-y divide-gray-200">
                                    {product.details.specifications.map(
                                      (spec, index) => (
                                        <tr
                                          key={index}
                                          className={
                                            index % 2 === 0
                                              ? "bg-gray-50"
                                              : "bg-white"
                                          }
                                        >
                                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                                            {spec.label}
                                          </td>
                                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                            {spec.value}
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </TabPanel>
                          )}

                        {/* Features Panel */}
                        {product.details &&
                          ((product.details.features &&
                            product.details.features.length > 0) ||
                            (product.details.applications &&
                              product.details.applications.length > 0)) && (
                            <TabPanel className="p-6">
                              <div className="space-y-8">
                                {product.details.features &&
                                  product.details.features.length > 0 && (
                                    <div>
                                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                        Key Features
                                      </h3>
                                      <ul className="space-y-2 list-disc pl-5">
                                        {product.details.features.map(
                                          (feature, index) => (
                                            <li
                                              key={index}
                                              className="text-gray-700"
                                            >
                                              {feature}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )}

                                {product.details.applications &&
                                  product.details.applications.length > 0 && (
                                    <div>
                                      <h3 className="text-xl font-semibold mb-4 text-gray-900">
                                        Applications
                                      </h3>
                                      <p className="mb-3 text-gray-700">
                                        Our {product.name} are ideal for:
                                      </p>
                                      <ul className="space-y-2 list-disc pl-5">
                                        {product.details.applications.map(
                                          (app, index) => (
                                            <li
                                              key={index}
                                              className="text-gray-700"
                                            >
                                              {app}
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  )}
                              </div>
                            </TabPanel>
                          )}
                      </TabPanels>
                    </TabGroup>
                  </div>

                  {product.videoUrl && (
                    <div className="mt-8 bg-white rounded-lg shadow-sm p-6 mb-6">
                      <h3 className="text-xl font-semibold mb-6 text-gray-900">
                        Product Video
                      </h3>

                      <div className="rounded-lg overflow-hidden h-[30rem]">
                        <iframe
                          src={product.videoUrl}
                          className="w-full h-full"
                          title="Product Video"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}

                  {/* Inquiry Form */}
                  <div
                    id="inquiry-form"
                    className="bg-white rounded-lg shadow-sm p-6 mb-6"
                  >
                    <h2 className="text-xl font-semibold mb-6 text-gray-900">
                      Send Inquiry
                    </h2>

                    {isSubmitted ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <BsCheck2 className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Inquiry Sent Successfully!
                        </h3>
                        <p className="text-gray-600">
                          Thank you for your inquiry. Our team will get back to
                          you as soon as possible.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              formErrors.email
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                            placeholder="Your email address"
                          />
                          {formErrors.email && (
                            <p className="mt-1 text-sm text-red-500">
                              {formErrors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Phone/WhatsApp{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              formErrors.phone
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                            placeholder="Your phone number"
                          />
                          {formErrors.phone && (
                            <p className="mt-1 text-sm text-red-500">
                              {formErrors.phone}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                            placeholder="Your company name (optional)"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Message <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={5}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              formErrors.message
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                            placeholder="Please provide details about your inquiry, such as product specifications, quantity, and any customization requirements."
                          />
                          {formErrors.message && (
                            <p className="mt-1 text-sm text-red-500">
                              {formErrors.message}
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-3 px-6 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center ${
                            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                          }`}
                        >
                          {isSubmitting ? "Sending..." : "Send Inquiry"}
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Related Products */}
                  {relatedProducts.length > 0 && (
                    <div className="bg-white rounded-lg shadow-sm p-6">
                      <h2 className="text-xl font-semibold mb-6 text-gray-900">
                        You Might Also Like
                      </h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((item, index) => (
                          <Link
                            key={index}
                            to={`/product/${item.slug}`}
                            className="group"
                          >
                            <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 aspect-square">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <h3 className="font-medium text-gray-800 group-hover:text-indigo-600 transition-colors line-clamp-2">
                              {item.name}
                            </h3>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
