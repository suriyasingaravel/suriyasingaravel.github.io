import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  Code,
  TrendingUp,
  Package,
  Users,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "HOGR Food Network Limited",
      location: "Kochi, India",
      period: "2024 - Present",
      type: "Full-time",
      description: "Building AI-driven products like Chocochip.ai and HOGR",
      achievements: [
        "Built complete restaurant management system from scratch",
        "Integrated Juspay and PayU payment gateways",
        "Processed over 5000+ purchase orders",
        "Developed AI-powered chatbot for customer assistance",
      ],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      current: true,
    },
    {
      id: 2,
      title: "Marketing & Web Development Executive",
      company: "KG Denim Ltd",
      location: "Bengaluru, India",
      period: "2022 - 2023",
      type: "Full-time",
      description:
        "Developed marketing web pages and digital solutions to enhance brand presence",
      achievements: [
        "Developed static web pages using HTML5, CSS3, and JavaScript for marketing initiatives and product showcases",
        "Built promotional landing pages and internal tools to support brand communication strategies using Webflow and custom API integrations",
        "Increased brand visibility through digital marketing campaigns and optimized web experiences",
        "Managed client relationships and coordinated with production teams for seamless order fulfillment",
      ],
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      current: false,
    },

    {
      id: 3,
      title: "Merchandiser",
      company: "Gokaldas Exports",
      location: "Bengaluru, India",
      period: "2022 - 2023",
      type: "Full-time",
      description:
        "Collaborated with Banana Republic, handled sampling, tech packs, costing, and approvals",
      achievements: [
        "Managed tech packs and costing for Banana Republic",
        "Coordinated sampling and approval processes",
        "Maintained quality standards for international exports",
        "Built strong relationships with international clients",
      ],
      icon: Users,
      color: "from-orange-500 to-red-500",
      current: false,
    },
    {
      id: 4,
      title: "Product Developer",
      company: "Advanced Clothing Concepts",
      location: "Coimbatore, India",
      period: "2019 - 2022",
      type: "Full-time",
      description: "Product development and merchandising",
      achievements: [
        "Developed new product lines for domestic markets",
        "Collaborated with design teams on innovative concepts",
        "Managed sample development and approval processes",
        "Coordinated with manufacturing for quality assurance",
      ],
      icon: Package,
      color: "from-purple-500 to-pink-500",
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            My journey from textile industry to tech, showcasing diverse
            experience and adaptability
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 sm:left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center border-4 border-slate-900 shadow-lg`}
                  >
                    <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`w-full pl-16 sm:pl-20 md:pl-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8 lg:pr-12"
                      : "md:ml-auto md:pl-8 lg:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-slate-800/30 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-3 sm:mb-4 gap-2">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-400 mb-2">
                          <Building
                            size={14}
                            className="sm:w-4 sm:h-4 flex-shrink-0"
                          />
                          <span className="line-clamp-1">{exp.company}</span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white text-xs px-2 py-1 sm:px-3 rounded-full whitespace-nowrap">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar
                          size={14}
                          className="sm:w-4 sm:h-4 flex-shrink-0"
                        />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin
                          size={14}
                          className="sm:w-4 sm:h-4 flex-shrink-0"
                        />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-200">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + i * 0.05,
                            }}
                            viewport={{ once: true }}
                            className="text-xs sm:text-sm text-gray-400 flex items-start space-x-2"
                          >
                            <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">
                              {achievement}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
