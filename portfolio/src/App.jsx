import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, Mail, Linkedin, Github, Coffee, Instagram, Twitter } from 'lucide-react';

const CreativePortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  // State for image carousel within each project
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  // Touch/swipe support state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  const projects = [
    {
      title: 'Gym Website',
      client: 'UrbanFit - Gym Services',
      year: '2024',
      description: 'High-performance fitness website focused on lead generation.',
      challenge: 'Low conversion and outdated UI.',
      solution: 'Modern UI, fast load times, mobile-first layout.',
      results: ['+3x inquiry rate', '<2s load time'],
      tags: ['React', 'Tailwind', 'Vite'],
      images: [
        '/assets/work/gym/1.png',
        '/assets/work/gym/2.png',
        '/assets/work/gym/3.png',
        '/assets/work/gym/4.png',
        '/assets/work/gym/5.png'
      ]
    },
    {
      title: 'Restaurant Website',
      client: 'Restaurant Brand',
      year: '2024',
      description: 'Digital presence for a restaurant with menu, reservations, and branding.',
      challenge: 'No online visibility and poor UX.',
      solution: 'Elegant design, clear CTAs, optimized menu layout.',
      results: ['Increased table reservations', 'Better mobile engagement'],
      tags: ['React', 'CSS', 'Netlify'],
      images: [
        '/assets/work/restaurant/1.png',
        '/assets/work/restaurant/2.png',
        '/assets/work/restaurant/3.png',
        '/assets/work/restaurant/4.png',
        '/assets/work/restaurant/5.png'
      ]
    },
    {
      title: 'Cafe Website',
      client: 'Cafe Brand',
      year: '2024',
      description: 'Minimal aesthetic cafe website with storytelling focus.',
      challenge: 'Weak brand identity online.',
      solution: 'Visual-first layout with smooth animations.',
      results: ['Improved brand recall', 'Higher social traffic'],
      tags: ['React', 'Framer Motion'],
      images: [
        '/assets/work/cafe/1.png',
        '/assets/work/cafe/2.png',
        '/assets/work/cafe/3.png'
      ]
    },
    {
      title: 'Guest House Website',
      client: 'Hospitality Brand',
      year: '2024',
      description: 'Booking-focused website for a guest house.',
      challenge: 'Manual booking process.',
      solution: 'Clean UX with booking inquiry flow.',
      results: ['Reduced booking friction', 'Higher inquiries'],
      tags: ['React', 'Node.js'],
      images: [
        '/assets/work/guesthouse/1.png',
        '/assets/work/guesthouse/2.png',
        '/assets/work/guesthouse/3.png',
        '/assets/work/guesthouse/4.png'
      ]
    },
    {
      title: 'Clothing Website',
      client: 'Fashion Brand',
      year: '2024',
      description: 'Fashion website emphasizing product presentation.',
      challenge: 'Low engagement and cluttered layout.',
      solution: 'Grid-based design, performance optimization.',
      results: ['Improved session time', 'Faster page loads'],
      tags: ['React', 'Tailwind'],
      images: [
        '/assets/work/clothing/1.png',
        '/assets/work/clothing/2.png',
        '/assets/work/clothing/3.png',
        '/assets/work/clothing/4.png',
        '/assets/work/clothing/5.png'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Working with them felt less like hiring a contractor and more like gaining a partner who genuinely cared about our success. They challenged our assumptions and delivered something beyond what we imagined.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "RetailCo"
    },
    {
      quote: "I've worked with dozens of developers. What sets them apart is their ability to translate business needs into elegant technical solutions. They just get it.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "MedTech Solutions"
    },
    {
      quote: "Not only did they deliver on time and under budget, but they also anticipated challenges we hadn't even considered. That's the mark of true expertise.",
      author: "Emily Watson",
      role: "VP of Product",
      company: "WealthWise"
    }
  ];

  const nextProject = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % projects.length);
    // Reset image index when changing projects
    setCurrentImageIndex({});
  };

  const prevProject = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + projects.length) % projects.length);
    // Reset image index when changing projects
    setCurrentImageIndex({});
  };

  const nextImage = useCallback((projectIndex) => {
    const project = projects[projectIndex];
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % project.images.length
    }));
  }, [projects]);

  const prevImage = useCallback((projectIndex) => {
    const project = projects[projectIndex];
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + project.images.length) % project.images.length
    }));
  }, [projects]);

  const goToImage = (projectIndex, imageIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  // Keyboard navigation for image carousel
  useEffect(() => {
    if (activeSection !== 'work') return;

    const handleKeyPress = (e) => {
      const project = projects[currentProjectSlide];
      const currentIdx = currentImageIndex[currentProjectSlide] || 0;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage(currentProjectSlide);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage(currentProjectSlide);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection, currentProjectSlide, currentImageIndex, prevImage, nextImage]);

  // Touch/swipe support
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage(currentProjectSlide);
    }
    if (isRightSwipe) {
      prevImage(currentProjectSlide);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <span className="text-2xl font-light tracking-wider">
                <span className="font-bold">AP</span>BROS
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  } text-sm uppercase tracking-widest transition-all duration-300 relative group`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-6 py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-400 hover:text-white uppercase tracking-widest text-sm py-2"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        {/* Home Section */}
        {activeSection === 'home' && (
          <>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              <div className={`max-w-5xl mx-auto text-center relative z-10 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <div className="mb-6 text-gray-400 uppercase tracking-widest text-sm animate-fadeIn">
                  Full-Stack Developer & Problem Solver
                </div>
                <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight">
                  We craft digital experiences that{' '}
                  <span className="font-bold italic">matter</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Turning complex business challenges into elegant, scalable solutions—one line of code at a time.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button
                    onClick={() => setActiveSection('work')}
                    className="px-10 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 uppercase tracking-widest text-sm font-semibold transform hover:scale-105"
                  >
                    View Our Work
                  </button>
                  <button
                    onClick={() => setActiveSection('contact')}
                    className="px-10 py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                  >
                    Let's Talk
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                  <div className="text-center transform hover:scale-110 transition-transform duration-300">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-300">
                    <div className="text-4xl font-bold mb-2">8+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Years</div>
                  </div>
                  <div className="text-center transform hover:scale-110 transition-transform duration-300">
                    <div className="text-4xl font-bold mb-2">30+</div>
                    <div className="text-gray-400 text-sm uppercase tracking-wider">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6 lg:px-12 bg-white text-black">
              <div className="max-w-4xl mx-auto">
                <div className="text-sm uppercase tracking-widest text-gray-500 mb-6">Our Approach</div>
                <h2 className="text-4xl lg:text-5xl font-light mb-12 leading-tight">
                  We believe great software is <span className="italic font-bold">invisible</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    It doesn't scream for attention. It doesn't get in the way. It simply works, quietly solving problems and creating value in the background.
                  </p>
                  <p>
                    Our philosophy is simple: understand the problem deeply, design thoughtfully, build meticulously, and iterate relentlessly. Every project is a partnership, and your success is our success.
                  </p>
                  <p>
                    We don't just write code—We craft solutions that align with your business goals, scale with your growth, and stand the test of time.
                  </p>
                </div>
              </div>
            </section>

            {/* Testimonial Carousel */}
            <section className="py-32 px-6 lg:px-12 bg-black relative overflow-hidden">
              <div className="max-w-4xl mx-auto">
                <div className="text-sm uppercase tracking-widest text-gray-500 mb-12 text-center">
                  What Clients Say
                </div>
                <div className="relative h-64">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ${
                        index === currentTestimonial
                          ? 'opacity-100 transform translate-x-0'
                          : 'opacity-0 transform translate-x-10'
                      }`}
                    >
                      <div className="text-center">
                        <p className="text-2xl lg:text-3xl font-light italic mb-8 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="text-gray-400">
                          <div className="font-semibold text-white">{testimonial.author}</div>
                          <div className="text-sm">{testimonial.role} • {testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-12">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-white w-8' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Work Section */}
        {activeSection === 'work' && (
          <section className="min-h-screen py-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                <div className="text-sm uppercase tracking-widest text-gray-500 mb-6">Selected Projects</div>
                <h1 className="text-4xl lg:text-6xl font-light">
                  Recent <span className="font-bold">Work</span>
                </h1>
              </div>

              {/* Project Slideshow */}
              <div className="relative">
                <div className="overflow-hidden">
                  {projects.map((project, index) => {
                    const currentImgIdx = currentImageIndex[index] || 0;
                    const isActive = index === currentProjectSlide;

                    return (
                      <div
                        key={index}
                        className={`transition-all duration-700 ${
                          isActive
                            ? 'opacity-100 relative'
                            : 'opacity-0 absolute inset-0 pointer-events-none'
                        }`}
                      >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          {/* Project Image Carousel */}
                          <div className="relative group">
                            <div 
                              className="relative aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden"
                              onTouchStart={onTouchStart}
                              onTouchMove={onTouchMove}
                              onTouchEnd={onTouchEnd}
                            >
                              {/* Images */}
                              <div className="relative w-full h-full">
                                {project.images.map((img, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className={`absolute inset-0 transition-all duration-500 ${
                                      imgIndex === currentImgIdx
                                        ? 'opacity-100 translate-x-0'
                                        : imgIndex < currentImgIdx
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                    }`}
                                  >
                                    <img
                                      src={img}
                                      alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                                      className="w-full h-full object-cover"
                                      loading="lazy"
                                      onError={(e) => {
                                        // Fallback placeholder if image doesn't exist
                                        console.error(`Failed to load image: ${img}`);
                                        e.target.style.display = 'none';
                                        const placeholder = document.createElement('div');
                                        placeholder.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-gray-500 text-sm';
                                        placeholder.textContent = `Image ${imgIndex + 1} not found`;
                                        e.target.parentElement.appendChild(placeholder);
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>

                              {/* Navigation Arrows */}
                              {project.images.length > 1 && (
                                <>
                                  <button
                                    onClick={() => prevImage(index)}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-80 border border-gray-700 hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft size={20} className="text-white" />
                                  </button>
                                  <button
                                    onClick={() => nextImage(index)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black bg-opacity-50 hover:bg-opacity-80 border border-gray-700 hover:border-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
                                    aria-label="Next image"
                                  >
                                    <ChevronRight size={20} className="text-white" />
                                  </button>
                                </>
                              )}

                              {/* Pagination Dots */}
                              {project.images.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                  {project.images.map((_, imgIndex) => (
                                    <button
                                      key={imgIndex}
                                      onClick={() => goToImage(index, imgIndex)}
                                      className={`transition-all duration-300 rounded-full ${
                                        imgIndex === currentImgIdx
                                          ? 'w-8 h-2 bg-white'
                                          : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                                      }`}
                                      aria-label={`Go to image ${imgIndex + 1}`}
                                    />
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500 pointer-events-none"></div>
                          </div>

                          {/* Project Info */}
                          <div className="space-y-6">
                            <div className="flex items-center gap-4 text-sm text-gray-400 uppercase tracking-widest">
                              <span>{project.client}</span>
                              <span>•</span>
                              <span>{project.year}</span>
                            </div>
                            <h2 className="text-4xl font-light">{project.title}</h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                              {project.description}
                            </p>

                            <div className="space-y-4 pt-4">
                              <div>
                                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Challenge</div>
                                <p className="text-gray-300">{project.challenge}</p>
                              </div>
                              <div>
                                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Solution</div>
                                <p className="text-gray-300">{project.solution}</p>
                              </div>
                              <div>
                                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">Results</div>
                                <ul className="space-y-2">
                                  {project.results.map((result, i) => (
                                    <li key={i} className="flex items-start">
                                      <span className="text-white mr-2">→</span>
                                      <span className="text-gray-300">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-4">
                              {project.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-4 py-2 border border-gray-700 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Project Navigation */}
                <div className="flex items-center justify-between mt-12">
                  <button
                    onClick={prevProject}
                    className="p-4 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300 group"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="flex gap-3">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentProjectSlide(index);
                          setCurrentImageIndex({});
                        }}
                        className={`transition-all duration-300 ${
                          index === currentProjectSlide
                            ? 'w-12 h-1 bg-white'
                            : 'w-8 h-1 bg-gray-700 hover:bg-gray-500'
                        }`}
                        aria-label={`Go to project ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextProject}
                    className="p-4 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300 group"
                    aria-label="Next project"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Project Counter */}
                <div className="text-center mt-8 text-gray-500 text-sm uppercase tracking-widest">
                  Project {currentProjectSlide + 1} of {projects.length}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="min-h-screen py-32 px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-16">
                {/* Profile */}
                <div className="lg:col-span-2">
                  <div className="sticky top-32">
                    <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg mb-8 flex items-center justify-center text-8xl">
                      👨‍💻
                    </div>
                    <h2 className="text-3xl font-light mb-4">Nice to meet you</h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      We are a team of developers and designers who love solving complex problems with simple, elegant solutions.
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.linkedin.com/in/apbros-solutions-01215b395" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
                        <Linkedin size={20} />
                      </a>
                      <a href="https://github.com/APBROS-Solutions" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
                        <Github size={20} />
                      </a>
                      <a href="https://www.instagram.com/apbrossolutions/" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
                        <Instagram size={20} />
                      </a>
                      <a href="https://x.com/ApbrosSolutions" target="_blank" rel="noopener noreferrer" className="p-3 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="lg:col-span-3 space-y-12">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Background</div>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    We have been building for the web for over 8 years, working with everyone from scrappy startups to Fortune 500 companies. Our journey started with a simple curiosity about how things work, which evolved into a passion for creating digital products that make a real difference.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      What drives us isn't just writing code—it's the moment when a client sees their vision come to  life, when users find joy in a seamless experience, when a business problem gets solved elegantly.
                    </p>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">What We Do</div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="border-l-2 border-white pl-4">
                        <h3 className="font-semibold mb-2">Frontend Development</h3>
                        <p className="text-gray-400 text-sm">React, Vue, Next.js, TypeScript</p>
                      </div>
                      <div className="border-l-2 border-white pl-4">
                        <h3 className="font-semibold mb-2">Backend Development</h3>
                        <p className="text-gray-400 text-sm">Node.js, Python, PostgreSQL, MongoDB</p>
                      </div>
                      <div className="border-l-2 border-white pl-4">
                        <h3 className="font-semibold mb-2">Cloud & DevOps</h3>
                        <p className="text-gray-400 text-sm">AWS, Docker, Kubernetes, CI/CD</p>
                      </div>
                      <div className="border-l-2 border-white pl-4">
                        <h3 className="font-semibold mb-2">UI/UX Design</h3>
                        <p className="text-gray-400 text-sm">Figma, Prototyping, User Research</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Beyond Code</div>
                    <p className="text-gray-400 leading-relaxed">
                      When we're not coding, you'll find us exploring new coffee shops ☕, reading about design and psychology 📚, or tinkering with side projects that probably won't see the light of day (but teach us something new every time).
                    </p>
                  </div>

                  <div className="bg-white text-black p-8 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Coffee size={24} />
                      <h3 className="text-xl font-semibold">Let's work together</h3>
                    </div>
                    <p className="mb-6 text-gray-700">
                    We are always interested in hearing about new projects and opportunities. Whether you have a specific project in mind or just want to chat about ideas, we'd love to connect.
                    </p>
                    <button
                      onClick={() => setActiveSection('contact')}
                      className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-all duration-300 uppercase tracking-widest text-sm font-semibold"
                    >
                      Get in Touch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="min-h-screen py-32 px-6 lg:px-12 flex items-center">
            <div className="max-w-4xl mx-auto w-full">
              <div className="mb-16 text-center">
                <div className="text-sm uppercase tracking-widest text-gray-500 mb-6">Get In Touch</div>
                <h1 className="text-4xl lg:text-6xl font-light mb-6">
                  Let's create something <span className="font-bold italic">amazing</span>
                </h1>
                <p className="text-xl text-gray-400">
                 We are currently available for freelance projects and full-time opportunities
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Email</div>
                    <a href="mailto:hello@yourname.com" className="text-2xl hover:text-gray-400 transition-colors duration-300">
                      apooravmukherjee@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Social</div>
                    <div className="space-y-2">
                      <a href="https://www.linkedin.com/in/apbros-solutions-01215b395" target="_blank" rel="noopener noreferrer" className="block text-lg hover:text-gray-400 transition-colors duration-300">
                        LinkedIn → 
                      </a>
                      <a href="https://github.com/APBROS-Solutions" target="_blank" rel="noopener noreferrer" className="block text-lg hover:text-gray-400 transition-colors duration-300">
                        GitHub → 
                      </a>
                      <a href="https://www.instagram.com/apbrossolutions/" target="_blank" rel="noopener noreferrer" className="block text-lg hover:text-gray-400 transition-colors duration-300">
                        Instagram → 
                      </a>
                      <a href="https://x.com/ApbrosSolutions" target="_blank" rel="noopener noreferrer" className="block text-lg hover:text-gray-400 transition-colors duration-300">
                        X → 
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Location</div>
                    <div className="text-lg text-gray-300">
                      Based in Mathura, India<br/>
                      Working remotely worldwide
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-800">
                    <div className="text-sm text-gray-400 leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries, feel free to reach out via LinkedIn or email.
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-white outline-none transition-colors duration-300"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-white outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Project Type
                      </label>
                      <select className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-white outline-none transition-colors duration-300">
                        <option value="" className="bg-black">Select type</option>
                        <option value="web" className="bg-black">Web Application</option>
                        <option value="mobile" className="bg-black">Mobile App</option>
                        <option value="consultation" className="bg-black">Consultation</option>
                        <option value="other" className="bg-black">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        className="w-full bg-transparent border-b border-gray-700 py-3 focus:border-white outline-none transition-colors duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 uppercase tracking-widest text-sm font-semibold mt-8"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © 2026 APBROS. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/apbros-solutions-01215b395" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
              LinkedIn <Linkedin size={20} className="inline-block" />
            </a>
            <a href="https://github.com/APBROS-Solutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
              GitHub <Github size={20} className="inline-block" />
            </a>
            <a href="https://www.instagram.com/apbrossolutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
              Instagram <Instagram size={20} className="inline-block" />
            </a>
            <a href="https://x.com/ApbrosSolutions" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
              X/<Twitter size={20} className="inline-block" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreativePortfolio;