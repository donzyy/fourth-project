import React from 'react'

function StatsSection() {
  return (
<section className="px-8 md:px-24 py-32">
  <div className="flex flex-wrap -m-4">
    <div className="w-full lg:w-1/2 p-4">
      <h1 className="font-heading tracking-tight text-4xl font-medium max-w-2xl">There are many variations of passages of layout but the majority have suffered alteration in some form.</h1>
    </div>
    <div className="w-full lg:w-1/2 p-4">
      <div className="flex flex-wrap -m-4 mb-4">
        <div className="w-full sm:w-1/2 p-4">
          <div className="bg-gray-50 rounded-2xl py-8">
            <h2 className="font-heading tracking-tight text-6xl font-medium text-center mb-1">20+</h2>
            <p className="tracking-tight text-gray-700 text-center">Years of experiences</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <div className="bg-gray-50 rounded-2xl py-8">
            <h2 className="font-heading tracking-tight text-6xl font-medium text-center mb-1">240+</h2>
            <p className="tracking-tight text-gray-700 text-center">Projects completed</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-2xl py-8">
        <h2 className="font-heading tracking-tight text-6xl font-medium text-center mb-1">100%</h2>
        <p className="tracking-tight text-gray-700 text-center">Client satisfaction</p>
      </div>
    </div>
  </div>    
</section>
  )
}

export default StatsSection
