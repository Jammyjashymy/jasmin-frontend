import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaDatabase,
  FaCloud,
  FaCode,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  const skills = [
    "Python",
    "R Programming",
    "React.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "Power BI",
    "Tableau",
    "Machine Learning",
    "Cloud Computing",
    "Statistics",
    "Data Analytics",
  ];

  const strengths = [
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description:
        "Transforming raw data into meaningful insights that support smarter decision-making and business growth.",
    },
    {
      icon: <FaCode />,
      title: "Software Development",
      description:
        "Building responsive, scalable, and user-friendly applications using modern development technologies.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description:
        "Designing and deploying cloud-ready solutions that improve accessibility and performance.",
    },
    {
      icon: <FaBrain />,
      title: "Machine Learning",
      description:
        "Applying intelligent algorithms and predictive models to solve complex real-world challenges.",
    },
  ];

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white shadow-md text-sm font-medium text-[#FF6F61]">
            About Me
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-[#0B1F3A]">
            Passionate About
            <span className="block bg-gradient-to-r from-[#FF6F61] to-orange-500 bg-clip-text text-transparent">
              Data & Technology
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-600 leading-8">
            A dedicated Data Science and Information Technology student focused
            on building innovative solutions through analytics, software
            engineering, and emerging technologies.
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/70
            backdrop-blur-xl
            rounded-[40px]
            shadow-[0_30px_100px_rgba(15,23,42,0.08)]
            border
            border-white
            p-10
            lg:p-14
          "
        >
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                <FaUserGraduate className="text-2xl text-[#FF6F61]" />
              </div>

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                Who I Am
              </h2>
            </div>

            <p className="text-slate-600 leading-8 text-lg">
              My name is <strong>Jasmin Haus Muswadico</strong>, a Third-Year
              student at the Eastern Africa Statistical Training Centre (EASTC),
              specializing in Data Science.
            </p>

            <p className="mt-6 text-slate-600 leading-8 text-lg">
              I am passionate about leveraging data, technology, and innovation
              to solve real-world problems. My interests span across data
              analytics, software engineering, machine learning, cloud
              computing, statistical programming, and business intelligence.
            </p>

            <p className="mt-6 text-slate-600 leading-8 text-lg">
              Through academic projects and practical development experience, I
              continuously explore modern technologies that transform ideas into
              impactful digital solutions capable of creating measurable value.
            </p>

            {/* Interest Tags */}
            <div className="flex flex-wrap gap-4 mt-10">
              {[
                "Data Science",
                "Software Development",
                "Machine Learning",
                "Cloud Computing",
                "Business Intelligence",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-5 py-3
                    rounded-full
                    bg-orange-50
                    text-[#FF6F61]
                    font-medium
                    shadow-sm
                    hover:shadow-md
                    transition
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#0B1F3A] mb-10">
            Technical Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-5 py-3
                  bg-white
                  rounded-full
                  shadow-md
                  hover:shadow-xl
                  hover:scale-105
                  transition-all
                  duration-300
                  text-[#0B1F3A]
                  font-medium
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Strengths */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {strengths.map((item) => (
            <div
              key={item.title}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
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
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-[#FF6F61] text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-[#0B1F3A] to-[#132F57] rounded-[40px] p-10 text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4">
            <FaDatabase className="text-3xl text-[#FF6F61]" />

            <h2 className="text-3xl font-bold">
              Education
            </h2>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold">
              Bachelor Degree in Data Science 
            </h3>

            <p className="mt-3 text-slate-300">
              Eastern Africa Statistical Training Centre (EASTC)
            </p>

            <p className="mt-2 text-slate-400">
              Third Year Student • Data Analytics • Software Development •
              Machine Learning • Cloud Computing
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;