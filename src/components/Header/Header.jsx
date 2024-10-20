import React, { useState } from "react";
import logo from "../../assets/logoImage.png";
import NavigationLinks from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faSearch,
  faTree,
} from "@fortawesome/free-solid-svg-icons";
import PlantsAndPots from "./PlantsAndPots";

import CarouselList from "./carouselList";

function Header() {
  const [carouselDetails, setCarouselDetails] = useState("");
  return (
    <div>
      <header className="overflow-hidden">
        {/* Top Banner */}
        <div className="bg-green-950 flex justify-between items-center py-2 px-4 w-full">
          <span className="text-white text-lg text-center mx-auto hidden sm:block">
            Free Shipping on orders Above 999/-
          </span>
          <span className="text-white text-lg">+918333977778</span>
        </div>

        {/* Logo and Navigation */}
        <div className="flex flex-wrap justify-between items-center py-4 px-4">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="logo" className="h-16 w-16" />
            <span className="text-3xl font-bold text-green-950 ml-4">
              Chaperone
            </span>
          </div>

          {/* Navigation Links (kept open as per request) */}
          <div className="flex-grow w-full md:w-auto">
            <NavigationLinks />
          </div>

          {/* Profile and Cart Icons */}
          <div className="flex items-center gap-6 mt-4 mr-6">
            <div>
              <p className="text-center">
                <FontAwesomeIcon icon={faUser} />
              </p>
              <span className="text-center text-xl font-mono">Profile</span>
            </div>
            <div>
              <p className="text-center">
                <FontAwesomeIcon icon={faShoppingCart} />
              </p>
              <span className="text-center text-xl font-mono">Cart</span>
            </div>
          </div>
        </div>

        {/* Search Bar with Icons */}
        <div className="flex justify-center items-center pt-8 px-4">
          <div className="relative w-full max-w-md flex items-center border-b-2 border-black">
            {/* Left Search Icon */}
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-2 text-stone-800"
            />

            {/* Search Input */}
            <input
              type="text"
              className="text-stone-800 outline-none pl-10 pr-10 py-1 w-full"
              placeholder="Search Plant"
            />

            {/* Right Tree Icon */}
            <FontAwesomeIcon
              icon={faTree}
              className="absolute right-2 text-green-700"
            />
          </div>
        </div>
      </header>
      <main>
        <PlantsAndPots />

        <CarouselList />
      </main>
    </div>
  );
}

export default Header;
