import certAWS from "../assets/certificate.png";
import certIBM2025 from "../assets/image.png";
import certIBM2022 from "../assets/certificate1.png";
import certCoursera from "../assets/coursera.png";
export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans relative overflow-x-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255, 0, 76, 0.15),transparent_50%)] pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 sm:px-10 py-6 border-b border-cyan-900/30 backdrop-blur relative z-10">

        <h1 className="text-cyan-400 font-bold text-sm sm:text-xl tracking-widest">
          MY PORTFOLIO
        </h1>

        <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm text-gray-300">
          <a className="hover:text-cyan-400 transition" href="#projects">Projects</a>
          <a className="hover:text-cyan-400 transition" href="#skills">Skills</a>
          <a className="hover:text-cyan-400 transition" href="#contact">Contact</a>
        </div>

      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6">

        {/* Profile Picture */}
        <img
          src="/Pfp.jpeg"
          alt="Profile"
          className="w-50 h-50 rounded-full object-cover border-2 border-cyan-400  mb-6"
        />

        <p className="text-cyan-400 tracking-[0.3em] text-sm">
          Portfolio
        </p>

        <h1 className="text-4xl sm:text-6xl font-bold mt-6 leading-tight">
          Fatima Zoghbor
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base">
          Hello There! Welcome to my portfolio.
          <ul> Feel free to check out my resume, projects, and skills below. </ul>
        </p>
    
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <a
            href="#projects"
            className="px-8 py-3 border border-cyan-500 text-white font-bold rounded-md hover:bg-white-500 hover:bg-cyan-500 hover:text-cyan transition"
          >
            VIEW PROJECTS
          </a>

          <a
            href="https://drive.google.com/file/d/15-uJH8zxuH9nzc469QVZOCaYXQc-bUy9/view?usp=sharing"
            
            className="px-8 py-3 border border-cyan-500 text-white font-bold rounded-md hover:bg-cyan-500 hover:text-cyan transition"
          >
            VIEW RESUME
          </a>

        </div>

      </section>
 
      {/* PROJECTS */}
      <section id="projects" className="px-6 sm:px-16 py-20">

        <h2 className="text-3xl font-bold text-cyan-400 mb-10">
          Latest Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
  {/* Login Security */}
          <a
            href="https://github.com/fatmazoghbor/DualLoginModules.git"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-white-500/30 p-6 rounded-xl bg-grey hover: transition"
          >

        <div className="grid md:grid-cols-2 gap-8">
        </div>
           <h3 className="text-cyan-400 font-bold text-lg">
              Dual-Module Login Security System
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              Built insecure vs secure login system to demonstrate vulnerabilities.
            </p>

            <ul className="text-gray-500 text-xs mt-4">
              <li>• SQL Injection simulation</li>
              <li>• Argon2 secure hashing</li>
              <li>• Rate limiting & lockout</li>
              <li>• Structured logging</li>
            </ul>
<div className="flex gap-3 mt-5 flex-wrap">

  <a
    href="https://github.com/fatmazoghbor/DualLoginModules.git"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md hover:bg-white-500 hover:text-white transition"
  >
    View Source Code
  </a>

  <a
    href="https://drive.google.com/file/d/1KS8G1lcG94gAHdu7kpxOILyJygE-kPLr/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md  hover:text-white transition"
  >
    View Presentation
  </a>
</div>

<div className="flex justify-end mt-3">
  <div className="text-gray-400 text-sm"> 
    <p> This project demonstrates how insecure authentication systems can be exploited through SQL injection, weak hashing, and missing rate limiting — and how secure design mitigates these risks. 
      </p> 
  </div>
</div>

          </a>
  {/* AI Avatar */}
          <div className="border border-white-500/30 p-6 rounded-xl bg-grey hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition">

            <h3 className="text-cyan-400 font-bold text-lg">
              AI Avatar Digital Humans (Capstone Project)
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              Enhanced an interactive AI avatar with smart communication and IoT integrations.
            </p>

            <ul className="text-gray-500 text-xs mt-4 space-y-1">
              <li>• Unreal Engine 5 + Convai AI integration</li>
              <li>• Gesture recognition using MediaPipe + DeepFace</li>
              <li>• GPS & itinerary system implementation</li>
              <li>• Arduino + MQTT IoT connectivity</li>
              <li>• ARCware cloud streaming + Firebase backend</li>
            </ul>
