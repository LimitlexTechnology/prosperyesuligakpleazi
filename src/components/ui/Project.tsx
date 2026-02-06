import { useState } from 'react';
import { ExternalLink, X, Code2 } from 'lucide-react';

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            '/Graphic Design/images/Brand & Visual Communication/Empowerlife logo signage mockup.jpg',
            '/Graphic Design/images/Brand & Visual Communication/Nalisa Logo mockup.jpg',
            '/Graphic Design/images/Brand & Visual Communication/THE WAY ELECTRICALS-1.jpg',
            '/Graphic Design/images/Brand & Visual Communication/NPA Bus Mockup.jpg',
            '/Graphic Design/images/Brand & Visual Communication/Card Excel MOCK.jpg',
            '/Graphic Design/images/Brand & Visual Communication/DonnieJosh Logo Mockup.jpg',
            '/Graphic Design/images/Brand & Visual Communication/Eden MOCKUP.jpg',
            '/Graphic Design/images/Brand & Visual Communication/Excel car branding.jpg',
            '/Graphic Design/images/Brand & Visual Communication/Growelb One Vision mockup.jpg',
          ],
        },
        {
          name: 'Print & Publication Design',
          gallery: [
            '/Graphic Design/images/Print & Publication Design/Augustina Banner.jpg',
            '/Graphic Design/images/Print & Publication Design/Naa Pullup.jpg',
            '/Graphic Design/images/Print & Publication Design/Vipex Signage.jpg',
            '/Graphic Design/images/Print & Publication Design/Victor Pullup Mock.jpg',
            '/Graphic Design/images/Print & Publication Design/Ohemaa Kitchen Flyer.jpg',
            '/Graphic Design/images/Print & Publication Design/NisiaNaya Freight Flyer.jpg',
            '/Graphic Design/images/Print & Publication Design/JKT Broadcast.jpg',
            '/Graphic Design/images/Print & Publication Design/Global Heatwave Main.jpg',
            '/Graphic Design/images/Print & Publication Design/CITATION MOCKUP.jpg',
            '/Graphic Design/images/Print & Publication Design/A2 STICKER.jpg',
          ],
        },
        {
          name: 'Product & Packaging Design',
          gallery: [
            '/Graphic Design/images/Product & Packaging Design/Crystal Hairs Packaging.jpg',
            '/Graphic Design/images/Product & Packaging Design/Naya Shea Butter.jpg',
            '/Graphic Design/images/Product & Packaging Design/Naya Tombrown.jpg',
            '/Graphic Design/images/Product & Packaging Design/Naya Groundnut.jpg',
            '/Graphic Design/images/Product & Packaging Design/Detox 5inX3in.jpg',
            '/Graphic Design/images/Product & Packaging Design/3 x 4.5 Groundnut.jpg',
            '/Graphic Design/images/Product & Packaging Design/CFS 10cm by 6cm.png',
            '/Graphic Design/images/Product & Packaging Design/N Tigernut.jpg',
          ],
        },
        {
          name: 'Apparel & Merchandise',
          gallery: [
            '/Graphic Design/images/t-shirt-printing/6th White.jpg',
            '/Graphic Design/images/t-shirt-printing/Charitable Shirt Mockup 1.jpg',
            '/Graphic Design/images/t-shirt-printing/Charitable Shirt Mockup 2.jpg',
            '/Graphic Design/images/t-shirt-printing/Donniejosh Shirt Mockup 2.jpg',
            '/Graphic Design/images/t-shirt-printing/Naya shirt.jpg',
            '/Graphic Design/images/t-shirt-printing/Warriors Gold.jpg',
          ]
        }
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
      imageUrl: '/Web Development/images/csa_hub.png',
      videoUrl: '',
      githubUrl: '',
      gallery: [
        '/Web Development/images/csa_hub.png',
        '/Web Development/images/screenshot2.jpg',
        '/Web Development/images/screenshot3.jpg',
      ],
      projects: [
        {
          title: 'Climate Smart Agriculture Hub (CSA HUB)',
          type: 'Web Application',
          description: 'Future-Proof Your Farm: Empowering the next generation of farmers with real-time climate intelligence and sustainable practices.',
          image: '/Web Development/images/csa_hub.png',
          link: '#'
        },
        {
          title: 'Mount Kenya Wildlife Conservancy',
          type: 'Website',
          description: 'A non-profit trust dedicated to preserving the environment and the wildlife within.',
          image: '/Web Development/images/screenshot2.jpg',
          link: '#'
        },
        {
          title: 'Sustainable Tech Solutions',
          type: 'Corporate Website',
          description: 'Leading the way in eco-friendly technology implementation for modern businesses.',
          image: '/Web Development/images/screenshot3.jpg',
          link: '#'
        }
      ]
    },
    {
      title: 'Environmental Projects',
      category: 'Geography & Sustainability',
      description: 'Research and advocacy for environmental conservation',
      color: 'from-green-500 to-cyan-500',
      emoji: '🌍',
      content: 'My environmental work combines geographic expertise with advocacy for sustainability and conservation. A flagship initiative I successfully undertook is the "Clean & Green Environmental Project" at Mirekua International Community School (MICS). Themed "Greening Today, Sustaining Tomorrow," this project provided learners with a practical application of classroom theory while raising awareness about good sanitation and its health benefits. Activities included a community clean-up exercise covering the Sarpeiman-Ablorman-Opah-China Mall route, public education on environmental health, and direct engagement with residents. I also conduct research on environmental challenges including waste management and climate change impacts, such as my study on "Household Solid Waste Management Practices at Nima and Mamobi, Accra." I utilize GIS technology for spatial analysis to inform conservation strategies and work with organizations to develop sustainability strategies that balance development needs with conservation goals.',
      demoUrl: '',
      imageUrl: '/Environmental Projects/images/clean_and_green_flyer.jpg',
      videoUrl: 'https://www.linkedin.com/posts/prosper-yesuli-gakpleazi_environmentalleadership-sustainability-stewardship-activity-7398170649623564288-9FYo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC3_QPIBCPszUSDddRFmduJveUAI3aPFPoA',
      embedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7398170546133262337?compact=1',
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

  const handleImageClick = (image: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(image);
  };

  const isWebDev = selectedProject !== null && portfolioItems[selectedProject].title === 'Web Development';
  const isEnvironmental = selectedProject !== null && portfolioItems[selectedProject].title === 'Environmental Projects';

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
          <div className={`bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto ${isWebDev || isEnvironmental ? 'max-w-6xl' : 'max-w-4xl'} ${isWebDev ? 'bg-neutral-950 text-white' : ''}`}>

            {/* Modal Header */}
            {isWebDev ? (
              <div className="p-8 flex justify-between items-start">
                <div>
                  <span className="text-sm font-medium text-pink-500 tracking-wider uppercase mb-2 block">
                    Portfolio
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Web Development
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-8"></div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>
            ) : (
              <div className={`h-48 sm:h-56 bg-gradient-to-br ${portfolioItems[selectedProject].color} flex items-center justify-center relative p-6`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all shadow-md z-10"
                >
                  <X className="text-gray-900" size={24} />
                </button>
                <div className="text-6xl opacity-90 animate-bounce-slow">
                  {portfolioItems[selectedProject].emoji}
                </div>
              </div>
            )}


            {/* Modal Content */}
            <div className={`p-6 sm:p-8 ${isWebDev ? 'pt-0' : ''}`}>
              {/* Environmental Projects Layout */}
              {isEnvironmental && (
                <div className="space-y-12">
                  {/* Header Section */}
                  <div className="border-b border-gray-100 pb-8">
                    <span className="text-sm font-medium text-green-600 tracking-wider uppercase mb-3 block">
                      {portfolioItems[selectedProject].category}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                      {portfolioItems[selectedProject].title}
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left: Flyer Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-zoom-in"
                      onClick={(e) => handleImageClick('/Environmental Projects/images/clean_and_green_flyer.jpg', e)}>
                      <img
                        src="/Environmental Projects/images/clean_and_green_flyer.jpg"
                        alt="Clean & Green Flyer"
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-opacity">
                          View Full Size
                        </span>
                      </div>
                    </div>

                    {/* Right: Featured Video (Tall Embed) */}
                    {portfolioItems[selectedProject].embedUrl && (
                      <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                        <iframe
                          src={portfolioItems[selectedProject].embedUrl}
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                          title="Clean & Green Environmental Project"
                        ></iframe>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Standard Project Layout (Non-WebDev, Non-Environmental) */}
              {!isWebDev && !isEnvironmental && (
                <>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {portfolioItems[selectedProject].category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {portfolioItems[selectedProject].title}
                  </h2>

                  <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"></div>
                </>
              )}

              <div className={`mb-16 ${isEnvironmental ? 'hidden' : ''} ${isWebDev ? 'flex flex-col lg:flex-row gap-12 items-start' : ''}`}>
                <div className={`${isWebDev ? 'lg:w-2/3' : 'w-full'}`}>
                  <p className={`${isWebDev ? 'text-gray-400 text-lg md:text-xl leading-relaxed' : 'text-gray-700 leading-relaxed text-base sm:text-lg mb-6'}`}>
                    {portfolioItems[selectedProject].content}
                  </p>
                </div>

                {isWebDev && (
                  <div className="lg:w-1/3 w-full bg-neutral-900/50 rounded-xl p-6 border border-white/5">
                    <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                      <Code2 className="text-pink-500" /> Technologies
                    </h4>
                    <div className="grid grid-cols-3 gap-6">
                      {/* React */}
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-full h-full" />
                        </div>
                        <span className="text-xs text-gray-400">React</span>
                      </div>
                      {/* HTML5 */}
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-full h-full" />
                        </div>
                        <span className="text-xs text-gray-400">HTML5</span>
                      </div>
                      {/* CSS3 */}
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-full h-full" />
                        </div>
                        <span className="text-xs text-gray-400">CSS3</span>
                      </div>
                      {/* JavaScript */}
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-full h-full rounded" />
                        </div>
                        <span className="text-xs text-gray-400">JS</span>
                      </div>
                      {/* Tailwind */}
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center p-2 group-hover:bg-white/10 transition-colors">
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-full h-full" />
                        </div>
                        <span className="text-xs text-gray-400">Tailwind</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Web Development Showcase Layout */}
              {isWebDev && portfolioItems[selectedProject].projects && (
                <div className="space-y-24 mb-12">
                  {portfolioItems[selectedProject].projects.map((project, idx) => (
                    <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                      {/* Laptop Mockup */}
                      <div className="w-full lg:w-3/5">
                        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] max-w-full shadow-2xl">
                          <div className="rounded-lg overflow-hidden h-full bg-white">
                            <img
                              src={project.image}
                              className="w-full h-full object-contain object-top hover:object-bottom transition-all duration-[2000ms]"
                              alt={project.title}
                            />
                          </div>
                        </div>
                        <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[90%] md:h-[24px] md:max-w-[85%] z-20">
                          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[5px] w-[80px] bg-gray-800 rounded-b-md"></div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-full lg:w-2/5 text-center lg:text-left">
                        <span className="text-pink-500 font-medium tracking-wide text-sm mb-3 block">
                          {project.type}
                        </span>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-700 hover:border-pink-500 hover:bg-pink-500 text-white transition-all group"
                        >
                          <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Embedded Video Section */}
              {!isWebDev && !isEnvironmental && portfolioItems[selectedProject].embedUrl && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Featured Video</h3>
                  <div className="relative w-full pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <iframe
                      src={portfolioItems[selectedProject].embedUrl}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title="Embedded video"
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Gallery Section - Masonry Layout */}
              {!isWebDev && portfolioItems[selectedProject].gallery && portfolioItems[selectedProject].gallery.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gallery</h3>
                  <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                    {portfolioItems[selectedProject].gallery.map((image, idx) => (
                      <div
                        key={idx}
                        className="break-inside-avoid relative group cursor-zoom-in overflow-hidden rounded-lg border border-gray-100"
                        onClick={(e) => handleImageClick(image, e)}
                      >
                        <img
                          src={image}
                          alt={`Gallery image ${idx + 1}`}
                          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded-full">View</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Subcategories Section */}
              {!isWebDev && portfolioItems[selectedProject].subcategories && portfolioItems[selectedProject].subcategories.length > 0 && (
                <div className="mb-8">
                  {portfolioItems[selectedProject].subcategories.map((subcategory, subIdx) => (
                    <div key={subIdx} className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">{subcategory.name}</h3>
                      <div className="columns-2 sm:columns-3 gap-4 space-y-4">
                        {subcategory.gallery.map((image, idx) => (
                          <div
                            key={idx}
                            className="break-inside-avoid relative group cursor-zoom-in overflow-hidden rounded-lg border border-gray-100"
                            onClick={(e) => handleImageClick(image, e)}
                          >
                            <img
                              src={image}
                              alt={`${subcategory.name} ${idx + 1}`}
                              className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <span className="text-white text-sm font-medium bg-black bg-opacity-50 px-3 py-1 rounded-full">View</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* External Links Section */}
              {!isWebDev && !isEnvironmental && (
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
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className={`w-full sm:w-auto px-6 py-3 rounded-lg font-medium transition-all ${isWebDev ? 'bg-white text-black hover:bg-gray-200' : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'}`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
