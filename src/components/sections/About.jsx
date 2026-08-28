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
      className="soft-section min-h-screen flex items-center justify-center px-4 py-28"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-lg p-8 bg-white/80 dark:bg-white/[0.03] border-slate-200/80 dark:border-white/10 border shadow-sm dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
            <p className="text-slate-700 dark:text-gray-300 mb-6">
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
              I’ve previously interned at<strong> Wells Fargo</strong> as a software engineer.
            </p>

            <div className="rounded-lg p-6 hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-slate-950 dark:text-white">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-600 dark:text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-screen-xl mx-auto">
            {/* Education */}
            <div className="w-full h-full p-10 min-h-[350px] rounded-lg bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-6">🏫 Education</h3>
              <ul className="list-disc list-inside text-slate-700 dark:text-gray-300 space-y-3">
                <li>
                  <strong>B.S. in Computer Science</strong> – Virginia Tech (2023–2027)
                </li>
                <li>
                  Relevant Coursework: Intro to Computer Org. I & II, CyberLaw and
                  Policy, Future of Security, Data Structures
                </li>
                <li>
                  Extracurricular Activites: Member and Mentor of CyberVT (CyberSecurity Club at Virginia Tech)
                  Member of Data Structures and Algorithms Club
                  Participated in Marriott's CodeFest and VTHacks. (See GitHub for Projects)
                </li>
              </ul>
            </div>
                
            {/* Work Experience */}
            <div className="w-full h-full p-10 min-h-[350px] rounded-lg bg-white/80 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-6">💼 Work Experience</h3>
              <div className="space-y-5 text-slate-700 dark:text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Undergraduate Teaching Assistant (CS 2505 & CS 2506) - Virginia Tech
                  </h4>
                  <p className="text-sm italic text-slate-500 dark:text-gray-400 mb-1">Jan 2025 – Present</p>
                  <p>
                    Guide students in C and x86 assembly, assist with debugging, and explain concepts in memory management, pointers, and compiler behavior.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineering and CyberSecurity Intern – CloudFit Software
                  </h4>
                  <p className="text-sm italic text-slate-500 dark:text-gray-400 mb-1">June – August 2025</p>
                  <p>
                    Migrated an internal app from Ant Design to Material UI using C#, YAML, TypeScript, Elsa Workflows, SQL, Git, and Azure DevOps to enhance UI consistency and productivity; built a SharePoint onboarding page with PowerApps and PowerAutomate integration reducing onboarding time by 60%; and led weekly coding workshops for 30 interns and employees on Java, C#, TypeScript, and React to strengthen technical skills and collaboration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Software Engineering Intern – CloudFit Software
                  </h4>
                  <p className="text-sm italic text-slate-500 dark:text-gray-400 mb-1">June – August 2024</p>
                  <p>
                    Built and deployed four automation-driven applications using PowerApps, Power Automate, SharePoint, and Azure DevOps for enterprise productivity.
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
