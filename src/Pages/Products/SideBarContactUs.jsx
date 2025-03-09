import { BsTelephone, BsGeoAlt, BsEnvelope } from "react-icons/bs";

function SideBarContactUs() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4 text-gray-900 border-b pb-2">
        Contact Us
      </h2>
      <div className="space-y-3 text-sm">
        <div className="flex items-start">
          <BsTelephone className="w-4 h-4 mt-1 mr-2 text-indigo-600 flex-shrink-0" />
          <span>+8613377883692</span>
        </div>
        <div className="flex items-start">
          <BsEnvelope className="w-4 h-4 mt-1 mr-2 text-indigo-600 flex-shrink-0" />
          <a
            href="mailto:sara@whvison.cn"
            className="text-indigo-600 hover:underline"
          >
            sara@whvison.cn
          </a>
        </div>
        <div className="flex items-start">
          <BsGeoAlt className="w-4 h-4 mt-1 mr-2 text-indigo-600 flex-shrink-0" />
          <span>
            Room A404, Building 2, Huifeng Corporate Headquarters, Qiaokou
            District, Wuhan City, Hubei Province, China
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBarContactUs;
