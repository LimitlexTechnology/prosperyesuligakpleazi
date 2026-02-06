import { Code, Palette, Briefcase, GraduationCap, Globe, TrendingUp } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building modern, responsive web applications using React, HTML, CSS, and JavaScript. Creating user-centric designs with clean, maintainable code.',
      features: [
        'Front-End Development',
        'Responsive Design',
        'UI/UX Implementation',
        'Web Application Architecture',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating compelling visual content, brand identity, and multimedia campaigns. Professional photography, videography, and digital content creation.',
      features: [
        'Brand Identity & Logo Design',
        'Social Media Graphics',
        'Photography & Videography',
        'Print & Digital Materials',
      ],
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Briefcase,
      title: 'Virtual Assistance',
      description: 'Comprehensive administrative support, project coordination, and digital workflow optimization for businesses and organizations.',
      features: [
        'Executive Administrative Support',
        'Social Media Management',
        'Content Strategy & Marketing',
        'Project Coordination',
      ],
      color: 'from-cyan-500 to-purple-500',
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'STEM education, curriculum development, and instructional design. Leveraging technology to enhance learning experiences and outcomes.',
      features: [
        'STEM Curriculum Development',
        'Teacher Training & Development',
        'Educational Technology Integration',
        'Academic Performance Consulting',
      ],
      color: 'from-green-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Geographic Consulting',
      description: 'Environmental sustainability research, spatial analysis, and geographic information services for planning and conservation projects.',
      features: [
        'Environmental Impact Assessment',
        'Spatial Analysis & Mapping',
        'Sustainability Research',
        'Urban Planning Consultation',
      ],
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: TrendingUp,
      title: 'Operations Management',
      description: 'Strategic operations planning, workflow optimization, and digital transformation for educational institutions and businesses.',
      features: [
        'Operations Strategy & Planning',
        'Workflow Automation',
        'Digital Transformation',
        'Compliance & Quality Assurance',
      ],
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
            Comprehensive solutions across technology, design, education, and administration. 
            Let's work together to bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-purple-300 transition-all duration-300 group border border-purple-100"
            >
              <div className={`h-32 sm:h-40 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <service.icon className="text-white z-10 group-hover:scale-110 transition-transform" size={48} />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                    >
                      <span className="text-purple-600 mt-0.5 font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
