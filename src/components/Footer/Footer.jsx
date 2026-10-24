import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner section-wrap">
      <div><p className="eyebrow">Have a good one in mind?</p><h2>Let&apos;s make it<br /><span>happen.</span></h2><a href="mailto:perez.norman30@gmail.com" className="footer-email">perez.norman30@gmail.com <span>↗</span></a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Norman Perez</span><span>Designed & built with care</span><div><a href="https://github.com/Nrmanperez" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://www.linkedin.com/in/nrmanperez" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a></div></div>
    </div>
  </footer>
);
