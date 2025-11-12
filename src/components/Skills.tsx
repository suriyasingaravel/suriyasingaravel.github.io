import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Smartphone,
  Brain,
  Container,
  Globe,
  Palette,
  ServerCog,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Tools",
      icon: Brain,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "LangChain", level: 80 },
        { name: "LangGraph", level: 75 },
        { name: "CrewAI", level: 70 },
        { name: "RAG & Multi-Agent Systems", level: 80 },
      ],
    },
    {
      title: "Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 85 },
      ],
    },
    {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Next Js", level: 75 },
        { name: "Redux", level: 80 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "FastAPI", level: 75 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "SQLite", level: 70 },
        { name: "Pinecone", level: 80 },
        { name: "FAISS", level: 70 },
      ],
    },
    {
      title: "Tools",
      icon: ServerCog,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "CI/CD", level: 70 },
        { name: "Jira", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
  ];

  const additionalSkills = [
    { name: "Redux", icon: Code, color: "text-purple-400" },
    { name: "REST APIs", icon: Globe, color: "text-blue-400" },
    { name: "Docker", icon: Container, color: "text-cyan-400" },
    { name: "Nginx", icon: Server, color: "text-green-400" },
    { name: "Responsive Design", icon: Smartphone, color: "text-pink-400" },
    { name: "UI/UX Design", icon: Palette, color: "text-yellow-400" },
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and
            AI-powered solutions
          </p>
        </motion.div>

        {/* Main Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div
                  className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700/50 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Additional Technologies
            </span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center space-y-3 p-4 rounded-xl bg-slate-700/30 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300"
              >
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
                <span className="text-sm text-gray-300 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications/Learning */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
            <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
              Currently exploring advanced AI concepts, RAG pipelines, and
              modern DevOps practices. Always eager to learn new technologies
              and improve existing skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "CI/CD",
                "Kubernetes",
                "GraphQL",
                "WebSockets",
                "PWA",
                "Machine Learning",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full border border-white/10 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;
