import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Values from '@/components/sections/Values';
import Vote from '@/components/sections/Vote';
import Gallery from '@/components/sections/Gallery';
import Event from '@/components/sections/Event';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Values />
      <Vote />
      <Gallery />
      <Event />
    </main>
  );
}
