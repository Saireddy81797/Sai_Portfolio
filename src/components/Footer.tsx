import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>Copyright © {new Date().getFullYear()} Byreddy Sai Reddy | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;