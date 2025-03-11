import { Link } from "react-router-dom";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

function SideBarCategories({
  categories,
  activeCategory,
  toggleCategory,
  categoryQuery,
  subCategoryQuery,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
        Categories
      </h2>
      <ul className="space-y-1">
        {categories.map((category) => (
          <li key={category.id} className="py-1">
            <div
              className="flex items-center justify-between cursor-pointer hover:text-indigo-600 transition-colors"
              onClick={() => toggleCategory(category.name)}
            >
              <span
                className={`font-medium ${
                  categoryQuery === category.name ? "text-indigo-600" : ""
                }`}
              >
                {category.name}
              </span>
              {category.subcategories.length > 0 &&
                (activeCategory === category.name ? (
                  <BsChevronDown className="h-4 w-4" />
                ) : (
                  <BsChevronRight className="h-4 w-4" />
                ))}
            </div>

            {activeCategory === category.name &&
              category.subcategories.length > 0 && (
                <ul className="ml-4 mt-1 space-y-1">
                  {category.subcategories.map((subcategory, index) => (
                    <li key={index} className="py-1">
                      <Link
                        to={`/products?category=${encodeURIComponent(
                          category.name
                        )}&subcategory=${encodeURIComponent(subcategory)}`}
                        className={`text-gray-600 hover:text-indigo-600 transition-colors ${
                          categoryQuery === category.name &&
                          subCategoryQuery === subcategory
                            ? "text-indigo-600 font-medium"
                            : ""
                        }`}
                      >
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBarCategories;
