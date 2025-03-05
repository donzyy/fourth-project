import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsJustify, BsX } from 'react-icons/bs';
import MegaMenu from './MegaMenu';

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="overflow-hidden relative z-40">
      <div className="border-b border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Link to={'/'}>
              <img className='w-auto h-28' src="/Media/Taurean IT Logo1_vectorized.png" alt="Logo" />
            </Link>
            <ul className="hidden lg:flex items-center gap-8">
            <li className="hover:text-opacity-70 transition duration-200"><Link to={'/'}>Home</Link></li>
              <li>
{/*                 <Link className="flex items-center flex-wrap gap-2 group" to={''}>
                  <span className="group-hover:text-opacity-70 transition duration-200">Products</span>
                  <div className="group-hover:text-opacity-70 transition duration-200">
                    <BsChevronDown className='' size={16} />
                  </div>
                </Link> */}
                <MegaMenu />
              </li>
              <li className="hover:text-opacity-70 transition duration-200"><Link to={'/aboutus'}>About Us</Link></li>
              <li className="hover:text-opacity-70 transition duration-200"><Link to={'/contactus'}>Contact Us</Link></li>
{/*               <li>
                <Link className="flex items-center flex-wrap gap-2 group" to={''}>
                  <span className="group-hover:text-opacity-70 transition duration-200">Resources</span>
                  <div className="group-hover:text-opacity-70 transition duration-200">
                    <BsChevronDown size={16} />
                  </div>
                </Link>
              </li> */}
            </ul>
            <Link className="hidden lg:inline-block py-3 px-5 rounded-full bg-white border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200" to={'/quote'}>Get a Quote</Link>
            <div className="lg:hidden">
              <Link onClick={() => setMobileNavOpen(!mobileNavOpen)} to={''}>
                <BsJustify className="navbar-burger text-orange-500 rounded" size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${mobileNavOpen ? 'block' : 'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
        <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative z-10 px-9 py-8 h-full overflow-y-auto bg-white flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <Link to={''}>
              <img className='w-auto h-28' src="/Media/Taurean IT Logo1-2_vectorized.png" alt="Solstice Logo" />
            </Link>
            <Link onClick={() => setMobileNavOpen(!mobileNavOpen)} to={''}>
              <BsX size={30} />
            </Link>
          </div>
          <ul className="flex flex-col gap-12 py-12">
          <li className="hover:text-opacity-70 transition duration-200"><Link to={''}>Home</Link></li>
            <li>
{/*               <Link className="flex items-center flex-wrap gap-2 group" to={''}>
                <span className="group-hover:text-opacity-70 transition duration-200">Products</span>
                <div className="group-hover:text-opacity-70 transition duration-200">
                  <BsChevronDown size={16} />
                </div>
              </Link> */}
              <MegaMenu />
            </li>
            <li className="hover:text-opacity-70 transition duration-200"><Link to={''}>Features</Link></li>
            <li className="hover:text-opacity-70 transition duration-200"><Link to={''}>Community</Link></li>
            <li>
              <Link className="flex items-center flex-wrap gap-2 group" to={''}>
                <span className="group-hover:text-opacity-70 transition duration-200">Resources</span>
                <div className="group-hover:text-opacity-70 transition duration-200">
                  <BsChevronDown size={16} />
                </div>
              </Link>
            </li>
          </ul>
          <Link className="block text-center py-3 px-5 rounded-full bg-white border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200" to={''}>Get A Quote</Link>
        </nav>
      </div>
    </section>
  );
}

export default Header;
