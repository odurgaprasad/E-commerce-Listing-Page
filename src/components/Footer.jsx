import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#f3f9f3] py-8 px-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Subscribe to Newsletter Section */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-lg font-bold">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p className="text-sm text-gray-600 my-4">
            Lorem Ipsum Dolor Sit Amet, Aut Ipsum Illum Et Nostrum Quidem Aut
            Necessebus Enim
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="p-2 border rounded-md border-gray-300"
            />
            <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-bold">ABOUT US</h3>
          <ul className="text-sm text-gray-600 mt-4 space-y-2">
            <li>Our Story</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Help & Support</li>
          </ul>
        </div>

        {/* Our Services Section */}
        <div>
          <h3 className="text-lg font-bold">OUR SERVICES</h3>
          <ul className="text-sm text-gray-600 mt-4 space-y-2">
            <li>Book Maali</li>
            <li>Plant Day Care</li>
            <li>Rent Plants</li>
            <li>Plants & Pots</li>
            <li>Gardening Tools</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-bold">USEFUL LINKS</h3>
          <ul className="text-sm text-gray-600 mt-4 space-y-2">
            <li>My Account</li>
            <li>Orders & Returns</li>
            <li>Track Order</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Return, Refund & Replacement Policy</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h3 className="text-lg font-bold">GET IN TOUCH</h3>
          <p className="text-sm text-gray-600 mt-4">
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
          </p>
          <p className="text-sm text-gray-600 mt-2">Call: +919958287272</p>
          <p className="text-sm text-gray-600 mt-2">
            Email: care@chaperoneplants.com
          </p>
        </div>
      </div>

      {/* Chaperone Section */}
      <div className="container mx-auto mt-8 text-center">
        <h3 className="text-lg font-bold border-b-2 border-purple-500 inline-block mb-2">
          CHAPERONE
        </h3>
        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet. Aut ipsum illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis.
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="container mx-auto mt-8 text-center">
        <h4 className="text-sm font-bold">Follow us on</h4>
        <div className="flex justify-center gap-4 mt-4">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faPinterest}
            className="text-xl text-gray-600 hover:text-gray-800 cursor-pointer"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-8 text-center border-t pt-4 text-sm text-gray-600">
        © 2023, chaperone.com All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
