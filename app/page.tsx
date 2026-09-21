import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Gallery from '@/components/sections/Gallery';
import Footer from '@/components/sections/Footer';
import Victory from '@/components/sections/Victory';
import Partners from '@/components/sections/Partners';
import Actions from '@/components/sections/Actions';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Actions />
      <Testimonials />
      <Victory />
      <Gallery />
      <Partners />
      <Footer />
    </main>
  );
}
