import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BsEnvelope,
  BsGeoAlt,
  BsTelephone,
  BsWhatsapp,
  BsArrowRight,
  BsCheck2Circle,
  BsFacebook,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import DefaultLayout from "../../Layout/DefaultLayout";
import Map from "../../Components/Map";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
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
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });

        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold bg-white/20 rounded-full">
              READY TO SUPPORT YOU
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Let's stay <span className="italic">connected</span>
            </h1>
            <p className="text-xl opacity-90">
              We are ready to support you 24/7 with all your military and
              tactical equipment needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                variants={itemVariants}
                className="order-2 lg:order-1"
              >
                <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <BsTelephone size={24} />
                      </div>
                      <div className="ml-6">
                        <p className="text-sm font-medium text-gray-500">
                          Phone
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          +8613377883692
                        </p>
                        <a
                          href="https://api.whatsapp.com/send?l=en&phone=8613377883692"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
                        >
                          <BsWhatsapp className="mr-2" /> Chat on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <BsEnvelope size={24} />
                      </div>
                      <div className="ml-6">
                        <p className="text-sm font-medium text-gray-500">
                          Email
                        </p>
                        <a
                          href="mailto:sara@whvison.cn"
                          className="mt-1 text-lg font-semibold text-gray-900 hover:text-indigo-600"
                        >
                          sara@whvison.cn
                        </a>
                        <p className="mt-2 text-sm text-gray-500">
                          We'll respond as soon as possible
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                        <BsGeoAlt size={24} />
                      </div>
                      <div className="ml-6">
                        <p className="text-sm font-medium text-gray-500">
                          Office Address
                        </p>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                          Room A404, Building 2, Huifeng Corporate Headquarters
                        </p>
                        <p className="text-gray-700">
                          Qiaokou District, Wuhan City, Hubei Province, China
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/corhuntertacticalgear/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <BsFacebook size={18} />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/corhuntergarment/about/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <BsLinkedin size={18} />
                      </a>
                      <a
                        href="https://www.youtube.com/@corhuntermilitaryuniformst2062/featured"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        <BsYoutube size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 h-80 w-full">
                    <Map />
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="order-1 lg:order-2"
              >
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Fill out the form below with your inquiry and we'll get back
                    to you as soon as possible.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                    >
                      <BsCheck2Circle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll respond to your
                        inquiry as soon as possible.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            formErrors.email
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                          placeholder="Enter your email"
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
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            formErrors.phone
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                          placeholder="Enter your phone number"
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
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                          placeholder="Enter your company name"
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
                          onChange={handleChange}
                          rows={5}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            formErrors.message
                              ? "border-red-500"
                              : "border-gray-300"
                          } focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                          placeholder="Please provide details about your inquiry, such as product specifications, quantity, and any customization requirements."
                        ></textarea>
                        {formErrors.message && (
                          <p className="mt-1 text-sm text-red-500">
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.button>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our{" "}
                        <Link
                          to="/privacy-policy"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsEnvelope size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll respond within 24 hours
                </p>
                <a
                  href="mailto:sara@whvison.cn"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  sara@whvison.cn <BsArrowRight className="ml-2" />
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsWhatsapp size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">
                  Chat with us directly for immediate assistance
                </p>
                <a
                  href="https://api.whatsapp.com/send?l=en&phone=8613377883692"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  +8613377883692 <BsArrowRight className="ml-2" />
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="h-16 w-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BsTelephone size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our sales team
                </p>
                <a
                  href="tel:+8613377883692"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  +8613377883692 <BsArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default ContactUs;
