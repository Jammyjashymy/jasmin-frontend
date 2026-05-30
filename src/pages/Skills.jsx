import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaCode,
  FaDatabase,
  FaChartLine,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

const skills = [
  {
    label: "C++",
    icon: <FaCode />,
    description: "Object-oriented programming and algorithm development.",
  },
  {
    label: "Python",
    icon: <FaPython />,
    description: "Data analysis, automation, machine learning, and scripting.",
  },
  {
    label: "R Programming",
    icon: <FaChartLine />,
    description: "Statistical computing, visualization, and analytics.",
  },
  {
    label: "Stata",
    icon: <FaDatabase />,
    description: "Statistical analysis, data management, and research.",
  },
  {
    label: "HTML5",
    icon: <FaHtml5 />,
    description: "Building semantic and accessible web structures.",
  },
  {
    label: "CSS3",
    icon: <FaCss3Alt />,
    description: "Responsive layouts and modern user interfaces.",
  },
];

const additionalSkills = [
  {
    icon: <FaReact />,
    name: "React.js",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <FaGitAlt />,
    name: "Git & GitHub",
  },
  {
    icon: <FaDatabase />,
    name: "SQL",
  },
];

const Skills = () => {
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
            Technical Skills
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-[#0B1F3A]">
            Skills &
            <span className="block bg-gradient-to-r from-[#FF6F61] to-orange-500 bg-clip-text text-transparent">
              Qualifications
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 leading-8">
            A combination of programming, statistical analysis, data science,
            and web development skills that enable me to build impactful
            data-driven solutions.
          </p>
        </motion.div>

        {/* Main Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-[32px]
                p-8
                border
                border-white
                shadow-lg
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-orange-100
                to-orange-50
                flex
                items-center
                justify-center
                text-[#FF6F61]
                text-3xl
                shadow-md
              "
              >
                {skill.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold text-[#0B1F3A]">
                {skill.label}
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-10 border border-white shadow-xl">
            <h2 className="text-3xl font-bold text-[#0B1F3A] text-center">
              Additional Technologies
            </h2>

            <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
              Technologies and tools I frequently use when developing modern
              applications and data-driven solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              {additionalSkills.map((item) => (
                <div
                  key={item.name}
                  className="
                    flex
                    items-center
                    gap-3
                    px-6
                    py-4
                    rounded-2xl
                    bg-white
                    shadow-md
                    hover:shadow-xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <span className="text-[#FF6F61] text-2xl">
                    {item.icon}
                  </span>

                  <span className="font-semibold text-[#0B1F3A]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#0B1F3A] to-[#132F57] rounded-[40px] p-10 text-white shadow-2xl">
            <h2 className="text-3xl font-bold">
              Areas of Expertise
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                "Data Analytics",
                "Statistical Computing",
                "Machine Learning",
                "Web Development",
                "Cloud Computing",
                "Data Visualization",
                "Business Intelligence",
                "Database Management",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    bg-white/10
                    backdrop-blur-md
                    rounded-2xl
                    px-5
                    py-4
                    border
                    border-white/10
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;