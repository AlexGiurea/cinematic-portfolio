export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-10 md:py-16 lg:px-14">
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">Contact</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] text-cream md:text-7xl">
          Get in touch for tennis, photography, or a general conversation.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/72">
          This page can hold the final contact details whenever you are ready to add them.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {['Tennis', 'Photography', 'General'].map((item) => (
          <article key={item} className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <h2 className="font-serif text-2xl text-cream">{item}</h2>
            <p className="mt-3 leading-7 text-cream/70">
              Placeholder for the final contact details or links.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
