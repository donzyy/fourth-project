import { useEffect } from "react";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs"
import { Link } from "react-router-dom"

function Footer() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
<section className="relative pt-24 bg-black overflow-hidden">
  {/* <img className="absolute left-1/2 bottom-0 h-full transform -translate-x-1/2" src="flaro-assets/images/footers/gradient.svg" alt /> */}
  <div className="relative z-10 container px-4 mx-auto">
    <div className="pb-24 border-b border-gray-900">
      <div className="flex flex-wrap -m-8">
        <div className="w-full sm:w-1/2 lg:w-6/12 p-8">
          <div className="lg:max-w-sm">
            <Link className="mb-8 inline-block" to={'/'}>
              <img src="/Media/Taurean IT Logo3-1_vectorized.png" alt='' />
            </Link>
            <p className="mb-20 text-gray-400 font-medium leading-relaxed md:max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus interdum facilisis odio scelerisque vel neque.</p>
            <div className="flex flex-wrap -m-1.5">
              <div className="w-auto p-1.5">
                <Link to={''}>
                  <div className="flex items-center justify-center w-9 h-9 border border-gray-800 hover:border-gray-900 rounded-full">
                    <BsFacebook className="text-white" size={16} />
                  </div>
                </Link>
              </div>
              <div className="w-auto p-1.5">
                <Link to={''}>
                  <div className="flex items-center justify-center w-9 h-9 border border-gray-800 hover:border-gray-900 rounded-full">
                    <BsInstagram className="text-white" size={16} />
                  </div>
                </Link>
              </div>
              <div className="w-auto p-1.5">
                <Link to={''}>
                  <div className="flex items-center justify-center w-9 h-9 border border-gray-800 hover:border-gray-900 rounded-full">
                    <BsTwitterX className="text-white" size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
          <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">Menu</h3>
          <ul>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={'/'}>Home</Link></li>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>Products</Link></li>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={'/aboutus'}>About Us</Link></li>
            {/* <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>News &amp; Stories</Link></li> */}
            <li><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={'/quote'}>Request Quote</Link></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
          <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">Categories</h3>
          <ul>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>Our Journeys</Link></li>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>Pricing Plans</Link></li>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>Roadmap</Link></li>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>Terms &amp; Conditions</Link></li>
            <li><a className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>Privacy Policy</a></li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
          <h3 className="mb-8 text-sm text-gray-600 uppercase font-semibold leading-normal tracking-px">Contact Us</h3>
          <ul>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>(+233)-12-456-7890</Link></li>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>info@yourdomain.com</Link></li>
            <li className="mb-5"><Link className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>United States of Ghana</Link></li>
            {/* <li><a className="text-white hover:text-gray-200 font-medium leading-relaxed" to={''}>Contact Us</a></li> */}
          </ul>
        </div>
      </div>
    </div>
    <p className="py-5 text-sm text-gray-300 font-medium text-center leading-normal">Copyright © 2022 Flaro. All Rights Reserved. Designed By <Link to={''} className="underline">Taurean IT Logistics</Link> ❤️</p>
  </div>
</section>
  )
}

export default Footer
