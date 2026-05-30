const Footer = () => {
  return (
    <footer className="bg-[#0B1F3A] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 lg:flex lg:items-center lg:justify-between">
        <div className="space-y-3">
          <h2 className="font-bold text-2xl">Jasmin Haus Muswadico</h2>
          <p className="text-gray-300">Eastern Africa Statistical Training Centre</p>
          <p className="text-gray-400 max-w-xl leading-7">
            Creating clean data stories, polished dashboards, and cloud-ready analytics for modern learning and business improvement.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 lg:mt-0">
          <a href="/" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:border-white/40 hover:bg-white/10">
            Portfolio
          </a>
          <a href="/contact" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm transition hover:border-white/40 hover:bg-white/10">
            Contact Me
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;