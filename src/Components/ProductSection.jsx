import React from 'react'
import { Link } from 'react-router-dom'

function ProductSection() {
  return (
<section className="py-12 md:py-24 lg:py-32">
  <div className="container px-4 mx-auto">
    <div className="max-w-xs mx-auto md:max-w-7xl">
      <div className="flex flex-wrap -mx-4 mb-14 justify-between">
        <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
          <h2 className="text-4xl font-heading font-semibold text-rhino-600 tracking-xs">Our products</h2>
        </div>
        <div className="w-full md:w-1/2 px-4 md:text-right"><Link className="inline-flex h-12 py-2 px-4 items-center justify-center text-sm font-medium text-purple-500 hover:text-white bg-white border border-purple-500 rounded-full hover:bg-purple-500 transition duration-200" to={''}>Show more</Link></div>
      </div>
      <div className="flex flex-wrap -mx-4 -mb-8">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <Link className="relative group block max-w-xs mx-auto md:max-w-none bg-coolGray-100 rounded-xl overflow-hidden" to={''}>
            <div className="flex items-center h-80">
              <img className="block w-full h-80 rounded-xl" src="Media/TestImage.jpg" alt />
            </div>
            <div className="relative py-8 text-center">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-3 mr-2 text-2xs text-white font-bold bg-orange-500 uppercase rounded-full group-hover:bg-purple-500 transition duration-200">New</span>
              <span className="block text-xl font-semibold text-rhino-800 group-hover:text-purple-500 transition duration-200">Gray sport bag</span>
              <span className="block text-base text-rhino-300 group-hover:text-purple-500 transition duration-200">$ 65.90</span>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <Link className="relative group block max-w-xs mx-auto md:max-w-none bg-coolGray-100 rounded-xl overflow-hidden" to={''}>
            <div className="flex items-center h-80">
              <img className="block w-full h-80 rounded-xl" src="Media/TestImage3.jpg" alt />
            </div>
            <div className="relative py-8 text-center">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-3 mr-2 text-2xs text-white font-bold bg-orange-500 uppercase rounded-full group-hover:bg-purple-500 transition duration-200">New</span>
              <span className="block text-xl font-semibold text-rhino-800 group-hover:text-purple-500 transition duration-200">Gray sport bag</span>
              <span className="block text-base text-rhino-300 group-hover:text-purple-500 transition duration-200">$ 65.90</span>
            </div>
          </Link>
        </div>
{/*         <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <Link className="relative group block max-w-xs mx-auto md:max-w-none bg-coolGray-100 rounded-xl overflow-hidden" to={''}>
            <div className="flex items-center justify-center h-80">
              <img className="block w-auto h-40 mx-auto rounded-xl" src="/Media/TestImage3.jpg" alt />
            </div>
            <div className="relative py-8 mt-auto text-center">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-3 mr-2 text-2xs text-white font-bold bg-rhino-700 uppercase rounded-full group-hover:bg-purple-500 transition duration-200">Limited</span>
              <span className="block text-xl font-semibold text-rhino-800 group-hover:text-purple-500 transition duration-200">Set of colorful t-shirts</span>
              <span className="block text-base text-rhino-300 group-hover:text-purple-500 transition duration-200">$ 65.90</span>
            </div>
          </Link>
        </div> */}
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <Link className="relative group block max-w-xs mx-auto md:max-w-none bg-coolGray-100 rounded-xl overflow-hidden" to={''}>
            <div className="flex items-center justify-center h-80">
              <img className="block w-full h-full rounded-xl" src="Media/TestImage1.jpg" alt />
            </div>
            <div className="relative py-8 text-center">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-3 mr-2 text-2xs text-white font-bold bg-orange-500 uppercase rounded-full group-hover:bg-purple-500 transition duration-200">New</span>
              <span className="block text-xl font-semibold text-rhino-800 group-hover:text-purple-500 transition duration-200">Gray sport bag</span>
              <span className="block text-base text-rhino-300 group-hover:text-purple-500 transition duration-200">$ 65.90</span>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
          <Link className="relative group block max-w-xs mx-auto md:max-w-none bg-coolGray-100 rounded-xl overflow-hidden" to={''}>
            <div className="flex items-center justify-center h-80">
              <img className="block w-full h-full rounded-xl" src="Media/TestImage2.jpg" alt />
            </div>
            <div className="relative py-8 text-center">
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block py-1 px-3 mr-2 text-2xs text-rhino-700 font-bold bg-white uppercase rounded-full group-hover:bg-purple-500 group-hover:text-white transition duration-200">Sale</span>
              <span className="block text-xl font-semibold text-rhino-800 group-hover:text-purple-500 transition duration-200">Nike Sport Backpack</span>
              <span className="block text-base text-rhino-300 group-hover:text-purple-500 transition duration-200">$ 65.90</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ProductSection
