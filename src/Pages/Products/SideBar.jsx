import { BsSearch, BsChevronDown, BsX, BsFilter } from "react-icons/bs";
import SideBarLatestProducts from "./SideBarLatestProducts";
import SideBarContactUs from "./SideBarContactUs";
import SideBarCategories from "./SideBarCategories";

function SideBar({
  searchQuery,
  setSearchQuery,
  setSearchParams,
  categories,
  activeCategory,
  toggleCategory,
  showSearch = true,
  categoryQuery,
  subCategoryQuery,
  latestProducts,
  mobileFiltersOpen,
  setMobileFiltersOpen,
}) {
  const SearchComponent = () => (
    <div
      className={showSearch ? "bg-white p-4 rounded-lg shadow-sm" : "hidden"}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            if (e.target.value) {
              setSearchParams({ search: e.target.value });
            } else {
              setSearchParams({});
            }
          }}
        />
        <BsSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );

  const MobileToggleButton = () => (
    <div className="lg:hidden mb-4">
      <button
        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        className="w-full flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
      >
        <span className="font-medium flex items-center">
          <BsFilter className="w-5 h-5 mr-2" /> Filters
        </span>
        <BsChevronDown
          className={`w-5 h-5 transition-transform ${
            mobileFiltersOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );

  const MobileSidebar = () => (
    <div
      className={`fixed inset-0 flex z-[100] lg:hidden ${
        mobileFiltersOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        onClick={() => setMobileFiltersOpen(false)}
      ></div>

      <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition-all transform ease-in-out duration-300">
        <div className="flex items-center justify-between px-4">
          <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          <button
            type="button"
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
            onClick={() => setMobileFiltersOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <BsX className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile filters */}
        <div className="mt-4 border-t border-gray-200">
          <SideBarCategories
            categories={categories}
            activeCategory={activeCategory}
            toggleCategory={toggleCategory}
            categoryQuery={categoryQuery}
            subCategoryQuery={subCategoryQuery}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <MobileSidebar />

      {/* Mobile toggle button */}
      <MobileToggleButton />

      {/* Desktop sidebar */}
      <aside className="hidden lg:block lg:w-1/4">
        <div className="sticky top-8 space-y-6">
          {/* Search */}
          <SearchComponent />

          {/* Categories */}
          <SideBarCategories
            categories={categories}
            activeCategory={activeCategory}
            toggleCategory={toggleCategory}
            categoryQuery={categoryQuery}
            subCategoryQuery={subCategoryQuery}
          />

          {/* Latest Products */}
          <SideBarLatestProducts latestProducts={latestProducts} />

          {/* Contact Us */}
          <SideBarContactUs />
        </div>
      </aside>
    </>
  );
}

export default SideBar;
