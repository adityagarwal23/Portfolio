import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeader } from "../SectionHeader";

const skillGroups = [
  { label: "LANGUAGES", skills: ["Python", "Java", "C#", "HTML5 / CSS", "JavaScript", "TypeScript"] },
  { label: "DEVELOPER TOOLS", skills: ["VS Code", "Eclipse", "IntelliJ IDEA", "Azure DevOps", "Jira"] },
  { label: "POWER PLATFORM", skills: ["Power Apps", "Power Automate", "Copilot Studio"] },
  { label: "TECH + CERTIFICATION", skills: ["Windows", "Linux", "GitHub", "CompTIA ITF+"] },
];

const roles = [
  {
    dates: "JUN - AUG 2026",
    location: "Charlotte, North Carolina",
    company: "Wells Fargo",
    role: "Software Engineering Intern",
    bullets: [
      "Built an internal onboarding application with TypeScript and Power Apps Code Apps that automated Copilot Studio environment provisioning.",
      "Deployed an embedded Copilot Studio agent to answer common questions in real time and reduce manual support load.",
      "Drove adoption of Power Apps Code Apps through documentation and walkthroughs, enabling development in days instead of multi-week sprints.",
    ],
    metrics: [{ value: "100K+", label: "employees served" }, { value: "2 mo", label: "previous fulfillment" }, { value: "1.5 wk", label: "new fulfillment" }],
  },
  {
    dates: "JAN 2025 - PRESENT",
    location: "Blacksburg, Virginia",
    company: "Virginia Tech",
    role: "Undergraduate Teaching Assistant · CS 2505 & CS 2506",
    bullets: [
      "Guide students through C, x86 and RISC-V assembly, virtual memory, and processor architecture using GDB and GCC.",
      "Turn memory management, pointers, assembly instructions, and hardware concepts into clear explanations.",
      "Support grading and proactively surface challenging concepts to improve course delivery.",
    ],
  },
  {
    dates: "JUN - AUG 2025",
    location: "Lynchburg, Virginia",
    company: "CloudFit Software",
    role: "Software Engineering & Cybersecurity Intern",
    bullets: [
      "Migrated an internal application from Ant Design to Material UI using C#, YAML, TypeScript, Elsa Workflows, SQL, Git, and Azure DevOps.",
      "Built a SharePoint onboarding page with embedded Power Apps and Power Automate integrations for reminders and progress tracking.",
      "Led weekly Java, C#, TypeScript, and React coding workshops for interns and full-time employees.",
    ],
    metrics: [{ value: "60%", label: "less onboarding time" }, { value: "30", label: "workshop participants" }],
  },
];

export const About = () => (
  <>
    <section id="about" className="content-section">
      <div className="page-container">
        <RevealOnScroll>
          <SectionHeader number="02" label="ABOUT" title="Curious by design. Security-minded by default." copy="I work at the intersection of software engineering and cybersecurity - building practical tools, examining system behavior, and learning how thoughtful design makes technology safer." />
          <div className="about-grid">
            <article className="education-card corner-frame">
              <div className="education-mark" aria-hidden="true">VT</div>
              <div>
                <p className="micro-label">EDUCATION // AUG 2023 - DEC 2026</p>
                <h3>B.S. Computer Science</h3>
                <p className="education-school">Virginia Tech · Blacksburg, Virginia</p>
                <p>Secure Computing · Minor in Mathematics</p>
                <div className="coursework">
                  <span>Intro to Computer Organization</span><span>Cyberlaw & Policy</span><span>Computer Systems</span><span>Data Structures</span>
                </div>
              </div>
            </article>
            <div className="skills-panel">
              <p className="micro-label">TECHNICAL INDEX</p>
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
            <article className="leadership-card corner-frame">
              <div>
                <p className="micro-label">LEADERSHIP // AUG 2025 - PRESENT</p>
                <h3>CyberVT Mentor</h3>
                <p>Cybersecurity Club at Virginia Tech · Blacksburg, Virginia</p>
              </div>
              <p>Mentoring first-year members on academic success, early cybersecurity careers, coursework, certifications, and hands-on security practice.</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>
    <section id="experience" className="content-section experience-section">
      <div className="page-container">
        <RevealOnScroll>
          <SectionHeader number="03" label="EXPERIENCE" title="Learning by building, teaching, and shipping." copy="Hands-on software engineering, platform automation, security work, and technical mentorship." />
          <div className="timeline">
            {roles.map((item, index) => (
              <article className="timeline-item" key={item.company + item.dates}>
                <div className="timeline-date">{item.dates}</div>
                <div className="timeline-node" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content">
                  <div className="timeline-heading"><p className="timeline-company">{item.company}</p><p className="timeline-location">{item.location}</p></div>
                  <h3>{item.role}</h3>
                  {item.metrics && <div className="metric-row">{item.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>}
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </>
);
