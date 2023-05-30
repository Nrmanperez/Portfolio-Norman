import { LandingLayout } from '../../Layout/LandingLayout/LandingLayout'
import { Home } from '../Home/Home'
import { AboutMe } from '../AboutMe/AboutMe'
import { Skills } from '../Skills/Skills'

export const LandingPage = () => {
  return (
    <LandingLayout>
        <Home />
        <AboutMe />
        <Skills />
    </LandingLayout>
  )
}
