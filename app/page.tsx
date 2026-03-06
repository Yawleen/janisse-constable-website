import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Values from '@/components/sections/Values';

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Values />
    </main>
  );
}
