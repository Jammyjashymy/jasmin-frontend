import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import API from "../api/portfolioApi";

import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    getPortfolioData();
  }, []);

  const getPortfolioData = async () => {
    try {
      const response = await API.get("/portfolio");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >

      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold text-[#0B1F3A] mb-4">
          Contact Information
        </h1>

        <p className="text-gray-600 text-lg">
          Feel free to reach out through any of the channels below.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">
            Personal Contacts
          </h2>

          <div className="flex items-center gap-5 mb-8">

            <div className="bg-[#FF6F61] p-4 rounded-full text-white">
              <FaPhone size={24} />
            </div>

            <div>
              <h3 className="font-semibold">
                Phone Number
              </h3>

              <p className="text-gray-600">
                {data.phone}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5 mb-8">

            <div className="bg-[#FF6F61] p-4 rounded-full text-white">
              <FaEnvelope size={24} />
            </div>

            <div>
              <h3 className="font-semibold">
                Email Address
              </h3>

              <p className="text-gray-600">
                {data.email}
              </p>
            </div>

          </div>

          <a
            href="https://wa.me/255753100316?text=Hello%20Jasmin,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
          >

            <div className="flex items-center gap-5 mb-8 hover:bg-gray-50 p-3 rounded-xl transition">

              <div className="bg-green-500 p-4 rounded-full text-white">
                <FaWhatsapp size={24} />
              </div>

              <div>
                <h3 className="font-semibold">
                  WhatsApp
                </h3>

                <p className="text-gray-600">
                  Click to Chat
                </p>
              </div>

            </div>

          </a>

          <div className="flex items-center gap-5">

            <div className="bg-[#FF6F61] p-4 rounded-full text-white">
              <FaMapMarkerAlt size={24} />
            </div>

            <div>
              <h3 className="font-semibold">
                Location
              </h3>

              <p className="text-gray-600">
                Dar es Salaam, Tanzania
              </p>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-[#0B1F3A] mb-8">
            Academic Information
          </h2>

          <div className="flex items-center gap-5 mb-8">

            <div className="bg-[#FF6F61] p-4 rounded-full text-white">
              <FaGraduationCap size={24} />
            </div>

            <div>

              <h3 className="font-semibold">
                Institution
              </h3>

              <p className="text-gray-600">
                {data.institution}
              </p>

            </div>

          </div>

          <div className="border-t pt-8">

            <h3 className="font-bold text-xl text-[#0B1F3A] mb-5">
              Professional Profiles
            </h3>

            <div className="flex gap-5">

              <a
                href="https://github.com/"
                className="bg-[#F1F3F5] p-4 rounded-full hover:scale-110 transition"
              >
                <FaGithub
                  size={28}
                  className="text-[#0B1F3A]"
                />
              </a>

              <a
                href="https://www.linkedin.com/"
                className="bg-[#F1F3F5] p-4 rounded-full hover:scale-110 transition"
              >
                <FaLinkedin
                  size={28}
                  className="text-[#0B1F3A]"
                />
              </a>

            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
};

export default Contact;
