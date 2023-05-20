import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

export const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{ children }</div>
      <Footer />
    </>
  )
}
