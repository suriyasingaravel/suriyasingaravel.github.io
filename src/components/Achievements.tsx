import React from "react";
import { motion } from "framer-motion";
import { Trophy, Target, Lightbulb, Rocket, Award, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Production-Level Applications",
      description:
        "Developed complete production-level apps solo, handling full-stack development from concept to deployment",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      metric: "3+ Apps",
      highlight: "Solo Development",
    },
    {
      id: 2,
      title: "Payment Gateway Integration",
      description:
        "Successfully integrated Juspay and PayU payment gateways with secure transaction handling",
      icon: Target,
      color: "from-green-500 to-teal-500",
      metric: "2 Gateways",
      highlight: "Secure Payments",
    },
    {
      id: 3,
      title: "Career Transition Success",
      description:
        "Successfully transitioned into tech from a non-tech background, mastering modern web technologies",
      icon: Trophy,
      color: "from-purple-500 to-pink-500",
      metric: "100% Self-taught",
      highlight: "Career Pivot",
    },
    {
      id: 4,
      title: "AI Technology Explorer",
      description:
        "Self-taught AI and exploring RAG pipelines, integrating cutting-edge AI solutions into web applications",
      icon: Lightbulb,
      color: "from-orange-500 to-red-500",
      metric: "AI Integration",
      highlight: "Innovation",
    },
  ];

  const stats = [
    { label: "Orders Processed", value: "5,000+", icon: Award },
    { label: "Years Experience", value: "3+", icon: Star },
    { label: "Projects Completed", value: "10+", icon: Trophy },
    { label: "Technologies Mastered", value: "15+", icon: Target },
  ];

  return (
    <section id="achievements" className="py-20 relative">
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
              Key Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones that define my journey as a developer and showcase my
            commitment to excellence
          </p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color} flex-shrink-0`}
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <span
                        className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white font-semibold`}
                      >
                        {achievement.highlight}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-3`}
                    >
                      {achievement.metric}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-6">
                  <div className="w-full bg-slate-700/50 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${achievement.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"
            >
              <Trophy className="w-8 h-8 text-white" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Self-Made Developer
              </span>
            </h3>
            
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
              From textile industry professional to full-stack developer, my journey represents dedication, 
              continuous learning, and the power of determination. Every line of code written, every problem 
              solved, and every application built has been a step forward in this incredible transformation.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["Self-Taught", "Problem Solver", "Quick Learner", "Team Player", "Innovation Focused"].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full border border-white/10 text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Achievements;
