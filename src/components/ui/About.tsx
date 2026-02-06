import { Code, Palette, Briefcase, Globe, GraduationCap } from 'lucide-react';

export function About() {
  const roles = [
    {
      icon: Code,
      title: 'Software Engineer',
      description: 'Building modern web applications with front-end technologies (HTML, CSS, JavaScript, React). Currently pursuing BS in Computer Science at University of The People and ALX Front-End ProDev certification.',
    },
    {
      icon: Palette,
      title: 'Graphic Designer',
      description: 'Creating compelling visual content, branding materials, professional photography and videography. Expert in digital and print design with 7+ years of experience delivering engaging multimedia campaigns.',
    },
    {
      icon: Briefcase,
      title: 'Virtual Assistant & Operations Manager',
      description: 'Expert in administrative support, project coordination, digital content creation, social media strategy, brand management, and workflow optimization for seamless operations.',
    },
    {
      icon: Globe,
      title: 'Geographer & Sustainability Advocate',
      description: 'BA in Geography Education with research focus on environmental sustainability, spatial analysis, and climate change. Dedicated to promoting conservation and digital transformation for environmental goals.',
    },
    {
      icon: GraduationCap,
      title: 'Educator & STEM Specialist',
      description: 'Licensed educator and Head of JHS Department, driving academic excellence through innovative STEM instruction. Proficient in instructional design, curriculum development, and tech-based learning integration.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mt-6 leading-relaxed">
            Results-driven and versatile professional with proven excellence across education, administration, and technology sectors. 
            Experienced Executive Assistant adept in administrative support, communication, social media strategy, brand management, digital content creation and marketing. 
            Skilled in instructional design and STEM education, driving improved academic performance through innovative, tech-based learning. 
            Strategic problem-solver with strong leadership, communication, and collaboration skills. 
            Passionate about leveraging education, media, and technology to promote sustainability and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-purple-100 hover:border-purple-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <role.icon className="text-white" size={28} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                {role.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
