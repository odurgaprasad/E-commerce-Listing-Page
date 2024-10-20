import { useState } from "react";

export default function FilterSidebar() {
  // State to handle the collapse/expand of each filter category
  const [openSections, setOpenSections] = useState({
    plantType: false,
    price: false,
    nursery: false,
    idealLocation: false,
    indoorOutdoor: false,
    maintenance: false,
    plantSize: false,
    waterSchedule: false,
    Color: false,
    Seasonal: false,
    LightEfficient: false,
  });

  // Toggle the section visibility
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-96 h-full p-4 bg-green-100 text-gray-700 my-16">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter</h2>
        <button className="text-sm text-gray-500">CLEAR ALL</button>
      </div>

      {/* Filter: Type of Plants */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("plantType")}
        >
          <h3 className="text-lg font-medium">Type of Plants</h3>
          <span>{openSections.plantType ? "−" : "+"}</span>
        </div>
        {openSections.plantType && (
          <div className="mt-2">
            <label className="block text-sm">
              <input type="checkbox" className="mr-2" /> Lorem Ipsum (12)
            </label>
            <label className="block text-sm">
              <input type="checkbox" className="mr-2" /> Lorem Ipsum (23)
            </label>
            <label className="block text-sm">
              <input type="checkbox" className="mr-2" /> Lorem Ipsum (41)
            </label>
            <label className="block text-sm">
              <input type="checkbox" className="mr-2" /> Lorem Ipsum (9)
            </label>
            <label className="block text-sm">
              <input type="checkbox" className="mr-2" /> Lorem Ipsum (15)
            </label>
          </div>
        )}
      </div>

      {/* Filter: Price */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="text-lg font-medium">Price</h3>
          <span>{openSections.price ? "−" : "+"}</span>
        </div>
        {openSections.price && (
          <div className="mt-2">
            <label className="block text-sm">Price Filter Options Here</label>
          </div>
        )}
      </div>

      {/* Filter: Nursery */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("nursery")}
        >
          <h3 className="text-lg font-medium">Nursery</h3>
          <span>{openSections.nursery ? "−" : "+"}</span>
        </div>
        {openSections.nursery && (
          <div className="mt-2">
            <label className="block text-sm">Nursery Filter Options Here</label>
          </div>
        )}
      </div>

      {/* Filter: Ideal Plant Location */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("idealLocation")}
        >
          <h3 className="text-lg font-medium">Ideal Plants Location</h3>
          <span>{openSections.idealLocation ? "−" : "+"}</span>
        </div>
        {openSections.idealLocation && (
          <div className="mt-2">
            <label className="block text-sm">
              Location Filter Options Here
            </label>
          </div>
        )}
      </div>

      {/* Filter: Indoor/Outdoor */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("indoorOutdoor")}
        >
          <h3 className="text-lg font-medium">Indoor/ Outdoor</h3>
          <span>{openSections.indoorOutdoor ? "−" : "+"}</span>
        </div>
        {openSections.indoorOutdoor && (
          <div className="mt-2">
            <label className="block text-sm">
              Indoor/Outdoor Filter Options Here
            </label>
          </div>
        )}
      </div>

      {/* Filter: Maintenance */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("maintenance")}
        >
          <h3 className="text-lg font-medium">Maintenance</h3>
          <span>{openSections.maintenance ? "−" : "+"}</span>
        </div>
        {openSections.maintenance && (
          <div className="mt-2">
            <label className="block text-sm">
              Maintenance Filter Options Here
            </label>
          </div>
        )}
      </div>

      {/* Filter: Plant Size */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("plantSize")}
        >
          <h3 className="text-lg font-medium">Plant Size</h3>
          <span>{openSections.plantSize ? "−" : "+"}</span>
        </div>
        {openSections.plantSize && (
          <div className="mt-2">
            <label className="block text-sm">
              Plant Size Filter Options Here
            </label>
          </div>
        )}
      </div>

      {/* Filter: Water Schedule */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("waterSchedule")}
        >
          <h3 className="text-lg font-medium">Water Schedule</h3>
          <span>{openSections.waterSchedule ? "−" : "+"}</span>
        </div>
        {openSections.waterSchedule && (
          <div className="mt-2">
            <label className="block text-sm">
              Water Schedule Filter Options Here
            </label>
          </div>
        )}
      </div>

      {/* Filter: Color */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("Color")}
        >
          <h3 className="text-lg font-medium">Color</h3>
          <span>{openSections.Color ? "−" : "+"}</span>
        </div>
        {openSections.Color && (
          <div className="mt-2">
            <label className="block text-sm">Color Filter Options Here</label>
          </div>
        )}
      </div>
      {/* Filter: Seasonal */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("Seasonal")}
        >
          <h3 className="text-lg font-medium">Seasonal</h3>
          <span>{openSections.Seasonal ? "−" : "+"}</span>
        </div>
        {openSections.Seasonal && (
          <div className="mt-2">
            <label className="block text-sm">
              Seasonal Filter Options Here
            </label>
          </div>
        )}
      </div>
      {/* Filter: Light Efficient */}
      <div className="mb-4 border-b border-stone-800 p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("LightEfficient")}
        >
          <h3 className="text-lg font-medium">Light Efficient</h3>
          <span>{openSections.LightEfficient ? "−" : "+"}</span>
        </div>
        {openSections.LightEfficient && (
          <div className="mt-2">
            <label className="block text-sm">
              Light Efficient Filter Options Here
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
