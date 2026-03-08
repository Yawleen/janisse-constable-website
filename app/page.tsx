import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Values from '@/components/sections/Values';
import Vote from '@/components/sections/Vote';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Values />
      <Vote />
    </main>
  );
}
