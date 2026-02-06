import React, { useState } from 'react';

export function Hero() {
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Experience', 'Education', 'Skills', 'Portfolio', 'Blog', 'Services', 'Contact'];

  const scrollToSection = (section: string) => {
    setActiveNav(section);
    setMobileMenuOpen(false);
    const elementId = section.toLowerCase();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-cyan-100">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50 border-b border-purple-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">Prosper</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-semibold transition-all px-4 py-2 rounded-lg ${
                    activeNav === item
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-900 hover:text-purple-600 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-purple-200/50">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition-all ${
                    activeNav === item
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Add padding for fixed navbar */}
      <div className="pt-16"></div>

      {/* Hero Content */}
      <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Hello, I'm<br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-500 bg-clip-text text-transparent">Prosper Yesuli</span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
            </div>

            <div className="space-y-3">
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                I'm a{' '}
                <span className="font-bold text-purple-600">Software Engineer</span>,{' '}
                <span className="font-bold text-pink-600">Graphic Designer</span>,{' '}
              </p>
              <p className="text-base sm:text-lg text-gray-700 font-medium">
                <span className="font-bold text-cyan-600">Executive Assistant</span>,{' '}
                <span className="font-bold text-green-600">Geographer</span> and{' '}
                <span className="font-bold text-indigo-600">Educationist</span>
              </p>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              based in Ghana. I deliver comprehensive solutions across technology, design, 
              education, and administration—building innovative web applications, creating 
              compelling visual content, managing operations, and driving academic excellence 
              through STEM education and environmental sustainability initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all"
              >
                View My Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8">
              <div className="bg-white/60 backdrop-blur p-4 sm:p-6 rounded-xl text-center border border-purple-100 hover:border-purple-300 transition-all hover:shadow-md">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-1">10+ Y.</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Experience</div>
              </div>
              <div className="bg-white/60 backdrop-blur p-4 sm:p-6 rounded-xl text-center border border-purple-100 hover:border-purple-300 transition-all hover:shadow-md">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-500 bg-clip-text text-transparent mb-1">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Projects</div>
              </div>
              <div className="bg-white/60 backdrop-blur p-4 sm:p-6 rounded-xl text-center border border-purple-100 hover:border-purple-300 transition-all hover:shadow-md">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-purple-500 bg-clip-text text-transparent mb-1">100+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-cyan-300 rounded-3xl blur-2xl opacity-75 transform -rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform hover:scale-105 transition-transform">
                <img
                  src="/profile.jpg"
                  alt="Prosper Yesuli Gakpleazi"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
