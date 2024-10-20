import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function NavigationLinks() {
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  function toggleToolsDropdown() {
    setIsToolsOpen((prevToggle) => !prevToggle);
  }

  function toggleServicesDropdown() {
    setIsServicesOpen((prevToggle) => !prevToggle);
  }

  let listClasses =
    "text-xl lg:text-2xl font-semibold text-gray-600 hover:text-orange-500 hover:underline";

  return (
    <nav className="mt-8 py-2 w-full">
      <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 px-4 md:px-8 lg:px-16">
        <li className={listClasses}>
          <Link to="/">Home</Link>
        </li>
        <li className="text-orange-500 font-semibold border-b-4 border-orange-500 text-xl lg:text-2xl">
          <Link to="/PlantsAndPots">Plants & Pots</Link>
        </li>

        <li className="relative">
          <span
            onClick={toggleToolsDropdown}
            className="cursor-pointer text-xl lg:text-2xl hover:text-orange-500"
          >
            Tools{" "}
            {isToolsOpen ? (
              <FontAwesomeIcon icon={faAngleUp} className="ml-2" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            )}
          </span>
          {isToolsOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-slate-300 rounded-md shadow-lg z-20">
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/tools/gardening-tools">Gardening Tools</Link>
              </li>
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/tools/pest-control">Pest Control</Link>
              </li>
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/tools/fertilizers">Fertilizers</Link>
              </li>
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/tools/watering-cans">Watering Cans</Link>
              </li>
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/tools/garden-accessories">Garden Accessories</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="relative">
          <span
            onClick={toggleServicesDropdown}
            className="cursor-pointer text-xl lg:text-2xl hover:text-orange-500"
          >
            Our Services{" "}
            {isServicesOpen ? (
              <FontAwesomeIcon icon={faAngleUp} className="ml-2" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            )}
          </span>
          {isServicesOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-slate-300 rounded-md shadow-lg z-20">
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/services/book-maali">Book a Maali</Link>
              </li>
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/services/plant-day-care">Plant Day Care</Link>
              </li>
              <li className="px-4 py-2 hover:bg-slate-100">
                <Link to="/services/rent-plants">Rent Plants</Link>
              </li>
            </ul>
          )}
        </li>

        <li className={listClasses}>
          <Link to="/blog">Blog</Link>
        </li>
        <li className={listClasses}>
          <Link to="/our-story">Our Story</Link>
        </li>
        <li className={listClasses}>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationLinks;
