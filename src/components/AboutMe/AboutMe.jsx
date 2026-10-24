import images from "../../assets/imgs";

export const AboutMe = () => (
  <section id="aboutme" className="about-section section-wrap">
    <div className="section-heading"><p className="eyebrow">A little about me</p><span>01 — ABOUT</span></div>
    <div className="about-grid">
      <div className="about-photo"><img src={images.profileAboutMe} alt="Norman Perez" /><div className="photo-caption">Curious by nature. <span>Builder by choice.</span></div></div>
      <div className="about-copy">
        <h2>Good work starts with <span>understanding people.</span></h2>
        <p>I&apos;m a full stack developer who enjoys shaping ideas into useful, well-crafted digital products. From the first sketch to the final implementation, I bring care to both the details people see and the systems that make everything work.</p>
        <p>My experience spans frontend and backend development, product design, and leading applications from concept to launch. I value clear communication, thoughtful collaboration, and building things that make a real difference for the people who use them.</p>
        <div className="profile-details">
          <div><span>Name</span><strong>Norman Perez</strong></div>
          <div><span>Location</span><strong>Nicaragua</strong></div>
          <div><span>Email</span><a href="mailto:perez.norman30@gmail.com">perez.norman30@gmail.com</a></div>
          <div><span>Focus</span><strong>Full stack development</strong></div>
        </div>
      </div>
    </div>
  </section>
);
