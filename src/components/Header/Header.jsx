import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navigation = [
  { id: "home", name: "Home" },
  { id: "aboutme", name: "About" },
  { id: "skills", name: "Expertise" },
  { id: "experience", name: "Experience" },
  { id: "projects", name: "Projects" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <ScrollLink to="home" smooth duration={500} className="brand" onClick={() => setOpen(false)}>
          NP<span>.</span>
        </ScrollLink>
        <div className="desktop-nav">
          {navigation.map((item) => (
            <ScrollLink key={item.id} to={item.id} smooth duration={500} offset={-78} className="nav-link" activeClass="nav-active" spy>
              {item.name}
            </ScrollLink>
          ))}
          <a className="nav-contact" href="mailto:perez.norman30@gmail.com">Let&apos;s talk <span>↗</span></a>
        </div>
        <button className="menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>
      {open && <div className="mobile-nav">
        {navigation.map((item) => <ScrollLink key={item.id} to={item.id} smooth duration={500} offset={-72} onClick={() => setOpen(false)}>{item.name}</ScrollLink>)}
        <a href="mailto:perez.norman30@gmail.com" onClick={() => setOpen(false)}>Let&apos;s talk ↗</a>
      </div>}
    </header>
  );
};
