import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const navigation = {
  categories: [
    {
      id: 'products',
      name: 'Products',
      featured: [
        {
          name: 'Featured Solution',
          href: '/featured-solution',
          imageSrc: '', // Replace with your image URL
          imageAlt: 'Description of the featured solution or product.',
        },
        {
          name: 'Popular Service',
          href: '/popular-service',
          imageSrc: '', // Replace with your image URL
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
};

function MegaMenu() {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-2 text-gray-700 hover:text-opacity-70 transition duration-200">
        Products
        <BsChevronDown size={16} />
      </PopoverButton>

      <PopoverPanel className="absolute inset-x-0 top-full z-50 text-sm text-gray-500 bg-[#fb8602] shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16">
          <div className="grid grid-cols-4 gap-8">
            {/* Text Sections (3 columns) */}
            <div className="col-span-3 grid grid-cols-3 gap-8">
              {navigation.categories[0].sections.map((section) => (
                <div key={section.name}>
                  <p className="font-medium text-gray-900">{section.name}</p>
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

            {/* Featured Images (1 column) */}
            <div className="grid grid-cols-1 gap-8">
              {navigation.categories[0].featured.map((item) => (
                <div key={item.name} className="group relative">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                  />
                  <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0 z-10" />
                    {item.name}
                  </Link>
                  <p aria-hidden="true" className="mt-1 text-gray-500">
                    Shop no
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}

export default MegaMenu;