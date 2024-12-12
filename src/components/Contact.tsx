import React from 'react';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <a href="tel:+918179723621" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Phone className="text-blue-600 mb-3" size={24} />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-600 text-center">+91 8179723621</p>
          </a>
          
          <a href="mailto:saireddybyreddy72@gmail.com" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Mail className="text-red-600 mb-3" size={24} />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 text-center">saireddybyreddy72@gmail.com</p>
          </a>
          
          <a href="https://linkedin.com/in/Byreddy-saireddy-2004" className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Linkedin className="text-blue-600 mb-3" size={24} />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600 text-center">Byreddy Sai Reddy</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;