<div className="flex gap-3 mt-5 flex-wrap">


  <a
    href="https://drive.google.com/file/d/1bpXCHMbVvzzSmw3ZGCoIhXRI6VWE8m5Y/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md hover:bg-white-500 hover:text-white transition"
  >
    View Demo
  </a>

  <a
    href="https://drive.google.com/file/d/1pC8slrgSIt-V6THxeGMpTiDvyVAqWxWj/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md  hover:text-white transition"
  >
    View Presentation
  </a>
<div className="flex justify-end mt-3">
  <div className="text-gray-400 text-sm"> 
    <p> This project was a collaboration with PwC, however, I do not have the access to the actual AI platform so this demo shows the features implemented.
      </p> 
  </div>
</div>
</div>
          </div>

        
          {/* CrimeTrack */}
          <div className="border border-white-500/30 p-6 rounded-xl bg-grey hover:shadow-[0_0_25px_rgba(0,255,255,0.15)] transition">

            <h3 className="text-cyan-400 font-bold text-lg">
              CrimeTrack Application
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              Designed and developed a real-time law enforcement and incident response hypothetical platform.
            </p>

            <ul className="text-gray-500 text-xs mt-4 space-y-1">
              <li>• Real-time crime alerts & incident reporting system</li>
              <li>• Live dispatch dashboard with officer tracking</li>
              <li>• Citizen reports with case assignment workflow</li>
              <li>• Crime trend analytics & heatmaps</li>
              <li>• Clean UI/UX with responsive navigation</li>
            </ul>
<div className="flex gap-3 mt-5 flex-wrap">

  <a
    href="https://drive.google.com/file/d/1jDKrVO6srkBNLllO0EWBfx07OMbDd4fe/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md hover:bg-white-500 hover:text-white transition"
 
  >
    View Report
  </a>

  <a
    href="https://www.figma.com/proto/AyUcs71ho5QvJdAfa00hjW/CrimeTrack_App?node-id=7038-218&starting-point-node-id=7020%3A3572&t=aYnQFQjfh72Cw5RR-1"
    target="_blank"
    rel="noopener noreferrer"
   className="px-4 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md hover:bg-white-500 hover:text-white transition"
  >
    View Prototype
  </a>

<div className="flex justify-end mt-3">
  <div className="text-gray-400 text-sm"> 
    <p> This prototype demonstrates how the "CrimeTrack" application would be designed and created. This course was showing us the Human Computer Interaction and how to design a good User Interface.
      </p> 
  </div>
</div>
</div>
          </div>

       
</div>
</section>

      {/* SKILLS */}
      <section id="skills" className="px-6 sm:px-16 py-20 border-t border-white-900/30">

        <h2 className="text-3xl font-bold text-cyan-400 mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4 text-sm">

          <span className="border border-cyan-500/30 px-4 py-2 rounded-lg bg-grey">
            Cybersecurity
          </span>

          <span className="border border-cyan-500/30 px-4 py-2 rounded-lg bg-grey">
            AWS
          </span>

          <span className="border border-cyan-500/30 px-4 py-2 rounded-lg bg-grey">
            Cryptography
          </span>

          <span className="border border-cyan-500/30 px-4 py-2 rounded-lg bg-grey">
            UI/UX
          </span>

          <span className="border border-cyan-500/30 px-4 py-2 rounded-lg bg-grey">
            Project Management
          </span>

          <span className="border border-cyan-500/30 px-4 py-2 rounded-lg bg-grey">
            Network Security
          </span>

        </div>

      </section>
      {/* CERTIFICATIONS */}
