import { LandingLayout } from '../../Layout/LandingLayout/LandingLayout'
import { Home } from '../Home/Home'
import { AboutMe } from '../AboutMe/AboutMe'

export const LandingPage = () => {
  return (
    <LandingLayout>
        <Home />
        <AboutMe />
    </LandingLayout>
  )
}
