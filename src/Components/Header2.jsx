import { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsJustify, BsX } from 'react-icons/bs';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel
} from '@headlessui/react';

function Header2() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigation = {
    categories: [
      {
        id: 'products',
        name: 'Products',
        featured: [
          {
            name: 'Featured Solution',
            href: '/featured-solution',
            imageSrc: '/Media/TestImage2.jpg', // Replace with your image URL
            imageAlt: 'Description of the featured solution or product.',
          },
          {
            name: 'Popular Service',
            href: '/popular-service',
            imageSrc: '/Media/TestImage5.jpg', // Replace with your image URL
            imageAlt: 'Description of the popular service or product.',
          },
        ],
        sections: [
          {
            id: 'services',
            name: 'IT Services',
            items: [
              { name: 'Cloud Solutions', href: '/cloud-solutions' },
              { name: 'Cybersecurity', href: '/cybersecurity' },
              { name: 'Network Management', href: '/network-management' },
              { name: 'Browse All', href: '/products' },
            ],
          },
          {
            id: 'solutions',
            name: 'Software Solutions',
            items: [
              { name: 'ERP Systems', href: '/erp' },
              { name: 'CRM Platforms', href: '/crm' },
              { name: 'Custom Development', href: '/custom-dev' },
            ],
          },
        ],
      },
    ],
    pages: [
      { name: 'About Us', href: '/aboutus' },
      { name: 'Contact Us', href: '/contactus' },
    ],
  };

  return (
    <section className="relative z-40">
      <div className="border-b border-gray-100">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Link to={'/'}>
              <img className="w-auto h-28" src="/Media/Taurean IT Logo1_vectorized.png" alt="Logo" />
            </Link>
            <ul className="hidden lg:flex items-center gap-8 relative">
              <li className="hover:text-opacity-70 transition duration-200"><Link to={'/'}>Home</Link></li>
              <li>
                <Popover className="relative">
                  <PopoverButton
                    className="flex items-center gap-2 text-gray-700 hover:text-opacity-70 transition duration-200"
                    /* onMouseEnter={() => console.log('Hovering Products')} */
                  >
                    Products
                    <BsChevronDown size={16} />
                  </PopoverButton>

                  <PopoverPanel className="fixed inset-0 top-16 z-100 text-sm text-gray-500 rounded-sm bg-white mt-20 mb-60 mx-2 shadow-lg">
                    {console.log('PopoverPanel rendering')}
                    <div className="mx-auto max-w-screen-xl px-4 py-16">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Text Sections (2 columns) */}
                        <div className="col-span-3 grid grid-cols-2 gap-8">
                          {navigation.categories[0].sections.map((section) => (
                            <div key={section.name}>
                              <p className="font-medium text-gray-900 text-2xl">{section.name}</p>
                              <ul className="mt-6 space-y-4">
                                {section.items.map((item) => (
                                  <li key={item.name}>
                                    <Link to={item.href} className="hover:text-opacity-70 transition duration-200">
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Featured Images (2 column) */}
                        <div className="grid grid-cols-2 gap-8">
                          {navigation.categories[0].featured.map((item) => (
                            <div key={item.name} className="group relative">
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt || 'Default alt text'}
                                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                              />
                              <Link to={item.href} className="mt-6 block font-medium text-gray-900 text-xl">
                                <span aria-hidden="true" className="absolute inset-0 z-10" />
                                {item.name}
                              </Link>
                              <p aria-hidden="true" className="mt-2 py-2 text-white text-center rounded-full bg-[#fb8602]">
                                View More
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </Popover>
              </li>
              {navigation.pages.map((page) => (
                <li key={page.name} className="hover:text-opacity-70 transition duration-200">
                  <Link to={page.href}>{page.name}</Link>
                </li>
              ))}
            </ul>
            <Link
              className="hidden lg:inline-block py-3 px-5 rounded-full bg-white border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
              to={'/quote'}
            >
              Get a Quote
            </Link>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <BsJustify className="navbar-burger text-orange-500 rounded" size={40} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-50 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <BsX size={30} />
              </button>
            </div>

            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-orange-500 data-[selected]:text-orange-500"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1 text-gray-500">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <Link to={item.href} className="hover:text-opacity-70 transition duration-200 -m-2 block p-2 text-gray-500">
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link to={page.href} className="hover:text-opacity-70 transition duration-200 -m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <Link
                to={'/quote'}
                className="block text-center py-3 px-5 rounded-full bg-white border border-gray-200 shadow text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
              >
                Get a Quote
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
}

export default Header2;