function InfoCard({ label, title, text }) {
  return (
    <article className="story-card">
      <p className="font-sans text-[0.72rem] uppercase tracking-[0.35em] text-sand/75">{label}</p>
      <h3 className="mt-3 font-serif text-2xl text-cream">{title}</h3>
      <p className="mt-3 max-w-2xl leading-7 text-cream/70">{text}</p>
    </article>
  );
}

export default function About() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-10 md:py-16 lg:px-14">
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">About</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] text-cream md:text-7xl">
          Sandro grew up in Cochabamba and brought that path with him to college tennis in the U.S.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/72">
          His background is shaped by family support, years in racket sports, and a steady move from Bolivia
          to bigger tennis opportunities.
        </p>
      </section>

      <section className="mt-8 grid gap-5">
        <InfoCard
          label="Origins"
          title="He started with a strong sports background at home."
          text="Sandro grew up in Bolivia competing across different racket sports while his family helped make training and travel possible."
        />
        <InfoCard
          label="Development"
          title="Different sports taught the same core habits."
          text="Racquetball, squash, and tennis all helped shape his timing, discipline, and feel for competition."
        />
        <InfoCard
          label="Today"
          title="Now those parts come together more naturally."
          text="Tennis and photography are the clearest parts of his story right now, and both come from staying close to sport every day."
        />
      </section>
    </div>
  );
}
