import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Vote from '@/components/sections/Vote';
import Event from '@/components/sections/Event';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/sections/Footer';
import StickyVoteBar from '@/components/StickyVoteBar';
import Victory from '@/components/sections/Victory';
import Partners from '@/components/sections/Partners';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
      <Vote />
      <Event />
      <Victory />
      <Gallery />
      <Partners />
      <Footer />
      <StickyVoteBar />
    </main>
  );
}
