import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const MyProjects = () => {
  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: "1",
      title: "Medical Health Management App",
      description:
        "Comprehensive web and mobile application for health management, specifically for Virus C patients.",
      longDescription:
        "A full-stack medical application featuring AI integration, secure file uploads, calendar system, and intelligent chatbot for health guidance. Built with modern technologies to provide users with comprehensive health management tools.",
      technologies: [
        "React",
        "Node.js",
        "AI Integration",
        "mySQL",
        "Mobile Development",
      ],
      images: [
        "/imgs/withu/landing.png",
        "/imgs/withu/login.png",
        "/imgs/withu/signup.png",
        "/imgs/withu/dashboard.png",
        "/imgs/withu/submit.png",
        "/imgs/withu/calendar.png",
        "/imgs/withu/profile.png",
        "/imgs/withu/chatbot.png",
        "/imgs/withu/stats.png",
      ],
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "2",
      title: "WorldWise",
      description:
        "Interactive travel tracking app that maps your journeys across the world.",
      longDescription:
        "WorldWise is a web application designed to help travelers log and visualize their adventures on an interactive world map. Users can record cities they've visited, add travel dates, and include personal notes about each location. Built with React and Leaflet.js for seamless map integration, the app provides a clean interface for managing trips and showcasing global exploration. Features include user authentication, country and city tracking, and dynamic map rendering to keep every travel memory organized and accessible.",

      technologies: ["React", "javascript", "tailwind CSS"],
      images: [
        "/imgs/worldwise/Capture1.PNG",
        "/imgs/worldwise/Capture2.PNG",
        "/imgs/worldwise/Capture3.PNG",
        "/imgs/worldwise/Capture1.PNG",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "3",
      title: "Popcorn",
      description:
        "Interactive movie tracking app with search, rating, and watchlist management.",
      longDescription:
        "A dynamic movie discovery and tracking platform built using React. Features include real-time search, detailed movie information display, user rating functionality, and personal watchlist management with runtime statistics. Offers a sleek dark-themed UI with intuitive user interactions and smooth state management. Ideal for film enthusiasts to browse, rate, and keep track of their watched movies.",
      technologies: ["React", "javascript", "tailwind CSS"],
      images: [
        "/imgs/Popcorn/Capture.PNG",
        "/imgs/Popcorn/Capture1.PNG",
        "/imgs/Popcorn/Capture2.PNG",
        "/imgs/Popcorn/Capture3.PNG",
      ],
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: "4",
      title: "React Quiz App",
      description:
        "Interactive data management dashboard with user input forms, validation, and real-time record handling.",
      longDescription:
        "A responsive and user-friendly data management system built using modern web technologies. The platform allows seamless creation, updating, and viewing of records through dynamic forms with real-time validation feedback. Includes dropdowns, modal interactions, and structured table views for efficient data navigation. Features include error handling, form validation, responsive layout, and modular UI components tailored for smooth user experiences. Designed with administrative workflows in mind, making it ideal for internal tools or CRM-style applications.",
      technologies: ["React", "javascript", "tailwind CSS"],
      images: [
        "/imgs/ReactQuiz/Capture.PNG",
        "/imgs/ReactQuiz/Capture1.PNG",
        "/imgs/ReactQuiz/Capture2.PNG",
        "/imgs/ReactQuiz/Capture3.PNG",
        "/imgs/ReactQuiz/Capture4.PNG",
        "/imgs/ReactQuiz/Capture5.PNG",
      ],
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[currentProjectIndex];

  // Project navigation functions
  const goToPreviousProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1,
    );
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  const goToNextProject = () => {
    setCurrentProjectIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1,
    );
    setCurrentImageIndex(0); // Reset image index when changing projects
  };

  // Image carousel functions
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1,
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (!currentProject) return null;

  return (
    <section className="bg-charcoal py-20" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-wine lg:text-6xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-silver">
            A showcase of my recent work, featuring innovative solutions and
            cutting-edge technologies that bring ideas to life.
          </p>
          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-wine" />
        </motion.div>

        {/* Unified Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-charcoal"
        >
          <div className="bg-slate-gray/90 shadow-elegant hover:shadow-glow relative overflow-hidden rounded-2xl border border-wine/30 backdrop-blur-sm transition-all duration-500">
            <div className="bg-gradient-card absolute inset-0 opacity-50" />

            {/* Project Navigation Header */}
            <div className="relative z-10 flex items-center justify-between border-b border-wine/20 px-8 py-6">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-silver">Projects</h3>
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentProjectIndex(index);
                        setCurrentImageIndex(0);
                      }}
                      className={`h-2 w-8 rounded-full transition-all duration-300 ${
                        index === currentProjectIndex
                          ? "bg-wine"
                          : "bg-silver/30 hover:bg-silver/50"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={goToPreviousProject}
                  className="rounded-full bg-wine/20 p-2 text-wine transition-all duration-200 hover:scale-110 hover:bg-wine/30"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} />
                </button>

                <span className="mx-4 text-sm text-silver/80">
                  {currentProjectIndex + 1} / {projects.length}
                </span>

                <button
                  onClick={goToNextProject}
                  className="rounded-full bg-wine/20 p-2 text-wine transition-all duration-200 hover:scale-110 hover:bg-wine/30"
                  aria-label="Next project"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Project Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10 flex flex-col items-center gap-8 p-8 lg:flex-row lg:p-12"
              >
                {/* Image Carousel */}
                <div className="w-full flex-shrink-0 lg:w-1/2">
                  <div className="group relative w-full">
                    <div className="bg-gradient-primary absolute -inset-1 rounded-2xl opacity-75 blur transition duration-300 group-hover:opacity-100" />

                    <div className="relative overflow-hidden rounded-xl bg-charcoal">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImageIndex}
                          src={currentProject.images[currentImageIndex]}
                          alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                          className="h-64 w-full object-cover shadow-lg lg:h-80"
                          initial={{ opacity: 0, x: 300 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -300 }}
                          transition={{
                            duration: 0.5,
                            ease: [0.25, 0.1, 0.25, 1],
                          }}
                        />
                      </AnimatePresence>

                      {/* Image Navigation Arrows */}
                      {currentProject.images.length > 1 && (
                        <>
                          <button
                            onClick={goToPreviousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-wine/80 p-2 text-silver opacity-0 transition-all duration-300 hover:scale-110 hover:bg-wine group-hover:opacity-100"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={20} />
                          </button>

                          <button
                            onClick={goToNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-wine/80 p-2 text-silver opacity-0 transition-all duration-300 hover:scale-110 hover:bg-wine group-hover:opacity-100"
                            aria-label="Next image"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}

                      {/* Image Dots Indicator */}
                      {currentProject.images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
                          {currentProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                  ? "scale-125 bg-wine"
                                  : "bg-silver/50 hover:bg-silver/80"
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Image Counter */}
                      {currentProject.images.length > 1 && (
                        <div className="absolute right-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 text-sm text-silver backdrop-blur-sm">
                          {currentImageIndex + 1} /{" "}
                          {currentProject.images.length}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 text-left">
                  <div className="space-y-6">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <h2 className="text-3xl font-bold text-wine">
                          {currentProject.title}
                        </h2>
                      </div>
                      <p className="text-xl font-medium text-silver/80">
                        {currentProject.description}
                      </p>
                    </div>

                    <div className="h-1 w-16 rounded-full bg-wine" />

                    <p className="text-lg leading-relaxed text-silver">
                      {currentProject.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {currentProject.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={`${currentProject.id}-${tech}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          className="rounded-full border border-wine/30 bg-wine/20 px-4 py-2 text-sm font-medium text-silver transition-all duration-300 hover:scale-105 hover:bg-forestgreen hover:text-white"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      {currentProject.liveUrl && (
                        <a
                          href={currentProject.liveUrl}
                          className="hover:shadow-glow flex items-center gap-2 rounded-lg bg-wine px-6 py-3 text-primary-foreground transition-all duration-200 hover:scale-105 hover:bg-forestgreen"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                          View Live
                        </a>
                      )}
                      {currentProject.githubUrl && (
                        <a
                          href={currentProject.githubUrl}
                          className="flex items-center gap-2 rounded-lg border border-wine/30 px-6 py-3 text-wine transition-all duration-200 hover:scale-105 hover:border-wine/50 hover:bg-silver/10"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Project Tabs - Alternative Navigation */}
            <div className="relative z-10 border-t border-wine/20 px-8 py-4 text-silver">
              <div className="flex flex-wrap justify-center gap-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setCurrentProjectIndex(index);
                      setCurrentImageIndex(0);
                    }}
                    className={`rounded-lg px-4 py-2 text-sm font-medium text-silver transition-all duration-200 ${
                      index === currentProjectIndex
                        ? "shadow-glow bg-wine text-primary-foreground"
                        : "bg-wine/10 text-silver hover:bg-wine/20"
                    }`}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
      </div>
    </section>
  );
};

export default MyProjects;
