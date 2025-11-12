import React from "react";
import { motion } from "framer-motion";
import { Code, Heart, Plane, Film } from "lucide-react";

const About = () => {
  const interests = [
    { icon: Code, label: "Coding", color: "text-blue-400" },
    { icon: Heart, label: "Exploring new Tech", color: "text-red-400" },
    { icon: Film, label: "Movies", color: "text-purple-400" },
    { icon: Plane, label: "Travelling", color: "text-green-400" },
  ];

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a{" "}
                <span className="text-blue-400 font-semibold">
                  Full Stack AI Engineer
                </span>{" "}
                passionate about building intelligent, end-to-end applications
                that blend innovation with practicality. With a strong
                foundation in the MERN stack and experience in Python/FastAPI.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Currently, I specialize in Generative AI - crafting advanced
                multi-agent systems and RAG pipelines using LangChain,
                LangGraph, and CrewAI. Always curious, I love exploring emerging
                technologies and turning complex ideas into smart, user-friendly
                solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  5000+
                </div>
                <div className="text-sm text-gray-400">Orders Processed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  3+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">
                What I Love
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-slate-700/30 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <interest.icon className={`${interest.color} w-8 h-8`} />
                    <span className="text-sm text-gray-300 text-center">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <blockquote className="text-center">
                <p className="text-lg text-gray-300 italic mb-4">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <footer className="text-sm text-gray-400">- Cory House</footer>
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
