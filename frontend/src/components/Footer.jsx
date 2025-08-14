import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-2">Dc Store</h3>
          <p className="text-sm">
            At Dc Store, we pride ourselves on offering a seamless and secure platform for buying and selling social media accounts.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Useful Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/product" className="hover:underline">Product</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/cookie-policy" className="hover:underline">Cookie Policy</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
            <li><a href="/terms-of-condition" className="hover:underline">Terms of Condition</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm">5 Zilporah Street Lagos</p>
          <p className="text-sm">cookboyles@gmail.com</p>
          <p className="text-sm">123 456 7890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © Copyright 2025 . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;