import React from 'react';
import { Award } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "NCC A Certificate",
      details: "Grade 'C' (2018)"
    },
    {
      title: "National Level Abacus Competition",
      details: "3rd Prize (2016)"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Achievements</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg flex items-start">
              <Award className="text-yellow-600 mr-3 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;