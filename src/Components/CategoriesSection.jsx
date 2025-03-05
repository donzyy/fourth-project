import React from 'react'
import { Link } from 'react-router-dom'

function CategoriesSection() {
  return (
<section className="py-20 bg-white overflow-x-hidden">
  <div className="container mx-auto px-4">
    <h2 className="mb-16 md:mb-24 text-4xl md:text-5xl font-bold font-heading">View All OUR Categories</h2>
    <div className="flex flex-wrap -mx-3 mb-20">
      <div className="w-full lg:w-1/2 px-3 mb-6 lg:mb-0">
        <div className="relative mb-6 h-64 w-full bg-cover bg-center bg-no-repeat rounded-2xl object-cover" style={{backgroundImage: 'url("/Media/TestImage1.jpg")'}}>
          <span className="inline-block mt-4 ml-4 px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-10%</span>
          <Link className="absolute inset-0 flex items-end" href="#">
            <div className="pl-12 pb-12">
              <h3 className="text-3xl font-bold font-heading text-white">LIFE Bottle 2.0</h3>
              <p className="text-xl text-white font-bold font-heading">
                <span>$10.30</span>
                <span className="text-sm font-normal line-through">11.99</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="relative h-64 w-full bg-cover bg-center bg-no-repeat rounded-2xl object-cover" style={{backgroundImage: 'url("/Media/TestImage2.jpg")'}}>
          <span className="inline-block mt-4 ml-4 px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">-10%</span>
          <Link className="absolute inset-0 flex items-end" href="#">
            <div className="pl-12 pb-12">
              <h3 className="text-3xl font-bold font-heading text-white">Tennis racket Sanks 2</h3>
              <p className="text-xl text-white font-bold font-heading">
                <span>$126.90</span>
                <span className="text-sm font-normal line-through">$139.90</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-3">
        <div className="relative inline-block mb-6 h-96 lg:h-full w-full bg-no-repeat bg-cover rounded-2xl object-cover" style={{backgroundImage: 'url("/Media/TestImage.jpg")'}}>
          <span className="inline-block px-2 py-1 ml-4 mt-4 text-xs font-bold font-heading border-2 border-blue-400 rounded-full text-blue-500 bg-white uppercase">New</span>
          <div className="absolute bottom-0 left-0 pb-20 pl-12">
            <span className="text-xl text-orange-300 font-bold font-heading">Excellent value bike</span>
            <h3 className="mt-3 mb-2 text-3xl font-bold font-heading text-white">Brooklyn Sain 1</h3>
            <p className="mb-10 font-bold font-heading text-white">$379.90</p>
            <Link className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-4 px-8 rounded-full uppercase transition duration-200" to={''}>Buy</Link>
          </div>
        </div>
      </div>
    </div>
    <div className='text-center'>
        <Link className="bg-blue-800 hover:bg-blue-900 text-white font-bold font-heading py-6 px-8 rounded-full uppercase justify-center" to={''}>All Products</Link>
    </div>
  </div>
</section>

  )
}

export default CategoriesSection
