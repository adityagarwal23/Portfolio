import { ArrowIcon } from "../Icons";
import { RevealOnScroll } from "../RevealOnScroll";
import { SectionHeader } from "../SectionHeader";

const projects = [
  {
    number: "01", date: "MAY 2024", category: "JAVA · SYSTEM SIMULATION", title: "ATM Machine",
    description: "A Java ATM simulation with account balance checks, cash withdrawals, deposits, and transaction history, using built-in libraries for input, calculations, and data storage.",
    impact: "Delivers the essential flow of a functional ATM in one Java application.", tech: ["Java"], visual: "atm",
  },
  {
    number: "02", date: "DEC 2025", category: "ANDROID · MOBILE", title: "Restaurant Menu",
    description: "A responsive native Android menu application in Kotlin that lets small restaurants update digital menu content instantly across Android devices.",
    impact: "Supports 50+ menu items and can reduce paper waste by an estimated 50%.", tech: ["Kotlin"], visual: "phone",
  },
];

const ProjectVisual = ({ type }) => type === "atm" ? (
  <div className="project-visual atm-visual" aria-label="Stylized ATM terminal interface preview" role="img">
    <div className="atm-shell">
      <div className="atm-screen">
        <div className="visual-topline"><span>ATM_OS 1.0</span><span className="online-dot">ONLINE</span></div>
        <p className="atm-greeting">Welcome back.</p>
        <div className="atm-balance"><span>AVAILABLE BALANCE</span><strong>$ ******</strong></div>
        <div className="atm-actions"><span>Deposit</span><span>Withdraw</span><span>History</span></div>
      </div>
      <div className="atm-slot" /><div className="atm-keypad">{[1,2,3,4,5,6,7,8,9].map((n) => <i key={n}>{n}</i>)}</div>
    </div>
    <div className="visual-code" aria-hidden="true"><span>account.select()</span><span>transaction.verify()</span><span>balance.update()</span></div>
  </div>
) : (
  <div className="project-visual phone-visual" aria-label="Stylized Android restaurant menu preview" role="img">
    <div className="phone-frame">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <p className="phone-overline">TODAY'S MENU</p><h4>Fresh picks</h4>
        <div className="menu-feature"><span>CHEF'S PICK</span><strong>Seasonal Plate</strong><i /></div>
        <div className="menu-row"><i /><span><b>House Special</b><small>Featured selection</small></span><em>&gt;</em></div>
        <div className="menu-row"><i /><span><b>Classic Favorite</b><small>Guest selection</small></span><em>&gt;</em></div>
      </div>
    </div>
    <div className="phone-tags"><span>50+ items</span><span>~50% less paper</span></div>
  </div>
);

export const Projects = () => (
  <section id="projects" className="content-section projects-section">
    <div className="page-container">
      <RevealOnScroll>
        <SectionHeader number="04" label="SELECTED WORK" title="Projects with a purpose." copy="Practical builds shaped around clear use cases, deliberate technical choices, and measurable outcomes." />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card corner-frame" key={project.title}>
              <ProjectVisual type={project.visual} />
              <div className="project-content">
                <div className="project-meta"><span>PROJECT / {project.number} · {project.date}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-impact"><span>OUTCOME</span>{project.impact}</div>
                <div className="project-bottom"><div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><span className="case-study-label">PROJECT DETAILS <ArrowIcon /></span></div>
              </div>
            </article>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  </section>
);
