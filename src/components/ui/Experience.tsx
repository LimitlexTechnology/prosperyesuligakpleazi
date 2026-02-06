import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: 'Head of JHS Department',
      company: 'Mirekua International Community School',
      location: 'Opah, Accra',
      period: 'September 2025 – Present',
      current: true,
      description: [
        'Lead lesson planning, supervision, and performance evaluation',
        'Coordinate teachers\' professional development and workloads',
        'Oversee BECE examination preparation and moderation',
      ],
    },
    {
      title: 'Science Facilitator',
      company: 'Mirekua International Community School',
      location: 'Opah, Accra',
      period: 'October 2023 – Present',
      current: true,
      description: [
        'Improve Science performance through student-centered teaching',
        'Introduce low-cost instructional materials and led science club',
        'Integrate digital tools to boost engagement',
      ],
    },
    {
      title: 'Director of Operations',
      company: 'UpEduk Konsortium',
      location: 'Accra, Ghana',
      period: 'January 2022 – Present',
      current: true,
      description: [
        'Led day-to-day operations for educational programs',
        'Design workflows for AI-enabled learning and training',
        'Collaborate with IT, finance and marketing teams',
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'Limitless Multimedia',
      location: 'Remote',
      period: 'April 2019 – Present',
      current: true,
      description: [
        'Design creative visuals and branding materials',
        'Produce professional photography and videography',
        'Deliver engaging digital and print outputs',
      ],
    },
    {
      title: 'Mathematics and Science Facilitator',
      company: 'Eden Hills International School',
      location: 'Kutunse, Ghana',
      period: 'January 2021 – December 2025',
      current: false,
      description: [
        'Boosted student performance through innovative STEM projects',
        'Coordinated graduation events and composed school anthem',
      ],
    },
    {
      title: 'Administrative Assistant',
      company: 'Revealedtruth Properties Ltd.',
      location: 'Pobiman, Ghana',
      period: 'January 2019 – August 2020',
      current: false,
      description: [
        'Provided administrative and operational support',
        'Managed social media and marketing channels',
        'Oversaw Airbnb reservations and client service',
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-white" size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-sm sm:text-base text-purple-600 font-medium">{exp.company}</p>
                    </div>
                  </div>
                </div>
                {exp.current && (
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap h-fit">
                    Current
                  </span>
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-purple-600 flex-shrink-0" />
                  <span>{exp.period}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-purple-600 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                )}
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700 text-sm sm:text-base flex items-start gap-3">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
