import { motion } from "framer-motion";
import {
  FaDatabase,
  FaChartLine,
  FaCloud,
  FaBrain,
} from "react-icons/fa";

const projects = [
  {
    title:
      "Data Driven Sales & Inventory Analytics System for Revenue Leakage Control",
    description:
      "A comprehensive analytics platform designed to identify revenue leakage, improve inventory visibility, generate business intelligence reports, and support strategic decision-making.",
    technologies: [
      "Python",
      "React",
      "Node.js",
      "MongoDB",
      "Power BI",
    ],
    icon: <FaChartLine />,
    status: "Featured Project",
  },
  {
    title: "SME Credit Scoring Platform",
    description:
      "Machine learning-based credit scoring system that evaluates SME financial health using transaction and operational data to support lending decisions.",
    technologies: [
      "Python",
      "Machine Learning",
      "Flask",
      "MySQL",
    ],
    icon: <FaBrain />,
    status: "Research Project",
  },
  {
    title: "Cloud-Based Portfolio Management System",
    description:
      "A modern portfolio management platform deployed on cloud infrastructure with secure file storage and responsive user interfaces.",
    technologies: [
      "React",
      "Node.js",
      "Cloudinary",
      "MongoDB",
    ],
    icon: <FaCloud />,
    status: "Personal Project",
  },
];

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

      <motion.div
        className="relative max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white shadow-md text-sm font-medium text-[#FF6F61]">
            My Work
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-[#0B1F3A]">
            Featured
            <span className="block bg-gradient-to-r from-[#FF6F61] to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 leading-8">
            A collection of projects demonstrating my experience in data
            analytics, software development, machine learning, and cloud
            computing.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-[32px]
                border
                border-white
                shadow-lg
                overflow-hidden
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              {/* Project Header */}
              <div className="h-40 bg-gradient-to-br from-[#0B1F3A] to-[#132F57] flex items-center justify-center">
                <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-4xl">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-center">
                  <span className="px-4 py-2 bg-orange-100 text-[#FF6F61] text-sm rounded-full font-medium">
                    {project.status}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-bold text-[#0B1F3A] leading-snug">
                  {project.title}
                </h2>

                <p className="mt-5 text-slate-600 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-slate-100
                        text-slate-700
                        text-sm
                        font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#0B1F3A] to-[#132F57] rounded-[40px] p-12 text-center text-white shadow-2xl">
            <FaDatabase className="mx-auto text-5xl text-[#FF6F61]" />

            <h2 className="mt-6 text-3xl font-bold">
              Turning Ideas Into Impactful Solutions
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-slate-300 leading-8">
              Every project reflects my passion for data analytics, software
              engineering, machine learning, and cloud technologies. My goal is
              to build solutions that are useful, scalable, and capable of
              solving real-world challenges.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;