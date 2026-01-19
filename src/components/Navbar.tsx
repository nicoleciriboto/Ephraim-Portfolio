import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'experience', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div
          className={`px-8 py-4 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-white border-black shadow-lg'
              : 'bg-white/80 backdrop-blur-md border-black/20'
          }`}
        >
          <ul className="flex items-center justify-between gap-8">
            <li>
              <button
                onClick={() => scrollToSection('home')}
                className={
                  activeSection === 'home'
                    ? 'px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className={
                  activeSection === 'about'
                    ? 'px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('skills')}
                className={
                  activeSection === 'skills'
                    ? 'px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className={
                  activeSection === 'projects'
                    ? 'px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className={
                  activeSection === 'contact'
                    ? 'px-6 py-2 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 right-6 z-50 md:hidden"
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`p-4 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-white border-black shadow-lg'
              : 'bg-white/80 backdrop-blur-md border-black/20'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              <button
                onClick={() => scrollToSection('home')}
                className={
                  activeSection === 'home'
                    ? 'px-8 py-4 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
                style={{ fontSize: '1.5rem' }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={
                  activeSection === 'about'
                    ? 'px-8 py-4 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
                style={{ fontSize: '1.5rem' }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className={
                  activeSection === 'skills'
                    ? 'px-8 py-4 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
                style={{ fontSize: '1.5rem' }}
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={
                  activeSection === 'projects'
                    ? 'px-8 py-4 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
                style={{ fontSize: '1.5rem' }}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={
                  activeSection === 'contact'
                    ? 'px-8 py-4 bg-black text-white rounded-full hover:opacity-80 transition-opacity'
                    : 'hover:opacity-60 transition-opacity'
                }
                style={{ fontSize: '1.5rem' }}
              >
                Contact
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
