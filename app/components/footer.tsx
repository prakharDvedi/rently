import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 border-t bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Rently. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm text-gray-600">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
