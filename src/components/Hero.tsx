import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Byreddy Sai Reddy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Electronics and Communication Engineering Student at SR University
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://linkedin.com/in/Byreddy-saireddy-2004" 
               className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:saireddybyreddy72@gmail.com" 
               className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img 
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Technology Background"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;