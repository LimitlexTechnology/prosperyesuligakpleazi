import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
  details?: string[];
  gpa?: string;
}

export function Education() {
  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of The People',
      location: 'Pasadena, California (Distance)',
      period: 'September 2025 – Present',
      current: true,
    },
    {
      degree: 'Certificate in Front-End ProDev',
      institution: 'African Leadership Xperience (ALX)',
      location: 'Accra, Ghana',
      period: 'June 2025 – Present',
      current: true,
    },
    {
      degree: 'Certificate in Virtual Assistance',
      institution: 'African Leadership Xperience (ALX)',
      location: 'Accra, Ghana',
      period: 'September 2025 – November 2025',
      current: false,
    },
    {
      degree: 'Bachelor of Arts in Geography Education',
      institution: 'University of Education, Winneba',
      location: 'Winneba, Ghana',
      period: 'August 2015 – June 2019',
      current: false,
      gpa: '3.32 (Second Class Upper)',
      details: [
        'Minor in Political Science',
        'Research: Household Solid Waste Management Practices at Nima and Mamobi, Accra',
      ],
    },
    {
      degree: 'West African Senior School Certificate',
      institution: 'Amasaman Senior High School',
      location: 'Amasaman, Ghana',
      period: 'October 2008 – July 2012',
      current: false,
      details: ['General Arts'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Calendar size={16} className="text-purple-600" />
                    <span className="text-sm text-purple-600 font-medium">
                      {edu.period}
                    </span>
                    {edu.current && (
                      <span className="bg-gradient-to-r from-purple-600 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">{edu.location}</p>
                  
                  {edu.gpa && (
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-purple-600" />
                      <span className="text-sm text-gray-700 font-medium">
                        CGPA: {edu.gpa}
                      </span>
                    </div>
                  )}
                  
                  {edu.details && (
                    <ul className="space-y-1 mt-3">
                      {edu.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 pl-4 border-l-2 border-purple-300"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