<section className="px-6 sm:px-16 py-2">

  <h2 className="text-3xl font-bold text-cyan-400 mb-8">
    Certifications
  </h2>

  {/* GRID WRAPPER */}
  <div className="grid md:grid-cols-3 gap-8">

    {/* CERT 1 - AWS 2026 */}
    <div className="flex flex-col items-center text-center">

      <img
        src={certAWS}
        alt="AWS Certificate"
        className="w-40 h-40 object-cover border-2 border-cyan-400 rounded-lg"
      />

      <h3 className="text-sm font-bold text-gray-200 mt-4">
        AWS Academy Graduate - Cloud Security Builder
      </h3>

      <p className="text-gray-400 text-sm">Amazon Web Services</p>
      <p className="text-gray-500 text-xs">Issued March 2026</p>

      <a
        href="https://www.credly.com/badges/a33d27cc-3b87-4909-b6eb-62d82edf4f90/linked_in_profile"
        target="_blank"
        className="mt-2 px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md  hover:text-white transition"
      >
        View Certificate
      </a>

    </div>

    {/* CERT 2 - IBM 2025 */}
    <div className="flex flex-col items-center text-center">

      <img
        src={certIBM2025}
        alt="IBM Certificate"
        className="w-40 h-40 object-cover border-2 border-cyan-400 rounded-lg"
      />

      <h3 className="text-sm font-bold text-gray-200 mt-4">
        Code Generation and Optimization Using IBM Granite
      </h3>

      <p className="text-gray-400 text-sm">IBM</p>
      <p className="text-gray-500 text-xs">Issued March 2025</p>

      <a
        href="https://www.credly.com/badges/78846b64-89b0-41d5-8b22-0e71521e19dd/linked_in_profile"
        target="_blank"
        className="mt-2 px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md  hover:text-white transition"
      >
        View Certificate
      </a>

    </div>

    {/* CERT 3 - IBM 2022 */}
    <div className="flex flex-col items-center text-center">

      <img
        src={certCoursera}
        alt="coursera Certificate"
        className="px-2 py-2 object-cover border-2 border-cyan-400"
      />

      <h3 className="text-sm font-bold text-gray-200 mt-4">
       Foundations of Cybersecurity
      </h3>

      <p className="text-gray-400 text-sm">IBM</p>
      <p className="text-gray-500 text-xs">Issued Feb 2025</p>

      <a
        href="https://coursera.org/share/2b14e290e6c2c325e6cbae1d798e35fb"
        target="_blank"
        className="mt-2 px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md  hover:text-white transition"
      >
        View Certificate
      </a>

    </div>
{/* CERT 3 - IBM 2022 */}
    <div className="flex flex-col items-center text-center">

      <img
        src={certIBM2022}
        alt="IBM Certificate"
        className="w-40 h-40 object-cover border-2 border-cyan-400 rounded-lg"
      />

      <h3 className="text-sm font-bold text-gray-200 mt-4">
        Getting Started with Threat Intelligence and Hunting
      </h3>

      <p className="text-gray-400 text-sm">IBM</p>
      <p className="text-gray-500 text-xs">Issued Nov 2022</p>

      <a
        href="https://www.credly.com/badges/27ac68e1-2e84-4947-b349-a41b82d99c12/linked_in_profile"
        target="_blank"
        className="mt-2 px-5 py-2 text-xs border border-cyan-500 text-cyan-300 rounded-md  hover:text-white transition"
      >
        View Certificate
      </a>

    </div>
  </div>

</section>

<div className="mt-0 grid md:grid-cols-2 gap-5">
 
{/* LANGUAGES */}
<section className="px-6 sm:px-16 py-16 flex justify-center">

  <div className="w-full max-w-2xl">

    <h2 className="text-3xl font-bold text-cyan-400 mb-10 text-center">
      Languages
    </h2>

    {/* English */}
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-300">
        <span>English</span>
        <span>100%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "100%" }}></div>
      </div>
    </div>

    {/* Arabic */}
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-300">
        <span>Arabic</span>
        <span>100%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "100%" }}></div>
      </div>
    </div>

    {/* French */}
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-300">
        <span>French</span>
        <span>50%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 mt-2">
        <div className="bg-cyan-500 h-2 rounded-full" style={{ width: "50%" }}></div>
      </div>
    </div>

  </div>

</section>
  </div>



      {/* CONTACT */}
      <section id="contact" className="px-6 sm:px-16 py-20 border-t border-white-900/30">

        <h2 className="text-3xl font-bold text-cyan-400 mb-10">
          Contact Me
        </h2>

        <div className="flex flex-col gap-4 text-gray-400">

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSPFdNFMNKVWFbMGSBprgndkHNHJphgtxxBgFpFQnNDPgLwXHVnqrqwJMnCRHKnzBKsPCdfn"
            className="hover:text-cyan-400 transition"
          >
            📧 fzoghbour@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/fatimazoghbor/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            🔗 LinkedIn
          </a>
      <a 
      href="https://cyberr.ai/u/380e4edd-e1b2-420e-a592-e4c8586d5b65"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-cyan-400 transition"

      >
       🔒 Cyberr
      </a>
        </div>

      </section>

    </div>
  );
}
