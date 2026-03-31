import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Values from '@/components/sections/Values';
import Vote from '@/components/sections/Vote';
import Gallery from '@/components/sections/Gallery';
import Engagement from '@/components/sections/Engagement';
import Footer from '@/components/sections/Footer';
import StickyVoteBar from '@/components/ui/StickyVoteBar';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Values />
      {/* <Vote /> */}
      <Gallery />
      <Engagement />
      <Footer />
      {/* <StickyVoteBar /> */}
    </main>
  );
}
