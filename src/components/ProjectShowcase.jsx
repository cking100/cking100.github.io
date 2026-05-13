import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const carouselRef = useRef(null);

  const projects = [
    {
      title: 'Code Quest',
      techStack: ['React', 'TypeScript', 'MySQL'],
      description: 'A full stack web app like LeetCode with AI integration.',
      github: 'https://github.com/cking100/CodeQuest',
      details: 'Users can solve various DSA problems with AI-powered hints.',
    },
    {
      title: 'BoostCV',
      techStack: ['Spring', 'MySQL', 'React'],
      description: 'An AI-powered resume builder and ATS tracker.',
      github: 'https://github.com/cking100/BoostCV',
      details: 'Checks ATS compatibility of your resume and AI powered Suggestions.',
    },
    {
      title: 'Api Chaos',
      techStack: ['Spring', 'MySQL', 'React', 'kafka', 'jenkins', 'docker', 'kubernetes'],
      description: 'Spring backend app for expense tracking.',
      github: 'https://github.com/cking100/expense-tracker',
      details: 'Manage your income and expenses with this backend tracker.',
    },
  ];

  const scrollCarousel = (direction) => {
    const scrollAmount = 320;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="projects">
      <div className="swipe-hint">Swipe to see more →</div>

      <div className="slider-controls-mobile">
        <button onClick={() => scrollCarousel('prev')} aria-label="Scroll left">
          &#8592;
        </button>
        <button onClick={() => scrollCarousel('next')} aria-label="Scroll right">
          &#8594;
        </button>
      </div>

      <div className="projects-carousel" ref={carouselRef}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            tabIndex={0}
            role="group"
            aria-label={`Card for ${project.title}`}
          >
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="view-details-btn"
                aria-label={`View details of ${project.title}`}
              >
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="modal-content"
              initial={{ y: '-100vh' }}
              animate={{ y: 0 }}
              exit={{ y: '-100vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <p>{selectedProject.details}</p>
              <div className="modal-links">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
              <button onClick={() => setSelectedProject(null)} aria-label="Close modal">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;
