import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
import DefaultLayout from "../../Layout/DefaultLayout";

export default function ProductPage() {
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

  const product = {
    name: "ACU Camo Military Uniforms",
    slug: "acu-camo-military-uniforms",
    specifications: [
      "Customization: Min. Order: 500 Sets",
      "Material: 65% Polyester 35% Cotton",
      "Feature: Ripstop",
      "Type: Uniform",
      "Gender: Unisex",
      "Age Group: Adults",
    ],
    images: [
      "https://www.corhunter-garment.com/uploads/202337095/acu-military-uniform7366b4a7-b5f9-4a14-bc6d-3b09569c915d.jpg",
      "https://www.corhunter-garment.com/uploads/202337095/acu-military-uniform987bfbcb-0e6d-404f-9e40-29780115ca2c.jpg",
      "https://www.corhunter-garment.com/uploads/202337095/acu-military-uniformadbe7b5f-47fa-4e69-a366-e75a16ee819c.jpg",
      "https://www.corhunter-garment.com/uploads/202337095/acu-military-uniformc8d407ca-197b-4377-a6d3-fb255315d533.jpg",
      "https://www.corhunter-garment.com/uploads/202337095/acu-military-uniform6411fc7a-3360-4ecf-95cf-8e6dfa544458.jpg",
      "https://www.corhunter-garment.com/uploads/202337095/acu-military-uniformad2bac53-4af0-44e0-bfd1-88909c55de0c.jpg",
      "https://www.corhunter-garment.com/uploads/202337095/acu-military-uniform0124e33a-072d-4b34-a0a3-d96bf31dba29.jpg",
    ],
    videoUrl: "https://www.youtube.com/embed/dlv5AfbzBpg",
    details: {
      description: `<p class="mb-4 text-lg">Military uniforms keep you dry and comfortable throughout army training since they are windproof, lightweight, moisture perspiration, breathable, robust, and quick-drying. Besides, the fabric can be customized according to your needs.</p>`,
      specifications: [
        { label: "Material", value: "65% Polyester, 35% Cotton" },
        { label: "Camouflage Pattern", value: "ACU CP Camo" },
        { label: "Available Sizes", value: "XS-XXL" },
        { label: "Feature", value: "Rip-stop, Breathable" },
        { label: "Compliance", value: "Built To Meet Military Standards" },
      ],
      features: [
        "Durability: Made of premium ripstop fabric, these uniforms are made to withstand abrasive environments and heavy wear.",
        "Comfortable Fit: An ergonomic design and customizable features guarantee a comfortable fit, enabling mobility while on missions.",
        "Breathability: In hot areas, ventilated designs keep soldiers cool and dry.",
        "Versatile: Appropriate for a variety of military uses, from combat to training drills.",
        "Tactical Advantage: By blending in well with different terrains, the ACU CP Camo pattern improves tactical advantage.",
        "Long-lasting Performance: These uniforms continue to function properly even after extensive use, which lowers the frequency of replacement.",
      ],
      applications: [
        "Army personnel",
        "Special forces",
        "Law enforcement agencies",
        "Airsoft and paintball enthusiasts",
        "Outdoor enthusiasts and hunters",
      ],
      detailImages: [
        {
          src: "https://www.corhunter-garment.com/Content/uploads/2023897558/20231011104621bace72e46a324fc1b993a3fd4eb1bd28.png",
          title: "Velcro Collar",
        },
        {
          src: "https://www.corhunter-garment.com/Content/uploads/2023897558/2023101110463749b189cd60fa40bbad11dda14a19489d.png",
          title: "Pocket Velcro",
        },
        {
          src: "https://www.corhunter-garment.com/Content/uploads/2023897558/202310111046522eb3541d4a8741cdb32a5475b112570d.png",
          title: "Fastener Trousers Waist Design With Waist Belt Inside",
        },
        {
          src: "https://www.corhunter-garment.com/Content/uploads/2023897558/2023101110471239b4b440b0df48808edab1a72b6339a1.png",
          title: "Large Size Pocket",
        },
      ],
    },
    relatedProducts: [
      {
        name: "Long Sleeves Tricolor Military Police Security Uniform",
        slug: "long-sleeves-tricolor-military-police-security-uniform",
        image:
          "https://www.corhunter-garment.com/uploads/37095/page/small/military-police-uniform-long-sleeves-tricolor0798b.jpg?size=380x0",
      },
      {
        name: "Frog Suit G2 Military Tactical Pants",
        slug: "frog-suit-g2-military-tactical-pants",
        image:
          "https://www.corhunter-garment.com/uploads/202237095/small/frog-suit-g2-military-tactical-pants15007889540.jpg?size=380x0",
      },
      {
        name: "3D Leaf Ghillie Suit",
        slug: "3d-leaf-ghillie-suit",
        image:
          "https://www.corhunter-garment.com/uploads/202237095/small/3d-leaf-ghillie-suit55095186353.jpg?size=380x0",
      },
      {
        name: "Large Capacity Tactical Backpack 40L",
        slug: "large-capacity-tactical-backpack-40l",
        image:
          "https://www.corhunter-garment.com/uploads/202237095/small/large-capacity-tactical-backpack-40l20341817858.jpg?size=380x0",
      },
    ],
    categories: [
      {
        name: "Military Combat Uniform",
        slug: "military-combat-uniform",
        subcategories: [
          { name: "ACU uniform", slug: "acu-uniform" },
          { name: "BDU uniform", slug: "bdu-uniform" },
          { name: "Frog Suit", slug: "frog-suit" },
          { name: "Military Jacket", slug: "military-jacket" },
        ],
      },
      {
        name: "Tactical Uniform",
        slug: "tactical-uniform",
        subcategories: [
          { name: "Tactical Suit", slug: "tactical-suit" },
          { name: "Tactical Shirt", slug: "tactical-shirt" },
          { name: "Military Tactical Pants", slug: "military-tactical-pants" },
          { name: "Camouflage Clothing", slug: "camouflage-clothing" },
        ],
      },
      {
        name: "Security Uniform",
        slug: "security-uniform",
        subcategories: [
          {
            name: "Security Officer Uniform",
            slug: "security-officer-uniform",
          },
          {
            name: "Security Tactical jacket",
            slug: "security-tactical-jacket",
          },
          { name: "Reflective Clothing", slug: "reflective-clothing" },
        ],
      },
      {
        name: "Military Beret & Cap & Hat",
        slug: "military-beret-cap-hat",
        subcategories: [
          { name: "Beret", slug: "beret" },
          { name: "Cap", slug: "cap" },
          { name: "Hat", slug: "hat" },
        ],
      },
      {
        name: "Military Bags",
        slug: "military-bags",
        subcategories: [{ name: "Backpack", slug: "backpack" }],
      },
      {
        name: "Tactical Boots",
        slug: "tactical-boots",
        subcategories: [],
      },
      {
        name: "Bulletproof Equipment",
        slug: "bulletproof-equipment",
        subcategories: [
          { name: "Bulletproof Helmet", slug: "bulletproof-helmet" },
          { name: "Bulletproof Vest", slug: "bulletproof-vest" },
        ],
      },
      {
        name: "Tactical Gears",
        slug: "tactical-gears",
        subcategories: [
          { name: "Tactical Glasses", slug: "tactical-glasses" },
          { name: "Tactical Gloves", slug: "tactical-gloves" },
          { name: "Tactical Belt", slug: "tactical-belt" },
          { name: "Protective Gear Kneepad", slug: "protective-gear-kneepad" },
        ],
      },
    ],
    latestProducts: [
      {
        name: "ACU Camo Military Uniforms",
        slug: "acu-camo-military-uniforms",
        image:
          "https://www.corhunter-garment.com/uploads/202337095/small/acu-military-uniform7366b4a7-b5f9-4a14-bc6d-3b09569c915d.jpg?size=127x0",
      },
      {
        name: "BDU Military Uniform",
        slug: "bdu-military-uniform",
        image:
          "https://www.corhunter-garment.com/uploads/202237095/small/bdu-military-uniform58106687049.jpg?size=127x0",
      },
      {
        name: "ACU Camouflage Combat Uniforms",
        slug: "acu-camouflage-combat-uniforms",
        image:
          "https://www.corhunter-garment.com/uploads/202337095/small/acu-camouflage-combat-uniforms-tc65-35-fabric78a70e99-1fdf-42ea-b456-15c85fdb6521.jpg?size=127x0",
      },
      {
        name: "ACU Digital Ocean Camouflage Uniforms",
        slug: "acu-digital-ocean-camouflage-uniforms",
        image:
          "https://www.corhunter-garment.com/uploads/202337095/small/acu-digital-ocean-camouflage-uniforms6ac2c9a1-81f8-4273-b6c2-e1e3d8727d54.jpg?size=127x0",
      },
    ],
    contactInfo: {
      phone: "+8613377883692",
      email: "sara@whvison.cn",
      address:
        "Room A404, Building 2, Huifeng Corporate Headquarters, Qiaokou District, Wuhan City, Hubei Province, China",
    },
  };

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

  return (
    <DefaultLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 space-y-6 hidden md:block">
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
                  Categories
                </h2>
                <div className="space-y-1">
                  {product.categories.map((category, index) => (
                    <CategoryItem key={index} category={category} />
                  ))}
                </div>
              </div>

              {/* Latest Products */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
                  Latest Products
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {product.latestProducts.map((item, index) => (
                    <Link
                      key={index}
                      to={`/products/${item.slug}`}
                      className="block group"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-md">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
                  Contact Us
                </h2>
                <div className="space-y-3 text-sm">
                  <p className="flex">
                    <span className="font-semibold w-16">Tel:</span>
                    <a
                      href={`tel:${product.contactInfo.phone}`}
                      className="text-gray-700 hover:text-indigo-600"
                    >
                      {product.contactInfo.phone}
                    </a>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-16">E-mail:</span>
                    <a
                      href={`mailto:${product.contactInfo.email}`}
                      className="text-gray-700 hover:text-indigo-600"
                    >
                      {product.contactInfo.email}
                    </a>
                  </p>
                  <p className="flex">
                    <span className="font-semibold w-16 flex-shrink-0">
                      Address:
                    </span>
                    <span className="text-gray-700">
                      {product.contactInfo.address}
                    </span>
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
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
                            product.images[activeImage] || "/placeholder.svg"
                          }
                          alt={product.name}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                        <div
                          ref={zoomRef}
                          className="absolute inset-0 bg-no-repeat bg-cover opacity-0 transition-opacity duration-300"
                          style={{
                            backgroundImage: `url(${product.images[activeImage]})`,
                            backgroundSize: "200%",
                          }}
                        />
                      </div>

                      {/* Thumbnails */}
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
                                alt={`${product.name} thumbnail ${index + 1}`}
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
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="w-full md:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {product.name}
                    </h1>

                    <div className="space-y-4 mb-6">
                      {product.specifications.map((spec, index) => (
                        <p key={index} className="text-gray-700">
                          {spec}
                        </p>
                      ))}
                    </div>

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
                  </TabList>
                  <TabPanels>
                    {/* Description Panel */}
                    <TabPanel className="p-6">
                      <div
                        className="prose max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: product.details.description,
                        }}
                      />

                      {/* Product Detail Images */}
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-6 text-gray-900">
                          Details Show
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          {product.details.detailImages.map((image, index) => (
                            <div key={index} className="text-center">
                              <div className="bg-gray-100 rounded-lg overflow-hidden mb-3">
                                <img
                                  src={image.src || "/placeholder.svg"}
                                  alt={image.title}
                                  className="w-full h-auto"
                                />
                              </div>
                              <p className="font-medium text-gray-800">
                                {image.title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabPanel>

                    {/* Specifications Panel */}
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
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
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

                    {/* Features Panel */}
                    <TabPanel className="p-6">
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-gray-900">
                            Key Features
                          </h3>
                          <ul className="space-y-2 list-disc pl-5">
                            {product.details.features.map((feature, index) => (
                              <li key={index} className="text-gray-700">
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-gray-900">
                            Applications
                          </h3>
                          <p className="mb-3 text-gray-700">
                            Our {product.name} are ideal for:
                          </p>
                          <ul className="space-y-2 list-disc pl-5">
                            {product.details.applications.map((app, index) => (
                              <li key={index} className="text-gray-700">
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabPanel>
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
                      Thank you for your inquiry. Our team will get back to you
                      as soon as possible.
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
                        Phone/WhatsApp <span className="text-red-500">*</span>
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
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">
                  You Might Also Like
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.relatedProducts.map((item, index) => (
                    <Link
                      key={index}
                      to={`/products/${item.slug}`}
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
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

// Category Item Component with Dropdown
function CategoryItem({ category }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-1">
      <div className="flex items-center justify-between">
        <Link
          to={`/products/category/${category.slug}`}
          className="text-gray-700 hover:text-indigo-600 transition-colors py-1 flex-grow"
        >
          {category.name}
        </Link>

        {category.subcategories.length > 0 && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-gray-500 hover:text-indigo-600 focus:outline-none"
          >
            <BsChevronDown
              size={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {isOpen && category.subcategories.length > 0 && (
        <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-3">
          {category.subcategories.map((subcategory, index) => (
            <li key={index}>
              <Link
                to={`/products/category/${category.slug}/${subcategory.slug}`}
                className="text-gray-600 hover:text-indigo-600 transition-colors py-1 block"
              >
                {subcategory.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
