export default function App() {
  return (
    <div className="min-h-screen bg-[#05070d] text-white font-sans relative">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_50%)] pointer-events-none"></div>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-cyan-900/30 backdrop-blur relative z-10">
        <h1 className="text-cyan-400 font-bold text-xl tracking-widest">
          CYBER PORTFOLIO
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">
          <a className="hover:text-cyan-400 transition" href="#projects">Projects</a>
          <a className="hover:text-cyan-400 transition" href="#skills">Skills</a>
          <a className="hover:text-cyan-400 transition" href="#contact">Contact</a>
        </div>
      </nav>

     {/* HERO */}
<section className="relative flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen px-6 gap-10 z-10">

  {/* TEXT */}
  <div className="max-w-xl">
    <p className="text-cyan-400 tracking-[0.3em] text-sm">
      Portfolio
    </p>

    <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
      Fatima Zoghbor
    </h1>

    <p className="text-gray-400 mt-4">
      Cybersecurity • Cloud Security • Network Defense • Cryptography
    </p>

    {/* NEW INTRO TEXT */}
    <p className="text-gray-300 mt-6 text-sm leading-relaxed">
      Hi there! Welcome to my portfolio. I am Fatima, a Computer Science graduate passionate about cybersecurity,
      UI/UX design, network and system security. 
    </p>


  </div>
 <a
    href="/Resume.pdf"
    download
    className="mt-8 inline-block px-8 py-3 bg-cyan-500 text-black font-bold hover:bg-cyan-400 hover:text-black transition"
  >
    DOWNLOAD RESUME
  </a>
    <a
      href="#projects"
      className="mt-8 inline-block px-8 py-3 bg-cyan-500 text-black font-bold rounded-md hover:shadow-[0_0_20px_cyan] transition"
    >
      VIEW LATEST PROJECTS
    </a>


  {/* IMAGE */}
  <div className="flex justify-center">
    <img
      src="/Pfp.jpeg"
      alt="Fatima"
      className="w-50 h-50 md:w-72 md:h-72 rounded-full object-cover border-2 border-cyan-400 shadow-lg"
    />
  </div>

</section>
      {/* PROJECTS */}
      <section id="projects" className="px-10 py-20">

        <h2 className="text-cyan-400 text-2xl tracking-widest mb-10">
          UNDERGRADUATE PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

 {/*AI Digital Humans*/}
          <a
            href="https://drive.google.com/file/d/1bpXCHMbVvzzSmw3ZGCoIhXRI6VWE8m5Y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-cyan-900/40 p-6 rounded-xl bg-[#0b1220] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition"
          >
            <h3 className="text-cyan-300 font-bold text-lg">
              AI Digital Humans Project (Capstone Project)
            </h3>

<p className="text-gray-400 mt-3 text-sm">
  Implemented GPS tracking, gesture recognition, and itinerary-based interaction features into an AI avatar system.
</p>

<ul className="text-gray-500 text-xs mt-4 space-y-1">
  <li>• Real-time AI avatar powered by Unreal Engine 5 and Convai</li>
  <li>• Gesture recognition using MediaPipe and DeepFace</li>
  <li>• IoT integration for real-world device interaction (Arduino + MQTT)</li>
  <li>• Cloud streaming architecture using ARCware, Next.js, and Firebase</li>
</ul>

            <p className="text-cyan-400 mt-4 text-sm">
              View Demo Video →
            </p>
            <p className="text-cyan-400 mt-2 text-sm">
  <a
    href="https://drive.google.com/file/d/1pC8slrgSIt-V6THxeGMpTiDvyVAqWxWj/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Presentation →
  </a>
</p>
          </a>

