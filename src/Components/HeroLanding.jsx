import React, { useState } from 'react';

function HeroLanding() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <section
      className="px-4 md:px-20 pt-8 pb-16 bg-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: 'url("/Media/apparel-2575945_1280.jpg")' }} // Ensure path is correct
    >
      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
          <div
            onClick={() => setMobileNavOpen(false)}
            className="fixed inset-0 bg-black opacity-20"
          />
          <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
            <div className="flex items-center justify-between">
              <a href="#">
                <img className="h-7" src="/Media/apparel-2575945_1280.jpg" alt="Logo" />
              </a>
              <button onClick={() => setMobileNavOpen(false)}>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-12 py-12">
              <li>
                <a href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium tracking-tight">Products</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 17 16" fill="none">
                      <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
              <li><a href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full">Case Studies</a></li>
              <li><a href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 text-sm font-medium tracking-tight rounded-full">Support</a></li>
              <li>
                <a href="#" className="inline-block py-2 px-3 hover:bg-gray-50 transition duration-200 rounded-full">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium tracking-tight">Resources</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 17 16" fill="none">
                      <path d="M12.848 6L8.18132 10.6667L3.51465 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <h1 className="font-heading tracking-tight text-white text-center text-5xl md:text-7xl font-medium max-w-lg md:max-w-5xl mx-auto mb-6">
        Navigating complex paths to unleash your success
      </h1>
      <p className="text-white tracking-tight mb-10 text-center text-xl text-opacity-80 max-w-xl mx-auto">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-32">
        <a href="#" className="bg-orange-500 h-16 rounded-full px-6 py-4 inline-flex items-center justify-center gap-2 tracking-tight hover:bg-orange-600 transition duration-200">
          <span className="text-white font-bold tracking-tight">Get A Free Consultation</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
            <path d="M14 6.66667H7.33333C4.38781 6.66667 2 9.05449 2 12V13.3333M14 6.66667L10 10.6667M14 6.66667L10 2.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#" className="rounded-full border border-gray-200 bg-white px-6 py-4 h-16 hover:bg-gray-50 transition duration-200 font-bold tracking-tight">
          Explore Case Studies
        </a>
      </div>

      {/* Feature Links */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3">
          <a href="#" className="inline-block w-full py-3 border-b-2 border-white">
            <p className="text-white font-semibold">Strategic Roadmapping</p>
          </a>
        </div>
        <div className="w-full lg:w-1/3">
          <a href="#" className="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
            <p className="text-white font-semibold lg:text-center">Collaborative Ideation</p>
          </a>
        </div>
        <div className="w-full lg:w-1/3">
          <a href="#" className="inline-block w-full py-3 border-b-2 border-white border-opacity-10 hover:border-opacity-100 transition duration-200">
            <p className="text-white font-semibold lg:text-right">Data-Driven Insights</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroLanding;
