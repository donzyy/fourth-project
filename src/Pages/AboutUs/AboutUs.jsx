import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUsers, FaCheckCircle, FaChartLine } from "react-icons/fa";
import DefaultLayout from "../../Layout/DefaultLayout";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

function AboutUs() {
  const [ref1, inView1] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { number: "2,800+", label: "Satisfied Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "30+", label: "Product Categories" },
    { number: "50+", label: "Countries Served" },
  ];

  return (
    <DefaultLayout>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src="https://www.corhunter-garment.com/uploads/202337095/ImgScroll/ba202303211711141465997.jpg"
              alt="Military Equipment"
              className="w-full h-full object-center brightness-50"
            />
          </motion.div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Excellence in Military & Tactical Gear
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Crafting premium quality equipment since 2007
            </motion.p>
          </div>
        </section>

        {/* Innovative Solutions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <motion.div
                ref={ref1}
                initial="hidden"
                animate={inView1 ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 mb-10 lg:mb-0"
              >
                <img
                  src="https://www.corhunter-garment.com/uploads/37095/page/202403231634485d561.jpg"
                  alt="Tactical Equipment"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              <div className="w-full lg:w-1/2 lg:pl-16">
                <motion.div
                  ref={ref2}
                  initial="hidden"
                  animate={inView2 ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Innovative Strategies for Military Excellence
                  </h2>
                  <p className="text-gray-600 mb-8">
                    With over 15 years of experience, we've developed
                    cutting-edge solutions for military and tactical equipment
                    needs worldwide.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Premium Quality Materials",
                      "Advanced Manufacturing Techniques",
                      "Rigorous Quality Control",
                      "Custom Solutions Available",
                      "Global Distribution Network",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial="hidden"
                        animate={inView2 ? "visible" : "hidden"}
                        variants={fadeIn}
                        transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                        className="flex items-center space-x-3"
                      >
                        <FaCheckCircle className="text-green-600" />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={scaleIn}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Our Core Values
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are committed to excellence in every aspect of our business,
                from product development to customer service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaUsers className="text-4xl text-blue-600" />,
                  title: "Customer Focus",
                  description:
                    "We put our customers first, understanding and meeting their unique needs.",
                },
                {
                  icon: <FaCheckCircle className="text-4xl text-green-600" />,
                  title: "Quality Assurance",
                  description:
                    "Every product undergoes rigorous testing to ensure the highest standards.",
                },
                {
                  icon: <FaChartLine className="text-4xl text-red-600" />,
                  title: "Continuous Innovation",
                  description:
                    "We constantly evolve and improve our products and processes.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate={inView3 ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="bg-gray-50 p-8 rounded-lg shadow-lg text-center"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Ready to Elevate Your Equipment Standards?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss how we can meet your military and
                tactical equipment needs.
              </p>
              <Link to="/contactus">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}

export default AboutUs;
