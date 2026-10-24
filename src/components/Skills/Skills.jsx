const groups = [
  { number: "01", title: "Frontend", description: "Accessible, responsive interfaces with a focus on craft and usability.", skills: ["React", "Vue.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap"] },
  { number: "02", title: "Backend", description: "Reliable APIs and application logic designed to scale with a product.", skills: ["Node.js", "NestJS", "Ruby on Rails", "Laravel", "PHP", "REST APIs"] },
  { number: "03", title: "Data & tools", description: "Practical tooling that keeps teams shipping and products dependable.", skills: ["PostgreSQL", "Docker", "Git", "API integration", "HTML & CSS"] },
];

export const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="section-wrap">
      <div className="section-heading"><p className="eyebrow">What I bring to the table</p><span>02 — EXPERTISE</span></div>
      <div className="skills-intro"><h2>Thoughtful work.<br /><span>Solid foundations.</span></h2><p>A versatile toolkit for taking a product from an early idea through to a reliable, polished launch.</p></div>
      <div className="skills-grid">
        {groups.map((group) => <article className="skill-card" key={group.number}>
          <div className="skill-card-top"><span>{group.number}</span><span>↗</span></div>
          <h3>{group.title}</h3><p>{group.description}</p>
          <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>
);
