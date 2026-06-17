import Value from '../Testimonial';

const testimonials: {
  image: string;
  quality: string;
  quote: string;
  author: string;
  relation: string;
}[] = [
  {
    image: '/images/collegues.png',
    quality: 'Positive',
    quote:
      'Rayonnante et pleine de charme, elle incarne au bureau une douceur élégante. Toujours avec une pointe d’humour, elle illumine nos journées avec ses blagues pas toujours réussies… mais c’est justement ce qui les rend drôles au final.',
    author: 'Laetitia, Nathan & Audrey',
    relation: 'Collègues de travail',
  },
  {
    image: '/images/celia.png',
    quality: 'Bienveillante',
    quote:
      'Dès notre rencontre au casting, j’ai tout de suite vu que Janisse était une fille incroyable. En apprenant à la connaître, j’ai découvert une personne bienveillante, toujours souriante et de très bon conseil. Elle sait redonner confiance comme une grande sœur et est toujours là quand on en a besoin. Je n’oublierai jamais le jour de l’élection, quand elle m’a prise dans ses bras. Son soutien et son réconfort à ce moment-là ont énormément compté pour moi !',
    author: 'Célia',
    relation: 'Candidate n°2 à Miss Hauts-de-Seine 2026',
  },
  {
    image: '/images/olivia.png',
    quality: 'Altruiste',
    quote:
      'Ma sœur tient beaucoup de mon père. Elle a hérité de son manque d’organisation mais aussi de sa générosité et de son altruisme. Une belle empathie qui la rend unique. Elle loupera son train, mais pas l’occasion d’aider quelqu’un.',
    author: 'Olivia',
    relation: 'Sœur',
  },
];

const Testimonials = () => {
  return (
    <section className="text-center">
      <p className="subtitle">Témoignages</p>
      <h2>
        Ce que mes proches disent <span className="block italic">de moi</span>
      </h2>
      <div className="grid max-w-6xl mx-auto gap-20 md:gap-10 md:grid-cols-3 mt-12 md:mt-20">
        {testimonials.map((value) => (
          <Value
            key={value.quality}
            image={value.image}
            quality={value.quality}
            testimonial={value.quote}
            author={value.author}
            relation={value.relation}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
