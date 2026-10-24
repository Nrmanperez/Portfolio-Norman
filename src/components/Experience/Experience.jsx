const experience = [
  {
    company: "Grupo LAFISE",
    role: "Developer — Seguros LAFISE",
    period: "",
    description:
      "Develop and maintain internal applications for the insurance business, finding practical and creative solutions to operational needs.",
    contributions: [
      "Maintain and improve internal insurance applications.",
      "Propose and implement creative solutions for business workflows.",
    ],
    technologies: [".NET", "Visual Basic", "SQL Server", "React"],
  },
  {
    company: "AG Software",
    role: "Software Developer",
    period: "",
    description:
      "Contributed to a cloud-based ERP platform that helps businesses manage their finances, inventory, sales, and day-to-day operations.",
    contributions: [
      "Developed application features with Ruby on Rails and PostgreSQL.",
      "Worked with Docker and Kubernetes in the application environment.",
      "Used Cucumber and unit tests to support software quality.",
    ],
    technologies: ["Ruby on Rails", "PostgreSQL", "Kubernetes", "Docker", "Cucumber", "Unit testing"],
  },
  {
    company: "Nicarao Agency",
    role: "Developer",
    period: "",
    description:
      "Collaborated on client software projects as part of the development team.",
    contributions: [
      "Contributed to The Peak Beyond, NATAB, and Decipher, featured in the projects section below.",
    ],
    projects: ["The Peak Beyond", "NATAB", "Decipher"],
  },
];

export const Experience = () => (
  <section id="experience" className="experience-section section-wrap">
    <div className="section-heading"><p className="eyebrow">Where I&apos;ve made an impact</p><span>03 — EXPERIENCE</span></div>
    <div className="experience-intro">
      <h2>Experience built<br /><span>on real products.</span></h2>
      <p>Working with teams to build and improve software people rely on every day.</p>
    </div>
    <div className="experience-list">
      {experience.map((job) => (
        <article className="experience-card" key={job.company}>
          <div className="experience-company"><span className="experience-mark">{job.company.slice(0, 2).toUpperCase()}</span><div><h3>{job.company}</h3><p>{job.role}</p></div></div>
          <div className="experience-details">
            <p>{job.description}</p>
            <ul>{job.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
            {job.technologies && <div className="skill-tags">{job.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
            {job.projects && <div className="experience-projects"><span>Selected projects</span><div className="skill-tags">{job.projects.map((project) => <span key={project}>{project}</span>)}</div></div>}
          </div>
          {job.period && <span className="experience-period">{job.period}</span>}
        </article>
      ))}
    </div>
  </section>
);
