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
                className="text-sm md:text-base text-blue-300 text-center">Welcome!</code>
            </div>
          </header>
        </section>

       
        <section id="about" className="mb-24 scroll-mt-24">
          <h2 className="section-title text-3xl font-semibold text-white mb-8 flex items-center">
            <span className="mr-4 text-2xl"></span> About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
           An aspiring Web Developer and Cybersecurity in the field of technology who is passionate about continuous learning and building strong technical fundamentals. A quiet and observant individual who may take time to fully understand new concepts, but is committed to improving through patience, consistency, and hard work. Eager to gain experience in programming, web development, and other areas of Information Technology while continuously developing problem-solving, critical thinking, and teamwork skills. 
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
            <section id="certifications" className="mb-24 scroll-mt-24 max-w-5xl mx-auto px-4">
        <h2 className="section-title text-3xl font-semibold text-white mb-12 inline-block">
          Certifications
        </h2>

        <div className="space-y-5">
          {/* Certificate 1 */}
          <div className="glass-card p-7 border-l-4 border-cyan-500 hover:border-cyan-400 transition duration-300">
            <div className="flex items-start gap-4 justify-between mb-3 flex-col sm:flex-row">
              <div className="flex items-center gap-4 flex-1 w-full">
                <a href="#modal-intro" className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 group relative block" title="Click to view full screen">
                  <img src="img/IntroToCybersec- Tech Academy.png" alt="Introduction To Cybersecurity" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </a>
                <div>
                  <h3 className="text-lg font-bold text-white">How to get started in Cybersecurity (For beginners and 0-knowledge)</h3>
                  <p className="text-gray-300 font-medium text-sm">Tech Academy</p>
                  <p className="text-gray-400 text-sm mt-1">Introduction to Cybersecurity</p>
                </div>
              </div>
              <span className="text-sm text-cyan-300 bg-cyan-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap self-start sm:self-center mt-4 sm:mt-0">
                January 27, 2024
              </span>
            </div>
          </div>
          <div id="modal-intro" className="hidden target:flex fixed inset-0 z-[100] items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8">
            <a href="#certifications" className="absolute inset-0 cursor-default" aria-label="Close modal"></a>
            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center">
              <a href="#certifications" className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors p-2" aria-label="Close modal">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </a>
              <img src="img/IntroToCybersec- Tech Academy.png" alt="Full View Certificate" className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain border border-gray-700" />
            </div>
          </div>

          {/* Certificate 2 */}
          <div className="glass-card p-7 border-l-4 border-cyan-500 hover:border-cyan-400 transition duration-300">
            <div className="flex items-start gap-4 justify-between mb-3 flex-col sm:flex-row">
              <div className="flex items-center gap-4 flex-1 w-full">
                <a href="#modal-wireshark" className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 group relative block">
                  <img src="img/Wireshark-Tech Academy.png" alt="Wireshark Certificate" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </a>
                <div>
                  <h3 className="text-lg font-bold text-white">Wireshark 101: For Beginners and 0-Knowledge</h3>
                  <p className="text-gray-300 font-medium text-sm">Tech Academy</p>
                  <p className="text-gray-400 text-sm mt-1">Webinar participation certificate focused on Wireshark basics and network packet analysis.</p>
                </div>
              </div>
              <span className="text-sm text-cyan-300 bg-cyan-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap self-start sm:self-center mt-4 sm:mt-0">
                February 10, 2024
              </span>
            </div>
          </div>
          <div id="modal-wireshark" className="hidden target:flex fixed inset-0 z-[100] items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8">
            <a href="#certifications" className="absolute inset-0 cursor-default" aria-label="Close modal"></a>
            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center">
              <a href="#certifications" className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors p-2" aria-label="Close modal">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </a>
              <img src="img/Wireshark-Tech Academy.png" alt="Full View Certificate" className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain border border-gray-700" />
            </div>
          </div>

          {/* Certificate 3 */}
          <div className="glass-card p-7 border-l-4 border-red-500 hover:border-red-400 transition duration-300">
            <div className="flex items-start gap-4 justify-between mb-3 flex-col sm:flex-row">
              <div className="flex items-center gap-4 flex-1 w-full">
                <a href="#modal-redteam" className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 group relative block">
                  <img src="img/RedTeamSideofCyberSec-Tech Academy.png" alt="Red Team Certificate" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </a>
                <div>
                  <h3 className="text-lg font-bold text-white">The Red Team Side of Cybersecurity</h3>
                  <p className="text-gray-300 font-medium text-sm">Tech Academy</p>
                  <p className="text-gray-400 text-sm mt-1">Cybersecurity webinar discussing red teaming and cybersecurity career development.</p>
                </div>
              </div>
              <span className="text-sm text-red-300 bg-red-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap self-start sm:self-center mt-4 sm:mt-0">
                March 25, 2024
              </span>
            </div>
          </div>
          <div id="modal-redteam" className="hidden target:flex fixed inset-0 z-[100] items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8">
            <a href="#certifications" className="absolute inset-0 cursor-default" aria-label="Close modal"></a>
            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center">
              <a href="#certifications" className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors p-2" aria-label="Close modal">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </a>
              <img src="img/RedTeamSideofCyberSec-Tech Academy.png" alt="Full View Certificate" className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain border border-gray-700" />
            </div>
          </div>

          {/* Certificate 4 */}
          <div className="glass-card p-7 border-l-4 border-purple-500 hover:border-purple-400 transition duration-300">
            <div className="flex items-start gap-4 justify-between mb-3 flex-col sm:flex-row">
              <div className="flex items-center gap-4 flex-1 w-full">
                <a href="#modal-apac" className="w-28 h-20 rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0 group relative block">
                  <img src="img/APAC CYBERSECURITY FUND.png" alt="APAC Cybersecurity Fund Certificate" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                  </div>
                </a>
                <div>
                  <h3 className="text-lg font-bold text-white">Cyber Hygiene Training</h3>
                  <p className="text-gray-300 font-medium text-sm">APAC Cybersecurity Fund</p>
                  <p className="text-gray-400 text-sm mt-1">Certificate of completion for cybersecurity awareness and cyber hygiene training.</p>
                </div>
              </div>
              <span className="text-sm text-purple-300 bg-purple-900/20 px-4 py-1.5 rounded-full font-medium whitespace-nowrap self-start sm:self-center mt-4 sm:mt-0">
                September 13, 2025
              </span>
            </div>
          </div>
          <div id="modal-apac" className="hidden target:flex fixed inset-0 z-[100] items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8">
            <a href="#certifications" className="absolute inset-0 cursor-default" aria-label="Close modal"></a>
            <div className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center">
              <a href="#certifications" className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors p-2" aria-label="Close modal">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </a>
              <img src="img/APAC CYBERSECURITY FUND.png" alt="Full View Certificate" className="max-h-[85vh] w-auto rounded-lg shadow-2xl object-contain border border-gray-700" />
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
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">Laravel</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">MySQL</span>
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">Bootstrap</span>
                    <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">PHP</span>
                    <span className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full">JavaScript</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p> <strong>Bestlink College of the Philippines: Capstone Project</strong> </p>
                    <p className="mt-1"> <strong>Role:</strong> Programmer</p>
                  </div>
                </div>
              </div>
            </div>

             <div className="space-y-6">
            {/* Brgy Waste Management System */}      
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">
                    <a href="https://github.com/yourusername/Brgy_Waste_Management" target="_blank"
                      className="hover:text-blue-300 transition">Brgy Waste Management System</a>
                  </h3>
                  <p className="text-gray-300 mb-4">The Barangay Waste Management System is a project that is intended to improve the collection, segregation, and disposal of waste in the barangay. This project will be an ideal one since the population in our country is increasing, so the waste too. Since we are in the era where technology has rapidly advanced, and this project involves technology, it will help for the enhancement of waste management for every barangay. The aim of this project is to reduce the harm that garbage causes to the environment, promote recycling, and help residents to live a clean and healthy lifestyle.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">Bootstrap</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">MySQL
                      8.0</span>
                    <span className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">PHP</span>
                    <span
                      className="px-3 py-1 bg-orange-900/30 text-orange-300 text-xs rounded-full">JavaScript</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p> <strong>Bestlink College of the Philippines:  Project Management</strong></p>
                    <p className="mt-1"> <strong>Role:</strong> Front-End</p>
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
