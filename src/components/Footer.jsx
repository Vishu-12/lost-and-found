import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link>About lostOfound</Link>
              </li>
              <li>
                <Link>Working at lostOfound</Link>
              </li>
              <li>
                <Link>Legal Notices</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Lost & Found software</h3>
            <ul className="space-y-2">
              <li>
                <Link>For Municipalities</Link>
              </li>
              <li>
                <Link>For Events</Link>
              </li>
              <li>
                <Link>For Public Transport Companies</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">lostOfound Services</h3>
            <ul className="space-y-2">
              <li>
                <Link>Report found item</Link>
              </li>
              <li>
                <Link>Print insurance claim</Link>
              </li>
              <li>
                <Link>Send an lostOfound Alert</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link>Help Center</Link>
              </li>
              <li>
                <Link>General Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between items-center">
          <div className="space-y-2">
            <p>&copy; 2024 lostOfound B.V.</p>
            <div className="space-x-4">
              <Link>Privacy policy</Link>
              <Link>Terms & Conditions</Link>
              <Link>Cookie settings</Link>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaLinkedin />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </footer>
  );
}
