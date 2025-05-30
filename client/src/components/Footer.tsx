import { Link, useLocation } from "wouter";
import { Box, Twitter, Facebook, Instagram } from "lucide-react";
import { scrollToId } from "@/lib/utils";

const Footer = () => {
  const [location] = useLocation();
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center text-2xl font-bold mb-4">
              <img src="/svgs/Locrate_Logo_White.svg" alt="Locrate" className="h-12" />
            </div>
            <p className="text-gray-400 mb-4">
              Organise your belongings simply and efficiently with QR code tracking.
            </p>
            <div className="flex space-x-4">
              <a
                className="text-gray-400 hover:text-white transition duration-150"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                className="text-gray-400 hover:text-white transition duration-150"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                className="text-gray-400 hover:text-white transition duration-150"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#features"
                  className="text-gray-400 hover:text-white transition duration-150"
                  onClick={(e) => {
                    if (location === "/") {
                      e.preventDefault();
                      scrollToId("features");
                    }
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-gray-400 hover:text-white transition duration-150"
                  onClick={(e) => {
                    if (location === "/") {
                      e.preventDefault();
                      scrollToId("how-it-works");
                    }
                  }}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#download"
                  className="text-gray-400 hover:text-white transition duration-150"
                  onClick={(e) => {
                    if (location === "/") {
                      e.preventDefault();
                      scrollToId("download");
                    }
                  }}
                >
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:contact@locrate.app"
                  className="hover:text-white transition duration-150"
                >
                  contact@locrate.app
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@locrate.app"
                  className="hover:text-white transition duration-150"
                >
                  support@locrate.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Locrate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
