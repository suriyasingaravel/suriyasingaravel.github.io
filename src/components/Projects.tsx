import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  X,
  Utensils,
  ShoppingCart,
  MessagesSquare,
  Bot,
  MapPin,
} from "lucide-react";
import hogrBanner from "../assets/hogr-banner.png";
import chocochipBanner from "../assets/Chocochip-banner.png";
import aiinterviewerBanner from "../assets/AI-intereviewer-banner.png";
import homeseBanner from "../assets/Homese-banner.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Chocochip.ai",
      description:
        "AI-powered restaurant platform built from scratch, processed 5000+ orders, and features a virtual waiter chatbot for dish recommendations.",
      longDescription:
        "Chocochip.ai is an intelligent restaurant management system that streamlines purchase orders and enhances user experience through an AI-powered virtual waiter. It includes inventory control, live order tracking, and personalized dish suggestions driven by OpenAI.",
      icon: Bot,
      tech: ["React", "Redux Js", "Laravel", "MySQL", "Node Js", "Express.js"],
      image: chocochipBanner,
      color: "from-blue-500 to-cyan-500",
      github: "http://git.masalabox.com:9999/hogr/smartwaiter-chatbot-react",
      live: "https://chocochip.ai/",
    },
    {
      id: 2,
      title: "HOGR",
      description:
        "End-to-end restaurant operations app designed to manage purchases, analytics, and customer interactions seamlessly.",
      longDescription:
        "HOGR is a full-featured web platform for restaurants, helping teams manage purchase orders, supplier data, and insights in real time. It integrates advanced analytics and automation to simplify workflows and enhance operational efficiency.",
      icon: Utensils,
      tech: ["React", "Redux Js", "Laravel", "MySQL", "Node Js", "Express.js"],
      image: hogrBanner,
      color: "from-blue-500 to-cyan-500",
      github: "http://git.masalabox.com:9999/hogr/hogr-website-react",
      live: "https://www.hogr.app/",
    },
    {
      id: 3,
      title: "AI Interviewer",
      description:
        "AI-driven interview simulation app offering real-time questions, live feedback, and analytics for skill improvement.",
      longDescription:
        "AI Interviewer is an intelligent assessment platform built with React and FastAPI. It generates dynamic interview questions using LangChain, provides real-time evaluation, and stores session analytics with Firebase for performance tracking and personalized feedback.",
      icon: MessagesSquare,
      tech: ["React", "Redux Js", "FastAPI", "LangChain", "Firebase"],
      image: aiinterviewerBanner,
      color: "from-green-500 to-teal-500",
      github: "https://github.com/progressionschool/Suriya_IntervueAI-Frontend",
      live: "https://github.com/progressionschool/Suriya_IntervueAI-Frontend",
    },
    {
      id: 4,
      title: "HomeSe",
      description:
        "“Digital storefront platform empowering home-grown food brands to take control of sales, showcase their offer and keep 100% of revenue.",
      longDescription:
        "A commission-free marketplace empowering handcrafted food artisans and gourmet sellers to build their own digital presence. Features video-based product menus, visual product galleries ensuring transparency, direct customer connections through WhatsApp and Instagram ordering, and comprehensive brand discovery tools.",
      icon: MapPin,
      tech: ["Php", "HTML", "CSS", "Javascript", "Node Js"],
      image: homeseBanner,
      color: "from-orange-500 to-red-500",
      github: "#",
      live: "https://home-se.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, from AI-powered applications to
            real-time tracking systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`p-2 rounded-full bg-gradient-to-r ${project.color} text-white`}
                    >
                      <project.icon size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-white/10">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-slate-800/90 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(
                    (p) => p.id === selectedProject
                  );
                  if (!project) return null;

                  return (
                    <div className="relative">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-full transition-colors duration-300"
                      >
                        <X size={20} />
                      </button>

                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-t-2xl"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-30 rounded-t-2xl`}
                        />
                      </div>

                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div
                            className={`p-3 rounded-full bg-gradient-to-r ${project.color} text-white`}
                          >
                            <project.icon size={24} />
                          </div>
                          <h3 className="text-2xl font-bold">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-4">
                          <motion.a
                            href={project.github}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full transition-colors duration-300"
                          >
                            <Github size={20} />
                            <span>View Code</span>
                          </motion.a>
                          <motion.a
                            href={project.live}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center space-x-2 bg-gradient-to-r ${project.color} hover:opacity-90 px-6 py-3 rounded-full transition-opacity duration-300`}
                          >
                            <ExternalLink size={20} />
                            <span>Live Demo</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