<a
            href="https://www.figma.com/proto/AyUcs71ho5QvJdAfa00hjW/CrimeTrack_App?node-id=7038-218&p=f&t=osjZRvRmaAb4YFnZ-1&scaling=min-zoom&content-scaling=fixed&page-id=7020%3A3430&starting-point-node-id=7020%3A3572"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-cyan-900/40 p-6 rounded-xl bg-[#0b1220] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition"
          >
            <h3 className="text-cyan-300 font-bold text-lg">
              CrimeTrack Application
            </h3>

     <p className="text-gray-400 mt-3 text-sm">
  Developed a role-based CrimeTrack system focused on real-time crime monitoring, dispatch coordination, and incident management.
</p>

<ul className="text-gray-500 text-xs mt-4 space-y-1">
  <li>• Real-time crime alerts & incident reporting system for officers and citizens</li>
  <li>• Live dispatch dashboard with officer tracking (map view + status indicators)</li>
  <li>• Citizen reports module with priority tagging and case assignment workflow</li>
  <li>• Crime trend analytics dashboard (daily, weekly, monthly insights)</li>
  <li>• User-centered UI design with consistent layout, intuitive navigation, and color-coded status system</li>
</ul>

            <p className="text-cyan-400 mt-4 text-sm">
              View Prototype →
            </p>
          </a>

        </div>
      </section>

      {/* MASTER PROJECTS */}
      <section className="px-10 py-20">

        <h2 className="text-cyan-400 text-2xl tracking-widest mb-10">
          MASTER PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* AWS Project */}
          <a
            href="https://docs.google.com/document/d/1ybIIa_A26dmegAbAYDg0iERMbxSv1l3asoJOUatRPzU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-cyan-900/40 p-6 rounded-xl bg-[#0b1220] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition"
          >
            <h3 className="text-cyan-300 font-bold text-lg">
              AWS Security & Encryption Project
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              Implemented IAM, KMS encryption, and secure cloud architecture.
            </p>

            <ul className="text-gray-500 text-xs mt-4 space-y-1">
              <li>• AWS KMS customer-managed key (CMK) creation & key rotation</li>
              <li>• S3 bucket encryption using SSE-KMS</li>
              <li>• IAM + KMS key policy access control</li>
              <li>• EC2 EBS root volume encryption</li>
              <li>• Secrets Manager integration</li>
            </ul>

            <p className="text-cyan-400 mt-4 text-sm">
              View Report →
            </p>
          </a>

          {/* Dual Login Project */}
          <a
            href="https://github.com/fatmazoghbor/DualLoginModules.git"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-cyan-500/30 p-6 rounded-xl bg-[#0b1220] hover:shadow-[0_0_25px_rgba(255,0,0,0.15)] transition"
          >
            <h3 className="text-cyan-400 font-bold text-lg">
              Dual-Module Login Security System (Flask)
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              Built insecure vs secure login system to demonstrate vulnerabilities.
            </p>

            <ul className="text-gray-500 text-xs mt-4 space-y-1">
              <li>• SQL Injection simulation</li>
              <li>• Argon2 secure hashing</li>
              <li>• Rate limiting & lockout</li>
              <li>• Structured logging</li>
            </ul>

            <p className="text-cyan-400 mt-4 text-sm">
              View Source Code →
            </p>


<p className="text-cyan-400 mt-2 text-sm">
  <a
    href="https://drive.google.com/file/d/1KS8G1lcG94gAHdu7kpxOILyJygE-kPLr/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Presentation →
  </a>
</p>
          </a>

        </div>

        {/* WARNING NOTE RIGHT ALIGNED */}
        <div className="flex justify-end mt-6">
          <div className="text-gray-400 text-sm max-w-md text-left">
            <p>
              ⚠ This project demonstrates how insecure authentication systems can be exploited through SQL injection,
              weak hashing, and missing rate limiting — and how secure design mitigates these risks.
            </p>
          </div>
        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-20 border-t border-cyan-900/20">

        <h2 className="text-cyan-400 text-xl tracking-widest mb-8">
          SKILLS
        </h2>

        <div className="flex flex-wrap gap-4 text-sm">
          {[
            "Network Security",
            "AWS Cloud",
            "Linux",
            "Firewalls",
            "Python",
            "Cryptography",
            "Packet Tracer"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border border-cyan-900/40 rounded-full text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-20">
        <h2 className="text-cyan-400 tracking-widest mb-6">
          CONTACT ME
        </h2>

        <div className="flex gap-6 text-sm">

          <a
            href="https://linkedin.com/in/fatimazoghbor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 hover:underline transition"
          >
            LinkedIn
          </a>

          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrgDRrtBwlZCNSQRMRqMcdKlzXpqPKxCtzLWkPDtLPWQMVxKrFFrDNQNCVpQzMxBbSSjnB"
            className="text-gray-300 hover:text-cyan-400 hover:underline transition"
          >
            Gmail
          </a>

          <a
            href="https://cyberr.ai/u/380e4edd-e1b2-420e-a592-e4c8586d5b65"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 hover:underline transition"
          >
            Cyberr
          </a>

        </div>
      </section>

    </div>
  );
}