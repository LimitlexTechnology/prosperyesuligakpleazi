import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: 'Educational Technology',
      category: 'Teaching & Learning',
      description: 'AI-enabled learning platforms and STEM curriculum development',
      color: 'from-purple-500 to-purple-600',
      emoji: '📚',
      content: 'Educational Technology has revolutionized how students learn and interact with course material. I have developed and implemented AI-enabled learning platforms that provide personalized learning experiences, adapting to each student\'s pace and learning style. These platforms integrate advanced technologies such as machine learning algorithms and interactive simulations to enhance student engagement. I have also designed comprehensive STEM curricula that emphasize hands-on, project-based learning approaches. My work includes creating digital learning modules, developing assessment tools, and training educators on technology integration. The impact includes measurable improvements in student outcomes, increased engagement, and development of critical 21st-century skills. These initiatives bridge the gap between traditional education and modern technology, preparing students for careers in STEM fields.',
      demoUrl: '',
      imageUrl: '/Educational Technology/images/project.jpg',
      videoUrl: '',
      githubUrl: '',
      gallery: [
        '/Educational Technology/images/screenshot1.jpg',
        '/Educational Technology/images/screenshot2.jpg',
        '/Educational Technology/images/screenshot3.jpg',
      ],
    },
    {
      title: 'Graphic Design',
      category: 'Creative Work',
      description: 'Brand identity, digital content, and visual storytelling',
      color: 'from-pink-500 to-purple-500',
      emoji: '🎨',
      content: 'My graphic design work spans brand identity development, digital content creation, and visual storytelling across multiple mediums. I have created comprehensive brand identities including logo design, color palettes, typography systems, and brand guidelines for educational institutions and businesses. My digital design portfolio includes web interfaces, social media graphics, marketing materials, and multimedia campaigns. I specialize in visual storytelling that communicates complex ideas through compelling imagery and design. My videography and photography work includes professional product photography, educational content creation, and promotional videos. Each project is approached with a focus on user experience, brand consistency, and visual impact. The convergence of design thinking and technical skill enables me to create visual solutions that are both aesthetically pleasing and strategically effective.',
      demoUrl: '',
      imageUrl: '',
      videoUrl: '',
      githubUrl: '',
      gallery: [],
      subcategories: [
        {
          name: 'Brand & Visual Communication',
          gallery: [
            '/Graphic Design/images/logos/Empowerlife logo signage mockup.jpg',
            '/Graphic Design/images/logos/Nalisa Logo mockup.jpg',
            '/Graphic Design/images/logos/THE WAY ELECTRICALS-1.jpg',
            '/Graphic Design/images/logos/NPA Bus Mockup.jpg',
            '/Graphic Design/images/logos/Card Excel MOCK.jpg',
            '/Graphic Design/images/logos/DonneJosh Logo Mockup.jpg',
            '/Graphic Design/images/logos/Eden MOCKUP.jpg',
            '/Graphic Design/images/logos/Excel car branding.jpg',
            '/Graphic Design/images/logos/Growelb One Vision mockup.jpg',
          ],
        },
        {
          name: 'Print & Publication Design',
          gallery: [
            '/Graphic Design/images/signages/56in by 48in front.jpg',
            '/Graphic Design/images/signages/A4 Eden.jpg',
            '/Graphic Design/images/signages/Eden MOCKUPP.jpg',
            '/Graphic Design/images/signages/Eform Survey Flyer 2.jpg',
            '/Graphic Design/images/signages/From Kotoku-1.jpg',
            '/Graphic Design/images/signages/Growelb Rollup Mockup.jpg',
            '/Graphic Design/images/signages/Growelb Signage.jpg',
            '/Graphic Design/images/signages/Hot and Tasty.jpg',
            '/Graphic Design/images/signages/Jemlina Banner-1.jpg',
            '/Graphic Design/images/signages/Review Vector Pullup-1.jpg',
          ],
        },
        {
          name: 'Product & Packaging Design',
          gallery: [
            '/Graphic Design/images/packaging/mockup1.jpg',
            '/Graphic Design/images/packaging/mockup2.jpg',
            '/Graphic Design/images/packaging/mockup3.jpg',
          ],
        },
      ],
    },
    {
      title: 'Web Development',
      category: 'Software Engineering',
      description: 'Modern web applications with React and front-end technologies',
      color: 'from-cyan-500 to-purple-500',
      emoji: '💻',
      content: 'I develop modern, responsive web applications using cutting-edge front-end technologies including React, HTML5, CSS3, and JavaScript. My approach emphasizes clean, maintainable code architecture and user-centric design principles. I have built full-stack educational platforms, e-commerce solutions, and content management systems. Each project prioritizes responsive design to ensure seamless experiences across desktop, tablet, and mobile devices. I utilize modern development tools and frameworks like Tailwind CSS for rapid prototyping and deployment. My work includes API integration, state management with React hooks, and optimization for performance and accessibility. I stay current with emerging technologies and best practices in web development, continuously improving my skills through certifications and hands-on projects. My commitment to excellence ensures that every web application I develop is scalable, maintainable, and delivers exceptional user experiences.',
      demoUrl: '',
      imageUrl: '/Web Development/images/project.jpg',
      videoUrl: '',
      githubUrl: '',
      gallery: [
        '/Web Development/images/screenshot1.jpg',
        '/Web Development/images/screenshot2.jpg',
        '/Web Development/images/screenshot3.jpg',
      ],
    },
    {
      title: 'Environmental Projects',
      category: 'Geography & Sustainability',
      description: 'Research and advocacy for environmental conservation',
      color: 'from-green-500 to-cyan-500',
      emoji: '🌍',
      content: 'My environmental work combines geographic expertise with advocacy for sustainability and conservation. I have conducted research on environmental challenges including waste management, deforestation, and climate change impacts. My research on "Household Solid Waste Management Practices at Nima and Mamobi, Accra" provided insights into urban environmental challenges and sustainable waste management solutions. I utilize GIS technology and spatial analysis to understand environmental patterns and inform conservation strategies. My advocacy work includes promoting environmental awareness through educational initiatives, community engagement, and digital campaigns. I work with environmental organizations to develop strategies that balance development needs with conservation goals. My projects address critical environmental issues such as urban sustainability, climate adaptation, and resource management. Through this work, I am contributing to a more sustainable future by bridging the gap between environmental science and practical implementation.',
      demoUrl: '',
      imageUrl: '/Environmental Projects/images/project.jpg',
      videoUrl: '',
      githubUrl: '',
      gallery: [
        '/Environmental Projects/images/project1.jpg',
        '/Environmental Projects/images/project2.jpg',
        '/Environmental Projects/images/project3.jpg',
      ],
    },
    {
      title: 'Administrative Solutions',
      category: 'Executive Assistance',
      description: 'Workflow optimization and digital transformation strategies',
      color: 'from-purple-600 to-pink-600',
      emoji: '📊',
      content: 'I provide comprehensive administrative and operational solutions that streamline business processes and drive organizational efficiency. My expertise includes workflow optimization, where I analyze current processes and implement improvements that reduce redundancy and increase productivity. I design digital transformation strategies that help organizations leverage technology for better operations. My work includes implementing integrated systems for document management, scheduling, communication, and reporting. I have successfully coordinated complex projects, managed stakeholder relationships, and ensured smooth execution of organizational objectives. My experience in operations management includes staff coordination, compliance management, and quality assurance. I excel at identifying inefficiencies and developing solutions that enhance operational excellence. By combining strategic thinking with practical implementation, I help organizations achieve their operational goals while improving employee satisfaction and reducing costs.',
      demoUrl: '',
      imageUrl: '/Administrative Solutions/images/project.jpg',
      videoUrl: '',
      githubUrl: '',
      gallery: [
        '/Administrative Solutions/images/workflow1.jpg',
        '/Administrative Solutions/images/workflow2.jpg',
        '/Administrative Solutions/images/workflow3.jpg',
      ],
    },
    {
      title: 'Social Media Campaigns',
      category: 'Digital Marketing',
      description: 'Brand management and content strategy for organizations',
      color: 'from-pink-600 to-purple-600',
      emoji: '📱',
      content: 'I develop and execute comprehensive social media campaigns that build brand awareness, engage audiences, and drive measurable results. My approach combines strategic content planning with creative execution across multiple platforms including Facebook, Instagram, Twitter, and LinkedIn. I create compelling visual content, including graphics and videos, that resonates with target audiences. My work includes developing content calendars, managing community engagement, and analyzing performance metrics to optimize campaign effectiveness. I have managed social media for educational institutions and environmental organizations, building engaged communities around sustainability and learning. My campaigns emphasize storytelling that connects emotionally with audiences while aligning with organizational goals. I stay current with social media trends and platform algorithm changes to ensure maximum reach and engagement. Each campaign is data-driven, with clear KPIs and regular optimization based on performance analytics. My comprehensive approach to social media management helps organizations build authentic connections with their audiences and achieve marketing objectives.',
      demoUrl: '',
      imageUrl: '/Social Media Campaigns/images/project.jpg',
      videoUrl: '',
      githubUrl: '',
      gallery: [
        '/Social Media Campaigns/images/campaign1.jpg',
        '/Social Media Campaigns/images/campaign2.jpg',
        '/Social Media Campaigns/images/campaign3.jpg',
      ],
    },
  ];

  return (
    <>
      <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Portfolio
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
              A showcase of my work across various domains including education, technology, 
              design, and environmental sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(index)}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-purple-300 transition-all duration-300 cursor-pointer border border-transparent"
              >
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <div className="text-white text-center p-6">
                    <div className="text-4xl sm:text-5xl opacity-80">
                      {item.emoji}
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="text-xs sm:text-sm text-purple-600 font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-purple-600 font-medium text-xs sm:text-sm group-hover:gap-2 transition-all">
                    View Details
                    <ExternalLink size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`h-48 sm:h-56 bg-gradient-to-br ${portfolioItems[selectedProject].color} flex items-center justify-center relative p-6`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <X className="text-gray-900" size={24} />
              </button>
              <div className="text-6xl opacity-90">
                {portfolioItems[selectedProject].emoji}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {portfolioItems[selectedProject].category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {portfolioItems[selectedProject].title}
              </h2>

              <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"></div>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                {portfolioItems[selectedProject].content}
              </p>

              {/* Gallery Section */}
              {portfolioItems[selectedProject].gallery && portfolioItems[selectedProject].gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {portfolioItems[selectedProject].gallery.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`Gallery image ${idx + 1}`}
                        className="w-full h-32 sm:h-40 object-cover rounded-lg border-2 border-purple-200 hover:border-purple-500 transition-all cursor-pointer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Subcategories Section */}
              {portfolioItems[selectedProject].subcategories && portfolioItems[selectedProject].subcategories.length > 0 && (
                <div className="mb-8">
                  {portfolioItems[selectedProject].subcategories.map((subcategory, subIdx) => (
                    <div key={subIdx} className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">{subcategory.name}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {subcategory.gallery.map((image, idx) => (
                          <img
                            key={idx}
                            src={image}
                            alt={`${subcategory.name} ${idx + 1}`}
                            className="w-full h-32 sm:h-40 object-cover rounded-lg border-2 border-purple-200 hover:border-purple-500 transition-all cursor-pointer"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* External Links Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {portfolioItems[selectedProject].demoUrl && (
                  <a
                    href={portfolioItems[selectedProject].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
                {portfolioItems[selectedProject].imageUrl && (
                  <a
                    href={portfolioItems[selectedProject].imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
                  >
                    🖼️
                    View Images
                  </a>
                )}
                {portfolioItems[selectedProject].videoUrl && (
                  <a
                    href={portfolioItems[selectedProject].videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all"
                  >
                    ▶️
                    Watch Video
                  </a>
                )}
                {portfolioItems[selectedProject].githubUrl && (
                  <a
                    href={portfolioItems[selectedProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition-all"
                  >
                    💻
                    GitHub Repo
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
