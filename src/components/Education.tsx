import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech. (E.C.E.)",
      institution: "SR University",
      location: "Ananthasagar, Hanamkonda",
      year: "2026",
      percentage: "73.5%"
    },
    {
      degree: "12th",
      institution: "SR-EDU CENTRE",
      location: "Subedari, Hanamkonda",
      year: "2022",
      percentage: "70.4%"
    },
    {
      degree: "10th",
      institution: "Bishop Beretta High School",
      location: "Fathima Nagar, Hanamkonda",
      year: "2020",
      percentage: "98%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600 mt-2">{edu.institution}</p>
              <p className="text-gray-500">{edu.location}</p>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-blue-600">Year: {edu.year}</span>
                <span className="text-green-600">Percentage: {edu.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;