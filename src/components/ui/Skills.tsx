import { Code, Palette, Users, Settings, Trophy } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Users,
      title: 'Soft Skills',
      skills: [
        'Leadership and Team Coordination',
        'Problem-Solving and Critical Thinking',
        'Adaptability and Results Oriented',
        'Collaboration and Stakeholder Engagement',
        'Communication and Presentation',
      ],
    },
    {
      icon: Code,
      title: 'Technical Skills',
      skills: [
        'Project Planning and Management',
        'Proficient in Virtual and Administrative Tools',
        'Graphic Designing and Content Creation',
        'Front-End Development and Education Technology',
        'Digital Marketing and Social Media Management',
      ],
    },
    {
      icon: Palette,
      title: 'Creative Skills',
      skills: [
        'Graphic Design and Visual Communication',
        'Professional Photography and Videography',
        'Content Creation and Storytelling',
        'Brand Management and Strategy',
        'AI Media and Digital Content Creation',
      ],
    },
    {
      icon: Settings,
      title: 'Domain Expertise',
      skills: [
        'STEM Education and Instructional Design',
        'Geographic Information and Spatial Analysis',
        'Environmental Sustainability and Conservation',
        'Administrative Operations and Workflow Optimization',
        'Curriculum Development and Academic Assessment',
      ],
    },
  ];

  const awards = [
    {
      title: 'AI Media & Storytelling Certificate',
      organization: 'The Educators\' Network',
      year: '2025',
      description: 'AI-driven media creation and educational storytelling',
    },
    {
      title: 'Teaching License',
      organization: 'National Teaching Council – Ghana',
      year: '2021',
      description: 'Professional teaching certification',
    },
    {
      title: 'Certificate of Participation',
      organization: 'Youth Legacy Ghana',
      year: '2019',
      description: 'SDGs Research Conference: The Role of the Youth',
    },
    {
      title: 'Certificate of Recognition',
      organization: 'Prince Boateng SHS',
      year: '2018',
      description: 'Dedicated service as Geography Teacher',
    },
    {
      title: 'Certificate of Participation',
      organization: 'GEOSA-UEW',
      year: '2017',
      description: 'Ghana\'s Forestry Base and Climatic Influence',
    },
    {
      title: 'General Course Representative',
      organization: 'Geography Students Association',
      year: '2017-2019',
      description: 'Leadership in GEOSA-UEW',
    },
    {
      title: 'Audit Board Secretary',
      organization: 'Geography Students Association',
      year: '2017-2018',
      description: 'Financial oversight and accountability',
    },
    {
      title: '2nd Runner-Up - 5000m Sprint',
      organization: 'Inter-Houses Athletic Competition',
      year: '2012',
      description: 'Academic institution achievement',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Competencies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                  >
                    <span className="text-purple-600 mt-1 font-bold flex-shrink-0">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Honors & Awards
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 sm:p-6 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex-shrink-0 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
              </div>
              <span className="inline-block bg-purple-200 text-purple-800 text-xs px-3 py-1 rounded-full mb-3 font-medium w-fit">
                {award.year}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug flex-grow">
                {award.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2 font-medium">
                {award.organization}
              </p>
              {award.description && (
                <p className="text-xs text-gray-500 leading-relaxed">
                  {award.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
