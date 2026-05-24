export default function Page() {
  return (
    <>
      <nav className="glass-nav fixed top-0 left-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tighter">
            BRET<span className="text-gray-400">.dev</span>
          </div>

          <div className="hidden md:flex items-center space-x-1 font-medium text-sm">
            <a href="#home" className="nav-link px-4 py-2">Home</a>
            <a href="#about" className="nav-link px-4 py-2">About</a>
            <a href="#education" className="nav-link px-4 py-2">Education</a>
            <a href="#stack" className="nav-link px-4 py-2">Tech Stack</a>
            <a href="#stats" className="nav-link px-4 py-2">Stats</a>
            <a href="#projects" className="nav-link px-4 py-2">Projects</a>
             <a href="#certifications" className="nav-link px-4 py-2">Certifications</a>
            <a href="#contact"
              className="btn-primary px-6 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition shadow-lg shadow-black/40 ml-4 font-medium">Hire
              Me</a>
          </div>

          <div className="md:hidden text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <section id="home">
          <header className="text-center mb-24 mt-10">
            <h1
              className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-6">
              Hi! I'm Bret A. Baa</h1>
            <div className="flex justify-center mb-6">
              <img className="max-w-full h-auto"
                src="https://readme-typing-svg.demolab.com?font=Courier+Code&size=22&duration=4000&pause=800&color=3B82F6&center=true&vCenter=true&width=500&lines=Full+Stack+Developer;Building+with+Purpose"
                alt="Typing SVG" />
            </div>

            <div className="glass-card p-6 flex flex-col items-center gap-4">
              <img src="img/profile-avatar.png" width="180" height="180" alt="Avatar"
                className="rounded-full avatar-float" />

              <code
                className="text-sm md:text-base text-blue-300 text-center">Welcome! I'm passionate about building web applications</code>
            </div>
          </header>
        </section>

        {/* Building Web Solutions Motion Graphics Section */}
        <section className="mb-24">
          <div className="glass-card p-12 overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Motion Graphics SVG */}
              <div className="flex justify-center">
                <svg viewBox="0 0 400 400" className="w-full max-w-sm h-auto" xmlns="http://www.w3.org/2000/svg">
                  {/* Background */}
                  <rect width="400" height="400" fill="transparent" />

                  {/* Central animated element */}
                  <circle cx="200" cy="200" r="100" fill="none" stroke="#606060" strokeWidth="2"
                    opacity="0.3" />
                  <circle cx="200" cy="200" r="80" fill="none" stroke="#707070" strokeWidth="1.5"
                    opacity="0.5" />

                  {/* Animated orbiting brackets */}
                  <g className="avatar-ring" style={{ transformOrigin: '200px 200px' }}>
                    <text x="300" y="205" fontFamily="monospace" fontSize="32" fill="#808080"
                      textAnchor="middle" fontWeight="bold">&lt;</text>
                    <text x="100" y="205" fontFamily="monospace" fontSize="32" fill="#808080"
                      textAnchor="middle" fontWeight="bold">&gt;</text>
                  </g>

                  {/* Center core */}
                  <circle cx="200" cy="200" r="15" fill="#707070" className="avatar-glow" />
                  <circle cx="200" cy="200" r="8" fill="#808080" />

                  {/* Floating API box */}
                  <g className="avatar-container">
                    <rect x="40" y="50" width="120" height="80" rx="6" fill="#2a2a3e" stroke="#606060"
                      strokeWidth="1.5" />
                    <text x="100" y="75" fontFamily="Arial" fontSize="14" fill="#b0b0b0"
                      textAnchor="middle" fontWeight="bold">API</text>
                    <line x1="50" y1="85" x2="150" y2="85" stroke="#707070" strokeWidth="0.5" />
                    <line x1="50" y1="95" x2="140" y2="95" stroke="#707070" strokeWidth="0.5" />
                    <line x1="50" y1="105" x2="135" y2="105" stroke="#707070" strokeWidth="0.5" />
                    <line x1="50" y1="115" x2="120" y2="115" stroke="#707070" strokeWidth="0.5" />
                  </g>

                  {/* Floating Database box */}
                  <g className="avatar-container" style={{ animationDelay: '1s' }}>
                    <rect x="240" y="280" width="120" height="80" rx="6" fill="#2a2a3e" stroke="#606060"
                      strokeWidth="1.5" />
                    <text x="300" y="305" fontFamily="Arial" fontSize="14" fill="#b0b0b0"
                      textAnchor="middle" fontWeight="bold">DB</text>
                    <line x1="250" y1="315" x2="350" y2="315" stroke="#707070" strokeWidth="0.5" />
                    <line x1="250" y1="325" x2="340" y2="325" stroke="#707070" strokeWidth="0.5" />
                    <line x1="250" y1="335" x2="345" y2="335" stroke="#707070" strokeWidth="0.5" />
                  </g>

                  {/* Floating Frontend box */}
                  <g className="avatar-container" style={{ animationDelay: '0.5s' }}>
                    <rect x="240" y="50" width="110" height="80" rx="6" fill="#2a2a3e" stroke="#606060"
                      strokeWidth="1.5" />
                    <text x="295" y="75" fontFamily="Arial" fontSize="13" fill="#b0b0b0"
                      textAnchor="middle" fontWeight="bold">Frontend</text>
                    <line x1="250" y1="85" x2="345" y2="85" stroke="#707070" strokeWidth="0.5" />
                    <line x1="250" y1="95" x2="335" y2="95" stroke="#707070" strokeWidth="0.5" />
                    <line x1="250" y1="105" x2="340" y2="105" stroke="#707070" strokeWidth="0.5" />
                  </g>

                  {/* Floating Backend box */}
                  <g className="avatar-container" style={{ animationDelay: '0.75s' }}>
                    <rect x="50" y="280" width="110" height="80" rx="6" fill="#2a2a3e" stroke="#606060"
                      strokeWidth="1.5" />
                    <text x="105" y="305" fontFamily="Arial" fontSize="13" fill="#b0b0b0"
                      textAnchor="middle" fontWeight="bold">Backend</text>
                    <line x1="60" y1="315" x2="155" y2="315" stroke="#707070" strokeWidth="0.5" />
                    <line x1="60" y1="325" x2="145" y2="325" stroke="#707070" strokeWidth="0.5" />
                    <line x1="60" y1="335" x2="150" y2="335" stroke="#707070" strokeWidth="0.5" />
                  </g>

                  {/* Connection lines */}
                  <line x1="160" y1="85" x2="200" y2="150" stroke="#707070" strokeWidth="1" opacity="0.4"
                    strokeDasharray="5,5" />
                  <line x1="240" y1="85" x2="200" y2="150" stroke="#707070" strokeWidth="1" opacity="0.4"
                    strokeDasharray="5,5" />
                  <line x1="160" y1="310" x2="200" y2="250" stroke="#707070" strokeWidth="1" opacity="0.4"
                    strokeDasharray="5,5" />
                  <line x1="240" y1="310" x2="200" y2="250" stroke="#707070" strokeWidth="1" opacity="0.4"
                    strokeDasharray="5,5" />
                </svg>
              </div>

              {/* Right: Text Content */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-5">Building Web Solutions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">I create complete web applications using
                  modern technologies. From backend systems with Laravel and PHP to frontend interfaces with
                  HTML, CSS, and JavaScript, I develop solutions that work seamlessly across all platforms.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                    <span className="font-medium">RESTful API Design & Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                    <span className="font-medium">Database Architecture & Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
                    <span className="font-medium">Responsive Web Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="section-title text-3xl font-semibold text-white mb-8 flex items-center">
            <span className="mr-4 text-2xl"></span> About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            I'm a dedicated web developer with expertise in building scalable web applications. I love writing
            clean, efficient code and learning new technologies. Always excited to collaborate on projects and
            contribute to the open-source community.
            My journey in IT was driven by curiousity and willingness to learn new technologies. And I'm fascinate to learn Cybersecurity and AI 
          </p>
        </section>

        <section id="education" className="mb-24 scroll-mt-24">
          <h2 className="section-title text-3xl font-semibold text-white mb-12 inline-block"> Education</h2>
          <div className="space-y-5">
            {/* College */}
            <div className="glass-card p-7 border-l-4 border-gray-500 hover:border-gray-400">
              <div className="flex items-start gap-4 justify-between mb-3">
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className="w-16 h-16 rounded-circle mt-4  flex items-center justify-center text-white font-bold text-sm">
                    <img src="img/bcp.png" alt="logo" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Bestlink College of the Philippines</h3>
                    <p className="text-gray-300 font-medium text-sm">College</p>
                  </div>
                </div>
                <span
                  className="text-sm text-gray-400 bg-gray-800/50 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">2022
                  - Present</span>
              </div>
            </div>

            {/* Senior High School */}
            <div className="glass-card p-7 border-l-4 border-gray-500 hover:border-gray-400">
              <div className="flex items-start gap-4 justify-between mb-3">
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className="w-16 h-16 rounded-circle mt-4  flex items-center justify-center text-white font-bold text-xs">
                    <img src="img/jfbshs-logo.png" alt="jfbshs-logo" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Judge Feliciano Belmonte Sr. High School</h3>
                    <p className="text-gray-300 font-medium text-sm">Senior High School</p>
                  </div>
                </div>
                <span
                  className="text-sm text-gray-400 bg-gray-800/50 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">2018
                  - 2019</span>
              </div>
            </div>

            {/* Junior High School */}
            <div className="glass-card p-7 border-l-4 border-gray-500 hover:border-gray-400">
              <div className="flex items-start gap-4 justify-between mb-3">
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className="w-16 h-16 rounded-circle mt-4  flex items-center justify-center text-white font-bold text-sm">
                    <img src="img/jfbshs-logo.png" alt="jfbshs-logo" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Judge Feliciano Belmonte Sr. High School</h3>
                    <p className="text-gray-300 font-medium text-sm">Junior High School</p>
                  </div>
                </div>
                <span
                  className="text-sm text-gray-400 bg-gray-800/50 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">2014
                  - 2017</span>
              </div>
            </div>

            {/* Elementary */}
            <div className="glass-card p-7 border-l-4 border-gray-500 hover:border-gray-400">
              <div className="flex items-start gap-4 justify-between mb-3">
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className="w-16 h-16 rounded-circle mt-4  flex items-center justify-center text-white font-bold text-xs">
                    <img src="img/obes-elementary-logo.jpg" alt="obes-logo" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Old Balara Elementary School Annex</h3>
                    <p className="text-gray-300 font-medium text-sm">Elementary School</p>
                  </div>
                </div>
                <span
                  className="text-sm text-gray-400 bg-gray-800/50 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">2006
                  - 2012</span>
              </div>
            </div>
          </div>
        </section>
             <section id="certifications" className="mb-24 scroll-mt-24">
  <h2 className="section-title text-3xl font-semibold text-white mb-12 inline-block">
    Certifications
  </h2>

  <div className="space-y-5">

    {/* Certificate 1 */}
    <div className="glass-card p-7 border-l-4 border-cyan-500 hover:border-cyan-400 transition duration-300">
      <div className="flex items-start gap-4 justify-between mb-3">

        <div className="flex items-center gap-4 flex-1">

          {/* Certificate Image */}
          <div className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
            <img
              src="img/IntroToCyberSec-Tech Academy.png"
              alt="Introduction To Cybersecurity"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold text-white">
              How to get started in Cybersecurity
              (For beginners and 0-knowledge)
            </h3>

            <p className="text-gray-300 font-medium text-sm">
              Tech Academy
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Introduction to Cybersecurity
            </p>
          </div>
        </div>

        {/* Year */}
        <span className="text-sm text-cyan-300 bg-cyan-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">
          January 27, 2024
        </span>

      </div>
    </div>

    {/* Certificate 2 */}
    <div className="glass-card p-7 border-l-4 border-cyan-500 hover:border-cyan-400 transition duration-300">
      <div className="flex items-start gap-4 justify-between mb-3">

        <div className="flex items-center gap-4 flex-1">

          {/* Certificate Image */}
          <div className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
            <img
              src="img/Wireshark-Tech Academy.png"
              alt="Wireshark Certificate"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Wireshark 101: For Beginners and 0-Knowledge
            </h3>

            <p className="text-gray-300 font-medium text-sm">
              Tech Academy
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Webinar participation certificate focused on Wireshark basics
              and network packet analysis.
            </p>
          </div>
        </div>

        {/* Year */}
        <span className="text-sm text-cyan-300 bg-cyan-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">
          February 10, 2024
        </span>

      </div>
    </div>

    {/* Certificate 3 */}
    <div className="glass-card p-7 border-l-4 border-red-500 hover:border-red-400 transition duration-300">
      <div className="flex items-start gap-4 justify-between mb-3">

        <div className="flex items-center gap-4 flex-1">

          {/* Certificate Image */}
          <div className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
            <img
              src="img/RedTeamSideofCyberSec-Tech Academy.png"
              alt="Red Team Certificate"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold text-white">
              The Red Team Side of Cybersecurity: Jumpstarting Your
              Cybersecurity Career with Five Things I Wish I Knew Six Years Ago
            </h3>

            <p className="text-gray-300 font-medium text-sm">
              Tech Academy
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Cybersecurity webinar discussing red teaming and cybersecurity
              career development.
            </p>
          </div>
        </div>

        {/* Year */}
        <span className="text-sm text-red-300 bg-red-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">
          March 25, 2024
        </span>

      </div>
    </div>

    {/* Certificate 4 */}
    <div className="glass-card p-7 border-l-4 border-purple-500 hover:border-purple-400 transition duration-300">
      <div className="flex items-start gap-4 justify-between mb-3">

        <div className="flex items-center gap-4 flex-1">

          {/* Certificate Image */}
          <div className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
            <img
              src="img/APAC CYBERSECURITY FUND.png"
              alt="APAC Cybersecurity Fund Certificate"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-lg font-bold text-white">
              Cyber Hygiene Training
            </h3>

            <p className="text-gray-300 font-medium text-sm">
              APAC Cybersecurity Fund
            </p>

            <p className="text-gray-400 text-sm mt-1">
              Certificate of completion for cybersecurity awareness and cyber
              hygiene training.
            </p>
          </div>
        </div>

        {/* Year */}
        <span className="text-sm text-purple-300 bg-purple-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap">
          September 13, 2025
        </span>

      </div>
    </div>

  </div>
</section>
        

        <section id="stack" className="mb-20 scroll-mt-24">
          <h2 className="section-title text-2xl font-semibold text-gray-300 mb-12 inline-block">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6">
              <h3 className="text-gray-400 mb-6 uppercase text-xs font-semibold tracking-wide">Frontend</h3>
              <div className="flex gap-6 flex-wrap items-center">
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5" className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">HTML5</p>
                </div>
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3" className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">CSS3</p>
                </div>
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap" className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">Bootstrap</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                    alt="Tailwind CSS"
                    className="w-12 h-12 mb-2"
                  />
                  <p className="text-gray-400 text-xs">Tailwind</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-gray-400 mb-6 uppercase text-xs font-semibold tracking-wide">Backend</h3>
              <div className="flex gap-6 flex-wrap items-center">
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"
                    className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">PHP</p>
                </div>
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                    alt="Laravel" className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">Laravel</p>
                </div>

                 <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js" className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">Node.js</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-400 mb-6 uppercase text-xs font-semibold tracking-wide">Version Control</h3>
              <div className="flex gap-6 flex-wrap items-center">
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"
                    className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">GitHub</p>
                </div>
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git" className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">Git</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-gray-400 mb-6 uppercase text-xs font-semibold tracking-wide">Database Management</h3>
              <div className="flex gap-6 flex-wrap items-center">
                <div className="text-center">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL" className="w-12 h-12 mb-2" />
                  <p className="text-gray-400 text-xs">MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="mb-20 scroll-mt-24 text-center">
          <h2 className="text-3xl font-semibold text-white mb-12">GitHub Stats</h2>
          <div className="space-y-8">
            {/* GitHub Profile Card */}
            <div className="glass-card p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  <a href="https://github.com/Bret444" target="_blank"
                    className="hover:text-blue-300 transition">Bret444</a>
                </h3>
                <p className="text-gray-300 mb-6">Check out my GitHub profile for more projects and contributions
                </p>
                <a href="https://github.com/PathtoEnlightenment876" target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition font-medium shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View GitHub Profile
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">156</div>
                <p className="text-gray-300">Contributions</p>
                <p className="text-xs text-gray-500 mt-2">in the last year</p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">PHP</div>
                <p className="text-gray-300">Primary Language</p>
                <p className="text-xs text-gray-500 mt-2">Backend</p>
              </div>
              <div className="glass-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">MySQL</div>
                <p className="text-gray-300">Database</p>
                <p className="text-xs text-gray-500 mt-2">Database Design</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-20 scroll-mt-24">
          <h2 className="section-title text-3xl font-semibold text-white mb-12 inline-block"> Featured Projects</h2>
          <div className="space-y-6">
            {/* CRAD System Project */}
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">
                    <a href="https://github.com/yourusername/crad-system" target="_blank"
                      className="hover:text-blue-300 transition">School Management System 3: CRAD (CENTER FOR
                      RESEARCH AND DEVELOPMENT)</a>
                  </h3>
                  <p className="text-gray-300 mb-4">Smart Event Scheduling & Conflict Detection System for
                    Bestlink College of the Philippines. Automates research lifecycle with intelligent
                    conflict-detection algorithm for defense schedules.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">Laravel
                      10</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">MySQL
                      8.0</span>
                    <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">PHP</span>
                    <span
                      className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full">JavaScript</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p> <strong>Bestlink College of the Philippines</strong> • Cluster 7 Project</p>
                    <p className="mt-1"> <strong>Role:</strong> Lead Programmer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Project Placeholder */}
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">
                    <a href="#" className="hover:text-blue-300 transition">More Projects Coming Soon</a>
                  </h3>
                  <p className="text-gray-300 mb-4">Working on exciting new projects. Stay tuned for updates!</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-full">In
                      Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact" className="text-center mt-32 pb-20 scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-4">Let's Connect! </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">Feel free to reach out if you're looking for a developer, a
            collaborator, or just want to say hi.</p>
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:your.email@example.com" className="hover:text-white">Email</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
          <img src="https://visitor-badge.laobi.icu/badge?page_id=YOUR_USERNAME.YOUR_USERNAME" alt="Visitors"
            className="mx-auto" />
        </footer>
      </div>
    </>
  );
}
