import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Vote from '@/components/sections/Vote';
import Gallery from '@/components/sections/Gallery';
import Engagement from '@/components/sections/Engagement';
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
      <Victory />
      {/* <Vote /> */}
      <Gallery />
      {/* <Engagement /> */}
      <Partners />
      <Footer />
      {/* <StickyVoteBar /> */}
    </main>
  );
}
