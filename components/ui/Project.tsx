import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const portfolioItems = [
    {
      title: 'Educational Technology',
      category: 'Teaching & Learning',
      description: 'AI-enabled learning platforms and STEM curriculum development',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Graphic Design',
      category: 'Creative Work',
      description: 'Brand identity, digital content, and visual storytelling',
      color: 'from-pink-500 to-purple-500',
    },
    {
      title: 'Web Development',
      category: 'Software Engineering',
      description: 'Modern web applications with React and front-end technologies',
      color: 'from-cyan-500 to-purple-500',
    },
    {
      title: 'Environmental Projects',
      category: 'Geography & Sustainability',
      description: 'Research and advocacy for environmental conservation',
      color: 'from-green-500 to-cyan-500',
    },
    {
      title: 'Administrative Solutions',
      category: 'Executive Assistance',
      description: 'Workflow optimization and digital transformation strategies',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Social Media Campaigns',
      category: 'Digital Marketing',
      description: 'Brand management and content strategy for organizations',
      color: 'from-pink-600 to-purple-600',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A showcase of my work across various domains including education, technology, 
            design, and environmental sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <div className="text-white text-center p-6">
                  <div className="text-5xl mb-4 opacity-80">
                    {index === 0 && '📚'}
                    {index === 1 && '🎨'}
                    {index === 2 && '💻'}
                    {index === 3 && '🌍'}
                    {index === 4 && '📊'}
                    {index === 5 && '📱'}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-600 font-medium mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">
                  View Details
                  <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
