import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaChartLine,
  FaCloud,
  FaLightbulb,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import API from "../api/portfolioApi";

const Home = () => {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await API.get("/portfolio");
      setPortfolio(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const features = [
    {
      icon: <FaChartLine className="text-2xl text-[#FF6F61]" />,
      title: "Data Analytics",
      description:
        "Transforming complex datasets into meaningful insights that support informed decision-making and business growth.",
    },
    {
      icon: <FaCloud className="text-2xl text-[#FF6F61]" />,
      title: "Cloud Computing",
      description:
        "Building scalable and cloud-ready solutions using modern technologies and efficient deployment practices.",
    },
    {
      icon: <FaLightbulb className="text-2xl text-[#FF6F61]" />,
      title: "Problem Solving",
      description:
        "Applying analytical thinking, innovation, and creativity to solve real-world challenges.",
    },
    {
      icon: <FaCode className="text-2xl text-[#FF6F61]" />,
      title: "Software Development",
      description:
        "Creating responsive, user-friendly, and modern applications with clean and maintainable code.",
    },
  ];

  const skills = [
    "Python",
    "R Programming",
    "React.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "Power BI",
    "Machine Learning",
    "Cloud Computing",
  ];

  const highlights = [
    {
      title: "Data-Driven Solutions",
      description:
        "Using analytics and visualization to turn information into actionable insights.",
    },
    {
      title: "Modern Development",
      description:
        "Building scalable applications with contemporary technologies and best practices.",
    },
    {
      title: "Continuous Learning",
      description:
        "Exploring emerging technologies and improving skills through practical experience.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg border border-orange-100 mb-8">
            <span className="text-sm text-slate-600">
              👋 Hello, I'm
            </span>

            <span className="font-semibold text-[#FF6F61]">
              {portfolio?.name || "Jasmin Haus Muswadico"}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B1F3A] leading-tight">
            Transforming
            <span className="block bg-gradient-to-r from-[#FF6F61] to-orange-500 bg-clip-text text-transparent">
              Data Into Decisions
            </span>
          </h1>

          {/* Typing Animation */}
          <div className="mt-6 text-2xl md:text-3xl font-bold text-[#FF6F61] min-h-[50px]">
            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Python Developer",
                2000,
                "Statistical Programmer",
                2000,
                "Cloud Computing Student",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-8 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">
            I am passionate about transforming data into meaningful insights,
            building modern software solutions, and leveraging technology to
            solve real-world problems through analytics, development, and
            innovation.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2
                  rounded-full
                  bg-white
                  shadow-md
                  text-sm
                  font-medium
                  text-[#0B1F3A]
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Link
              to="/projects"
              className="
                inline-flex
                items-center
                gap-3
                px-8
                py-4
                rounded-full
                bg-gradient-to-r
                from-[#FF6F61]
                to-orange-500
                text-white
                font-semibold
                shadow-lg
                hover:scale-105
                transition-all
                duration-300
              "
            >
              View Projects
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                p-7
                border
                border-white
                shadow-lg
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-3 gap-6 mt-20"
        >
          {highlights.map((item) => (
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
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <h3 className="text-xl font-bold text-[#0B1F3A]">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-[#0B1F3A] to-[#132F57] rounded-[40px] p-10 md:p-14 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Building Solutions Through Data & Technology
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-8">
              My goal is to combine analytics, software engineering, and modern
              technologies to create innovative solutions that generate impact,
              improve decision-making, and support digital transformation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;