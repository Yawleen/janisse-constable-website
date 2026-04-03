import Value from '../Value';

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
    image: '/images/danae-and-charlotte.png',
    quality: 'Bienveillante',
    quote:
      'Nous connaissons Janisse depuis longtemps maintenant et une chose n’a jamais changé : son écoute sans jugement. Avec elle, on se sent compris et jamais jugé. On se confie facilement à elle car elle est d’une bienveillance et d’une douceur naturelle. 🩷',
    author: 'Charlotte & Danaé',
    relation: 'Amies proches',
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

const Values = () => {
  return (
    <section className="bg-[#ebe6df] text-center">
      <p className="subtitle">Témoignages</p>
      <h2>
        Ce que mes proches disent <span className="block italic">de moi</span>
      </h2>
      <div className="grid max-w-6xl mx-auto gap-20 md:gap-10 md:grid-cols-3 mt-12 md:mt-20">
        {testimonials.map((value, index) => (
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

export default Values;
