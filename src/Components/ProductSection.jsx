import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.1 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#8B5CF6",
      color: "#FFFFFF",
      transition: { type: "spring", stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  const badgeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-xs mx-auto md:max-w-7xl">
          <div className="flex flex-wrap -mx-4 mb-16 justify-between items-center">
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="w-full md:w-1/2 px-4 mb-8 md:mb-0"
            >
              <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
                Our <span className="text-indigo-600">Products</span>
              </h2>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="w-full md:w-1/2 px-4 md:text-right"
            >
              <Link
                className="inline-flex h-12 py-2 px-6 items-center justify-center text-sm font-medium text-indigo-600 hover:text-white bg-white border-2 border-indigo-500 rounded-full hover:bg-indigo-600 shadow-sm hover:shadow-md transition-all duration-200"
                to={""}
              >
                View All Products
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap -mx-4 -mb-8"
          >
            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Link
                  className="relative group block h-full max-w-xs mx-auto md:max-w-none bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  to={""}
                >
                  <div className="flex items-center justify-center h-80 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="block w-full h-full object-cover rounded-t-xl"
                      src="Media/TestImage.jpg"
                      alt="Gray sport bag"
                    />
                  </div>
                  <div className="relative py-6 px-4 text-center">
                    <motion.span
                      variants={badgeVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-4 text-xs text-white font-bold bg-gradient-to-r from-amber-500 to-amber-600 uppercase rounded-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-indigo-600 shadow-sm transition-all duration-300"
                    >
                      New
                    </motion.span>
                    <span className="block text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition duration-200">
                      Gray sport bag
                    </span>
                    <span className="block mt-1 text-base font-medium text-gray-500 group-hover:text-indigo-500 transition duration-200">
                      $65.90
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Link
                  className="relative group block h-full max-w-xs mx-auto md:max-w-none bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  to={""}
                >
                  <div className="flex items-center justify-center h-80 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="block w-full h-full object-cover rounded-t-xl"
                      src="Media/TestImage3.jpg"
                      alt="Sport product"
                    />
                  </div>
                  <div className="relative py-6 px-4 text-center">
                    <motion.span
                      variants={badgeVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-4 text-xs text-white font-bold bg-gradient-to-r from-amber-500 to-amber-600 uppercase rounded-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-indigo-600 shadow-sm transition-all duration-300"
                    >
                      New
                    </motion.span>
                    <span className="block text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition duration-200">
                      Training equipment
                    </span>
                    <span className="block mt-1 text-base font-medium text-gray-500 group-hover:text-indigo-500 transition duration-200">
                      $65.90
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Link
                  className="relative group block h-full max-w-xs mx-auto md:max-w-none bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  to={""}
                >
                  <div className="flex items-center justify-center h-80 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="block w-full h-full object-cover rounded-t-xl"
                      src="Media/TestImage1.jpg"
                      alt="Water bottle"
                    />
                  </div>
                  <div className="relative py-6 px-4 text-center">
                    <motion.span
                      variants={badgeVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-4 text-xs text-white font-bold bg-gradient-to-r from-amber-500 to-amber-600 uppercase rounded-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-indigo-600 shadow-sm transition-all duration-300"
                    >
                      New
                    </motion.span>
                    <span className="block text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition duration-200">
                      Water bottle
                    </span>
                    <span className="block mt-1 text-base font-medium text-gray-500 group-hover:text-indigo-500 transition duration-200">
                      $65.90
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="h-full"
              >
                <Link
                  className="relative group block h-full max-w-xs mx-auto md:max-w-none bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  to={""}
                >
                  <div className="flex items-center justify-center h-80 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="block w-full h-full object-cover rounded-t-xl"
                      src="Media/TestImage2.jpg"
                      alt="Nike Sport Backpack"
                    />
                  </div>
                  <div className="relative py-6 px-4 text-center">
                    <motion.span
                      variants={badgeVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-4 text-xs text-gray-800 font-bold bg-white uppercase rounded-full group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-indigo-600 group-hover:text-white shadow-sm border border-gray-200 transition-all duration-300"
                    >
                      Sale
                    </motion.span>
                    <span className="block text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition duration-200">
                      Nike Sport Backpack
                    </span>
                    <span className="block mt-1 text-base font-medium text-gray-500 group-hover:text-indigo-500 transition duration-200">
                      $65.90
                    </span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
