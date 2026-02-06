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
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-lg hover:border-purple-300 transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 break-words">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 font-medium mb-1">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <span className="text-xs text-purple-600 font-semibold">
                      CGPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm">
                <Calendar size={16} className="text-purple-600 flex-shrink-0" />
                <span className="text-gray-600">{edu.period}</span>
                {edu.current && (
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                    Current
                  </span>
                )}
              </div>
              
              <p className="text-xs sm:text-sm text-gray-600 mb-4">{edu.location}</p>
              
              {edu.details && (
                <ul className="space-y-2">
                  {edu.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="text-xs sm:text-sm text-gray-600 pl-3 border-l-2 border-purple-300 leading-relaxed"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
