import React from 'react';
import { Cpu } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Cpu className="text-blue-600 mr-3" size={24} />
              <h3 className="text-xl font-semibold">Obstacle Avoiding Robot</h3>
            </div>
            <p className="text-gray-600">
              Designed an Arduino-based robot that avoids obstacles with remote, voice, 
              and Bluetooth control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;