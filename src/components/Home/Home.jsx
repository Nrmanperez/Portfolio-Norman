import images from '../../assets/imgs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Home = () => (
  <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <p className="eyebrow"><span className="status-dot" /> Available for new opportunities</p>
      <p className="hero-intro">Hello, I&apos;m Norman Perez</p>
      <h1>I build digital<br /><span>experiences</span> that<br className="desktop-break" /> make a difference.</h1>
      <p className="hero-description">Full stack developer turning thoughtful ideas into polished, dependable web products.</p>
      <div className="hero-actions">
        <a href="#projects" className="button button-primary">Explore my work <span>↘</span></a>
        <a href="mailto:perez.norman30@gmail.com" className="text-link">Get in touch <span>↗</span></a>
      </div>
      <div className="hero-socials" aria-label="Social profiles">
        <a href="https://github.com/Nrmanperez" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/nrmanperez" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <span className="social-rule" />
        <span>Based in Nicaragua</span>
      </div>
    </div>
    <div className="hero-visual">
      <div className="hero-orbit" />
      <div className="hero-image-frame"><img src={images.profile} alt="Norman Perez, full stack developer" /></div>
      <div className="hero-stamp"><span>DESIGN</span><b>×</b><span>CODE</span></div>
      <span className="hero-index">01 / 05</span>
    </div>
  </section>
)
