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
          From Cochabamba to college tennis in Tennessee, with a camera never far away.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/72">
          Sandro&apos;s story is grounded in family support, cross-border development, and years of learning
          how sport can shape both identity and community.
        </p>
      </section>

      <section className="mt-8 grid gap-5">
        <InfoCard
          label="Origins"
          title="The early years were built on resourcefulness."
          text="He grew up in Bolivia competing across racket sports while his family helped carry the practical weight of training and travel. That history still gives his work a grounded, underdog quality."
        />
        <InfoCard
          label="Development"
          title="Multiple sports sharpened the same instincts."
          text="Racquetball, squash, and tennis all fed the same strengths: timing, adaptation, pressure management, and a strong feel for rhythm in competition."
        />
        <InfoCard
          label="Present"
          title="At LMU, the strands now connect."
          text="Tennis, photography, leadership, and business studies sit together more naturally now. The site can expand each of those later, but this page anchors the narrative first."
        />
      </section>
    </div>
  );
}
