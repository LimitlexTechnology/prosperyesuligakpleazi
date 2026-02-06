import React, { useState } from 'react';

export function Hero() {
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = ['Home', 'About', 'Experience', 'Portfolio', 'Blog', 'Services'];

  const scrollToSection = (section: string) => {
    setActiveNav(section);
    const elementId = section.toLowerCase();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-cyan-100">
      {/* Navigation */}
      <nav className="border-b-2 border-cyan-400 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Prosper</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${
                    activeNav === item
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('Contact')}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-md text-sm font-medium hover:from-purple-700 hover:to-purple-600 transition-all"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm<br />
              Prosper Yesuli
            </h1>
            <p className="text-gray-700 text-lg mb-2">
              I'm a{' '}
              <span className="font-bold">Software Engineer</span>,{' '}
              <span className="font-bold">Graphic Designer</span>,{' '}
              <span className="font-bold">Executive Assistant</span>,{' '}
              <span className="font-bold">Geographer</span> and{' '}
              <span className="font-bold">Educationist</span>
            </p>
            <p className="text-gray-700 text-lg mb-8">
              based in Ghana. I deliver comprehensive solutions across technology, design, 
              education, and administration—building innovative web applications, creating 
              compelling visual content, managing operations, and driving academic excellence 
              through STEM education and environmental sustainability initiatives.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-md font-medium hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg"
            >
              Say Hello!
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">10+ Y.</div>
                <div className="text-sm text-gray-600">Experience</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">100+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-cyan-300 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-4 shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Prosper Yesuli Gakpleazi"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}