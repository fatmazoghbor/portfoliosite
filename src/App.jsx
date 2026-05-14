export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans relative overflow-x-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_50%)] pointer-events-none"></div>

      <nav className="px-4 sm:px-10 py-4 border-b border-cyan-900/30 backdrop-blur relative z-10">

        {/* Bottom row: Links */}
        <div className="mt-3 flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300">
          <a className="hover:text-cyan-400 transition" href="#projects">Projects</a>
          <a className="hover:text-cyan-400 transition" href="#skills">Skills</a>
          <a className="hover:text-cyan-400 transition" href="#contact">Contact</a>
        </div>

      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[100vh] px-4 sm:px-6 py-10">

        {/* Profile Image */}
        <img
          src="/Pfp.jpeg"
          alt="Profile"
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-2 border-cyan-400 shadow-lg mb-6"
        />

        <p className="text-cyan-400 tracking-[0.2em] text-xs sm:text-sm">
          Portfolio
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mt-4 leading-tight">
          Fatima Zoghbor
        </h1>

        <p className="text-gray-400 mt-4 max-w-xs sm:max-w-xl text-sm sm:text-base">
          Cybersecurity • Cloud Security • Network Defense • Cryptography
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto items-center">

          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 bg-cyan-500 text-black font-bold rounded-md hover:shadow-[0_0_20px_cyan] transition text-center"
          >
            VIEW PROJECTS
          </a>

          <a
            href="/Resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 border border-cyan-500 text-cyan-300 font-bold rounded-md hover:bg-cyan-500 hover:text-black transition text-center"
          >
            DOWNLOAD CV
          </a>

        </div>
      </section>

    </div>
  );
}
