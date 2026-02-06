import { useState } from 'react';
import { BookOpen, Code, Lightbulb, Globe, GraduationCap, Rocket, X } from 'lucide-react';

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      icon: Code,
      title: 'The Future of Web Development',
      category: 'Technology',
      excerpt: 'Exploring modern front-end technologies like React, AI-driven tools, and the evolution of user-centric design in creating immersive web experiences.',
      date: 'Feb 2026',
      color: 'from-purple-500 to-purple-600',
      content: 'The landscape of web development is rapidly evolving. Modern frameworks like React, Vue, and Angular have revolutionized how we build interactive user interfaces. AI-driven tools are now assisting developers in writing code, debugging, and optimizing performance. The shift towards component-based architecture, serverless computing, and progressive web apps represents a fundamental change in how we approach web development. As a developer, staying updated with these technologies is crucial for building scalable, maintainable, and user-centric applications that meet the demands of today\'s digital ecosystem. The future promises even more innovation with WebAssembly, advanced AI integration, and improved developer experience.',
    },
    {
      icon: GraduationCap,
      title: 'Transforming Education with Technology',
      category: 'Education',
      excerpt: 'How AI-enabled learning platforms and STEM education are revolutionizing the classroom experience and improving student outcomes across Africa.',
      date: 'Jan 2026',
      color: 'from-pink-500 to-purple-500',
      content: 'Technology has opened new frontiers in education, particularly in developing regions like Africa. AI-enabled learning platforms provide personalized learning experiences, adapting to each student\'s pace and learning style. STEM education initiatives are equipping students with critical thinking and problem-solving skills essential for the 21st century. Interactive simulations, virtual laboratories, and online collaboration tools have made quality education more accessible than ever before. Teachers are becoming facilitators rather than just content deliverers, guiding students through exploratory learning journeys. The integration of technology in education is not just about adopting tools; it\'s about transforming pedagogies to foster deeper engagement, creativity, and meaningful learning outcomes that prepare students for a technology-driven future.',
    },
    {
      icon: Globe,
      title: 'Geography Meets Digital Innovation',
      category: 'Geography',
      excerpt: 'Leveraging GIS technology and spatial analysis to address environmental challenges and promote sustainability in urban planning.',
      date: 'Dec 2025',
      color: 'from-green-500 to-cyan-500',
      content: 'Geographic Information Systems (GIS) and spatial analysis have become indispensable tools for understanding and solving complex environmental and urban challenges. From mapping deforestation patterns to analyzing climate change impacts, GIS technology provides visual representations of data that facilitate informed decision-making. Urban planners use spatial analysis to optimize transportation networks, identify suitable locations for development, and plan sustainable cities. Remote sensing technology enables us to monitor environmental changes in real-time, from sea-level rise to urban sprawl. By combining geographical knowledge with digital innovation, we can create data-driven solutions that promote environmental sustainability, improve resource management, and build resilient communities. The convergence of geography and technology is essential for addressing global challenges like climate change and rapid urbanization.',
    },
    {
      icon: Lightbulb,
      title: 'Design Thinking in the Digital Age',
      category: 'Design',
      excerpt: 'The intersection of graphic design, storytelling, and brand strategy in creating compelling visual narratives for modern audiences.',
      date: 'Nov 2025',
      color: 'from-pink-600 to-purple-600',
      content: 'Design thinking has become a powerful methodology for solving problems across industries. In the digital age, visual communication is paramount. Graphic design goes beyond aesthetics; it\'s about creating intuitive user experiences and telling compelling stories that resonate with audiences. Successful brand strategies leverage visual narratives that align with customer values and aspirations. From logo design to multimedia campaigns, every visual element serves a purpose in communicating brand identity and values. The intersection of design, psychology, and technology enables designers to create experiences that engage, inspire, and motivate action. By employing design thinking principles—empathy, prototyping, and iterative testing—we can craft digital solutions that not only look beautiful but also solve real user problems and drive meaningful business outcomes.',
    },
    {
      icon: Rocket,
      title: 'Administrative Excellence Through Tech',
      category: 'Executive Assistance',
      excerpt: 'How virtual assistance tools, workflow automation, and digital transformation are reshaping modern administrative operations.',
      date: 'Oct 2025',
      color: 'from-cyan-500 to-purple-500',
      content: 'Administrative excellence in the modern era demands a strategic embrace of technology. Virtual assistance tools have democratized access to professional support, enabling teams to streamline operations without proportional cost increases. Workflow automation eliminates repetitive tasks, freeing professionals to focus on strategic initiatives. Digital transformation in administrative operations involves implementing integrated systems for document management, scheduling, communication, and reporting. Cloud-based collaboration tools enable seamless teamwork across geographical boundaries. From AI-powered scheduling assistants to intelligent document processing systems, technology is fundamentally reshaping how organizations manage operations. The key to administrative excellence is not just adopting tools, but strategically implementing them to enhance efficiency, improve accuracy, and enable better decision-making. Organizations that master this transformation gain competitive advantages through improved productivity, reduced costs, and enhanced employee satisfaction.',
    },
    {
      icon: BookOpen,
      title: 'Lifelong Learning & Professional Growth',
      category: 'Career Development',
      excerpt: 'The importance of continuous education, certifications, and adapting to emerging trends in technology and education sectors.',
      date: 'Sep 2025',
      color: 'from-purple-600 to-pink-600',
      content: 'In a rapidly changing world, lifelong learning is not just beneficial—it\'s essential. The skills that were in demand five years ago may be obsolete today. Continuous education through certifications, online courses, and skill development programs helps professionals stay competitive and adaptable. Whether pursuing advanced degrees, industry certifications, or self-directed learning, the commitment to growth differentiates successful professionals. Emerging technologies like AI, blockchain, and cloud computing require professionals to continually update their knowledge base. Beyond technical skills, soft skills such as leadership, communication, and emotional intelligence are increasingly valued. Organizations that foster a culture of learning attract and retain top talent. Professional growth is not a destination but a continuous journey of exploration, experimentation, and improvement. By embracing lifelong learning, we position ourselves for career advancement, increased opportunities, and greater satisfaction in our professional pursuits.',
    },
  ];

  return (
    <>
      <section id="blog" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Insights & Perspectives
            </h2>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
              Exploring the intersection of education, technology, design, and sustainability 
              through research, innovation, and practical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                onClick={() => setSelectedPost(index)}
                className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl overflow-hidden border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`h-32 sm:h-40 bg-gradient-to-br ${post.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <post.icon className="text-white z-10" size={40} />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      {selectedPost !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`h-48 sm:h-56 bg-gradient-to-br ${blogPosts[selectedPost].color} flex items-center justify-center relative p-6`}>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
              >
                <X className="text-gray-900" size={24} />
              </button>
              {(() => {
                const IconComponent = blogPosts[selectedPost].icon;
                return <IconComponent className="text-white" size={64} />;
              })()}
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {blogPosts[selectedPost].category}
                </span>
                <span className="text-xs text-gray-500">{blogPosts[selectedPost].date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {blogPosts[selectedPost].title}
              </h2>

              <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6"></div>

              <p className="text-gray-700 leading-relaxed text-base sm:text-lg whitespace-pre-wrap mb-6">
                {blogPosts[selectedPost].content}
              </p>

              <button
                onClick={() => setSelectedPost(null)}
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
