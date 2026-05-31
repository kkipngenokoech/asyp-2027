import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Speakers from '@/components/Speakers'
import Agenda from '@/components/Agenda'
import Registration from '@/components/Registration'
import Organizers from '@/components/Organizers'
import Venue from '@/components/Venue'
import Sponsors from '@/components/Sponsors'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Agenda />
        <Registration />
        <Organizers />
        <Venue />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
