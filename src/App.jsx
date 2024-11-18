import { Header } from "./components/header"
import { Main } from "./components/Main"
import { Service } from "./components/Service"
import { TestimonialContainer } from "./components/TestimonialContainer"
import { Gallery } from "./components/Gallery"
import { Footer } from "./components/Footer"

function App() {

  return (
    <main className="max-w-[1440px] mx-auto relative">
    <Header />
    <Main />
    <Service/>
    <TestimonialContainer/>
    <Gallery/>
    <Footer />
    </main>
  )
}

export default App
