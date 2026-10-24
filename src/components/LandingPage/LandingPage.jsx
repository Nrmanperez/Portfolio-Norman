import { LandingLayout } from '../../Layout/LandingLayout/LandingLayout'
import { Home } from '../Home/Home'
import { AboutMe } from '../AboutMe/AboutMe'
import { Skills } from '../Skills/Skills'
import { Experience } from '../Experience/Experience'
import { Projects } from '../Projects/Projects'

export const LandingPage = () => {
  return (
    <LandingLayout>
        <Home />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
    </LandingLayout>
  )
}
