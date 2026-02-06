import React from 'react';
import { Code, Palette, Briefcase, Globe, GraduationCap } from 'lucide-react';

export function About() {
  const roles = [
    {
      icon: Code,
      title: 'Software Engineer',
      description: 'Building modern web applications with front-end technologies. Currently pursuing BS in Computer Science at University of The People.',
    },
    {
      icon: Palette,
      title: 'Graphic Designer',
      description: 'Creating compelling visual content, branding materials, photography, and multimedia campaigns for diverse clients since 2019.',
    },
    {
      icon: Briefcase,
      title: 'Executive Assistant',
      description: 'Expert in administrative support, project coordination, digital content creation, social media strategy, and brand management.',
    },
    {
      icon: Globe,
      title: 'Geographer',
      description: 'BA in Geography Education with focus on environmental sustainability, spatial analysis, and climate change research.',
    },
    {
      icon: GraduationCap,
      title: 'Educationist',
      description: 'Licensed educator and Head of JHS Department, driving academic excellence through innovative STEM instruction and curriculum development.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Results-driven and versatile professional with proven excellence across education, 
            administration, and technology sectors. Strategic problem-solver with strong leadership, 
            communication, and collaboration skills. Passionate about leveraging education, media, 
            and technology to promote sustainability and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg mb-4">
                <role.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {role.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
