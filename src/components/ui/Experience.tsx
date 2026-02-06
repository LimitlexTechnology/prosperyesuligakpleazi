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
        'Lead lesson planning, lesson supervision, and performance evaluation across JHS levels',
        'Coordinate teachers\' workloads, meetings, and professional development sessions',
        'Supervise teachers to enhance instructional quality and classroom management',
        'Oversee the preparation and moderation of internal and external examinations (BECE)',
        'Ensure effective implementation of continuous assessments and academic interventions',
      ],
    },
    {
      title: 'Science Facilitator',
      company: 'Mirekua International Community School',
      location: 'Opah, Accra',
      period: 'October 2023 – Present',
      current: true,
      description: [
        'Improve Science performance through practical, student-centered teaching',
        'Introduce low-cost instructional materials and led vibrant school science club',
        'Promote environmental awareness through science projects',
        'Integrate digital tools and simulations to boost engagement and curiosity',
      ],
    },
    {
      title: 'Director of Operations',
      company: 'UpEduk Konsortium',
      location: 'Accra, Ghana',
      period: 'January 2022 – Present',
      current: true,
      description: [
        'Lead day-to-day operations to ensure effective delivery of educational programs',
        'Design and implement streamlined workflows for content development, AI enabled learning and training delivery',
        'Ensure full compliance with educational regulations and internal operations policies',
        'Collaborate with IT, finance and marketing teams to execute strategic objectives',
      ],
    },
    {
      title: 'Inventory Officer',
      company: 'Growelb Agrochemicals Enterprise',
      location: 'Nsawam, Ghana',
      period: 'November 2024 – July 2025',
      current: false,
      description: [
        'Managed inventory systems, digital marketing strategies and customer engagement',
        'Enhanced organizational efficiency and online presence',
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'Limitless Multimedia',
      location: 'Remote',
      period: 'April 2019 – Present',
      current: true,
      description: [
        'Design creative visuals and branding materials for diverse clients and projects',
        'Produce professional photography and videography, enhancing visual storytelling',
        'Collaborate on multimedia campaigns, ensuring high-quality digital and print outputs',
        'Utilize modern design software and tools to deliver engaging and impactful content',
      ],
    },
    {
      title: 'Mathematics and Science Facilitator',
      company: 'Eden Hills International School',
      location: 'Kutunse, Ghana',
      period: 'January 2021 – December 2025',
      current: false,
      description: [
        'Boosted student performance through innovative STEM projects and teaching strategies',
        'Coordinated graduation music and choreography, delivering memorable school events',
        'Composed school anthem and educational songs in promoting school values',
      ],
    },
    {
      title: 'Administrative Assistant',
      company: 'Revealedtruth Properties Ltd.',
      location: 'Pobiman, Ghana',
      period: 'January 2019 – August 2020',
      current: false,
      description: [
        'Provided administrative and operational support to ensure efficient office management',
        'Coordinated recruitment, communication, and marketing activities',
        'Managed company marketing channels, including social media and website updates, boosting brand visibility',
        'Oversaw Airbnb and booking reservations, ensuring excellent client service and smooth guest experiences',
      ],
    },
    {
      title: 'Geography Teacher',
      company: 'Prince Boateng Senior High School',
      location: 'Nsawam, Ghana',
      period: 'August 2018 – January 2019',
      current: false,
      description: [
        'Taught Physical, Human, and Practical Geography in line with the NACCA curriculum',
        'Enhanced students\' academic performance',
        'Mentored students through extracurricular roles as an NCCE and Scripture Union patron',
      ],
    },
    {
      title: 'Social Media Coordinator',
      company: 'Green Innovation for People and Nature',
      location: 'Winneba, Ghana',
      period: 'August 2017 – December 2024',
      current: false,
      description: [
        'Designed engaging graphics and digital content to promote environmental sustainability',
        'Managed social media platforms to boost visibility and audience engagement',
        'Supported organizational programs through creative media, campaigns, and content strategy aligned with conservation goals',
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
