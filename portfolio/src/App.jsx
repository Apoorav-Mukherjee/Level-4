import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronLeft, ChevronRight, Mail, Linkedin, Github, Coffee } from 'lucide-react';

const CreativePortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
      title: 'E-Commerce Platform Redesign',
      client: 'RetailCo',
      year: '2024',
      description: 'Transformed a legacy e-commerce system into a modern, conversion-optimized platform',
      challenge: 'High cart abandonment and poor mobile experience',
      solution: 'Built a React-based PWA with seamless checkout flow',
      results: ['45% increase in mobile conversions', '2.3s average load time', '8x faster page transitions'],
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️'
    },
    {
      title: 'Healthcare Analytics Dashboard',
      client: 'MedTech Solutions',
      year: '2024',
      description: 'Real-time patient data visualization for healthcare professionals',
      challenge: 'Complex data needed to be intuitive and accessible',
      solution: 'Interactive dashboard with predictive analytics',
      results: ['90% reduction in report generation time', 'HIPAA compliant', 'Used by 500+ clinicians'],
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      image: '⚕️'
    },
    {
      title: 'Financial Planning SaaS',
      client: 'WealthWise',
      year: '2023',
      description: 'AI-powered personal finance management platform',
      challenge: 'Making complex financial concepts accessible',
      solution: 'Intuitive interface with smart recommendations',
      results: ['$1.2M ARR in first year', '15,000+ active users', '4.8/5 app store rating'],
      tags: ['Next.js', 'TypeScript', 'TensorFlow', 'AWS'],
      image: '💰'
    },
    {
      title: 'Supply Chain Optimization',
      client: 'LogisticsPro',
      year: '2023',
      description: 'Real-time tracking and route optimization system',
      challenge: 'Inefficient routing costing $200K annually',
      solution: 'ML-powered logistics management platform',
      results: ['35% reduction in fuel costs', 'Real-time tracking for 1000+ vehicles', '99.8% on-time delivery'],
      tags: ['Angular', 'GraphQL', 'Kubernetes', 'GCP'],
      image: '🚚'
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
  };

  const prevProject = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + projects.length) % projects.length);
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
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-700 ${
                        index === currentProjectSlide
                          ? 'opacity-100 relative'
                          : 'opacity-0 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Project Visual */}
                        <div className="relative group">
                          <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg flex items-center justify-center text-8xl transform transition-transform duration-500 group-hover:scale-105">
                            {project.image}
                          </div>
                          <div className="absolute inset-0 border border-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-500"></div>
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
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12">
                  <button
                    onClick={prevProject}
                    className="p-4 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300 group"
                  >
                    <ChevronLeft size={24} />
                  </button>

                  <div className="flex gap-3">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProjectSlide(index)}
                        className={`transition-all duration-300 ${
                          index === currentProjectSlide
                            ? 'w-12 h-1 bg-white'
                            : 'w-8 h-1 bg-gray-700 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextProject}
                    className="p-4 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300 group"
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
                      I'm a developer who loves solving complex problems with simple, elegant solutions.
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="p-3 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="p-3 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
                        <Github size={20} />
                      </a>
                      <a href="#" className="p-3 border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="lg:col-span-3 space-y-12">
                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Background</div>
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                      I've been building for the web for over 8 years, working with everyone from scrappy startups to Fortune 500 companies. My journey started with a simple curiosity about how things work, which evolved into a passion for creating digital products that make a real difference.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      What drives me isn't just writing code—it's the moment when a client sees their vision come to life, when users find joy in a seamless experience, when a business problem gets solved elegantly.
                    </p>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">What I Do</div>
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
                      When I'm not coding, you'll find me exploring new coffee shops ☕, reading about design and psychology 📚, or tinkering with side projects that probably won't see the light of day (but teach me something new every time).
                    </p>
                  </div>

                  <div className="bg-white text-black p-8 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Coffee size={24} />
                      <h3 className="text-xl font-semibold">Let's work together</h3>
                    </div>
                    <p className="mb-6 text-gray-700">
                      I'm always interested in hearing about new projects and opportunities. Whether you have a specific project in mind or just want to chat about ideas, I'd love to connect.
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
                  I'm currently available for freelance projects and full-time opportunities
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Email</div>
                    <a href="mailto:hello@yourname.com" className="text-2xl hover:text-gray-400 transition-colors duration-300">
                      hello@yourname.com
                    </a>
                  </div>
                  
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Social</div>
                    <div className="space-y-2">
                      <a href="#" className="block text-lg hover:text-gray-400 transition-colors duration-300">
                        LinkedIn →
                      </a>
                      <a href="#" className="block text-lg hover:text-gray-400 transition-colors duration-300">
                        GitHub →
                      </a>
                      <a href="#" className="block text-lg hover:text-gray-400 transition-colors duration-300">
                        Twitter →
                      </a>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-3">Location</div>
                    <div className="text-lg text-gray-300">
                      Based in San Francisco, CA<br/>
                      Working remotely worldwide
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-800">
                    <div className="text-sm text-gray-400 leading-relaxed">
                      I typically respond within 24 hours. For urgent inquiries, feel free to reach out via LinkedIn.
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
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
              LinkedIn <Linkedin size={20} className="inline-block" text-gray-400 hover:text-white transition-colors duration-300 inline-block />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
              GitHub <Github size={20} className="inline-block" text-gray-400 hover:text-white transition-colors duration-300 inline-block />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm uppercase tracking-wider">
              Email <Mail size={20} className="inline-block" text-gray-400 hover:text-white transition-colors duration-300 inline-block />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreativePortfolio;