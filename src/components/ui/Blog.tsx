import { BookOpen, Code, Lightbulb, Globe, GraduationCap, Rocket } from 'lucide-react';

export function Blog() {
  const blogPosts = [
    {
      icon: Code,
      title: 'The Future of Web Development',
      category: 'Technology',
      excerpt: 'Exploring modern front-end technologies like React, AI-driven tools, and the evolution of user-centric design in creating immersive web experiences.',
      date: 'Feb 2026',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: GraduationCap,
      title: 'Transforming Education with Technology',
      category: 'Education',
      excerpt: 'How AI-enabled learning platforms and STEM education are revolutionizing the classroom experience and improving student outcomes across Africa.',
      date: 'Jan 2026',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Globe,
      title: 'Geography Meets Digital Innovation',
      category: 'Geography',
      excerpt: 'Leveraging GIS technology and spatial analysis to address environmental challenges and promote sustainability in urban planning.',
      date: 'Dec 2025',
      color: 'from-green-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Design Thinking in the Digital Age',
      category: 'Design',
      excerpt: 'The intersection of graphic design, storytelling, and brand strategy in creating compelling visual narratives for modern audiences.',
      date: 'Nov 2025',
      color: 'from-pink-600 to-purple-600',
    },
    {
      icon: Rocket,
      title: 'Administrative Excellence Through Tech',
      category: 'Executive Assistance',
      excerpt: 'How virtual assistance tools, workflow automation, and digital transformation are reshaping modern administrative operations.',
      date: 'Oct 2025',
      color: 'from-cyan-500 to-purple-500',
    },
    {
      icon: BookOpen,
      title: 'Lifelong Learning & Professional Growth',
      category: 'Career Development',
      excerpt: 'The importance of continuous education, certifications, and adapting to emerging trends in technology and education sectors.',
      date: 'Sep 2025',
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
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
  );
}
