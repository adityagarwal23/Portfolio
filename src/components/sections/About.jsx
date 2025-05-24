import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "Python",
    "Java",
    "C",
    "C#",
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Azure DevOps",
    "PowerApps",
    "Power Automate",
    "Linux",
    "GitHub",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a computer science student at Virginia Tech with a strong passion for
              building software and exploring the world of cybersecurity. I love
              developing new programs that solve real problems, whether that means
              creating tools from scratch or diving deep into low-level code to
              understand how systems really work.
              <br /><br />
              My interests lie at the intersection of programming and security—I'm
              fascinated by how things break, how they can be protected, and how we
              can build smarter, safer technology. I'm always experimenting with new
              languages, studying system behavior, and exploring the legal and ethical
              sides of cybersecurity.
              <br /><br />
              I’m currently seeking a <strong>Summer 2026 internship</strong> where I
              can grow as a developer, expand my knowledge of secure computing, and
              contribute to a team that's building something meaningful.
            </p>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-screen-xl mx-auto">
            {/* Education */}
            <div className="w-full h-full p-10 min-h-[350px] rounded-2xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-6">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>
                  <strong>B.S. in Computer Science</strong> – Virginia Tech (2023–2027)
                </li>
                <li>
                  Relevant Coursework: Intro to Computer Org. I & II, CyberLaw and
                  Policy, Future of Security, Data Structures
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="w-full h-full p-10 min-h-[350px] rounded-2xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-6">💼 Work Experience</h3>
              <div className="space-y-5 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Undergraduate Teaching Assistant – CS 2505, Virginia Tech
                  </h4>
                  <p className="text-sm italic text-gray-400 mb-1">Jan 2025 – Present</p>
                  <p>
                    Guide students in C and x86 assembly, assist with debugging, and explain concepts in memory management, pointers, and compiler behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineering Intern – CloudFit Software
                  </h4>
                  <p className="text-sm italic text-gray-400 mb-1">June – August 2024</p>
                  <p>
                    Built and deployed four automation-driven applications using PowerApps, Power Automate, SharePoint, and Azure DevOps for enterprise productivity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineering Intern – CloudFit Software
                  </h4>
                  <p className="text-sm italic text-gray-400 mb-1">June – August 2023</p>
                  <p>
                    Developed three new pages for internal business tools using C#, TypeScript, React, and Docker to support data migration for sales teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
