import React from 'react'

function AboutSection() {
  return (
    <section className="py-32 px-8 md:px-24">
      <div className="flex flex-wrap -m-4">
        <div className="w-full lg:w-5/12 p-4">
          <div className="flex flex-col items-start justify-end h-full">
            <h1 className="font-heading text-4xl md:text-6xl font-medium mb-6 tracking-tight max-w-xs md:max-w-md">Data based consultation.</h1>
            <p className="text-lg mb-8 tracking-tight max-w-md">We are passionate about transforming spaces into extraordinary experiences. With a seamless fusion of architecture and interior design.</p>
            <a href="#" className="bg-black h-14 rounded-full px-5 py-3 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-orange-600 focus:bg-orange-500 focus:ring-4 focus:ring-orange-200 transition duration-200">
              <span className="text-white text-sm font-semibold tracking-tight">Read More About Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M14 6.66669H7.33333C4.38781 6.66669 2 9.0545 2 12V13.3334M14 6.66669L10 10.6667M14 6.66669L10 2.66669" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image + Overlay Container */}
        <div className="w-full lg:w-7/12 p-4 relative">
          {/* Overlay */}
          <div className="absolute top-4 right-4 bg-white text-black px-10 py-10 rounded-bl-lg ">
            <h3 className='font-bold text-black text-6xl mb-3 leading-tight'>23% Growth</h3>
            <p className='text-gray-700 tracking-tight text-center'>Top Right Overlay on the image</p>
          </div>

          {/* Image */}
          <img className="rounded-2xl object-cover object-right-top w-full" style={{ height: 752 }} src="/Media/sewing-machine-7728317_1280.jpg" alt="Sewing Machine" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
