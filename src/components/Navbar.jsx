import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ProfileUploader from "./ProfileUploader";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0B1F3A] shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 lg:px-6">
        <div className="flex items-center gap-3">
          <ProfileUploader />
          <div>
            <h1 className="text-white font-bold text-xl">Jasmin Haus Muswadico</h1>
            <p className="text-gray-300 text-sm">EASTC Student</p>
          </div>
        </div>

        <button
          className="lg:hidden text-white p-3 rounded-full border border-white/10 hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <div className="hidden lg:flex items-center gap-8 text-white text-sm font-medium">
          {navLinks.map((nav) => (
            <Link key={nav.name} to={nav.href} state={{ noAnim: true }} className="hover:text-[#FF6F61] transition">
              {nav.name}
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-[#0B1F3A]"
          >
            <div className="flex flex-col gap-4 px-6 py-5 text-white text-base font-medium">
              {navLinks.map((nav) => (
                <Link
                  key={nav.name}
                  to={nav.href}
                  state={{ noAnim: true }}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 hover:bg-white/10 transition"
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;