export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-10 md:py-16 lg:px-14">
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">Contact</p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] text-cream md:text-7xl">
          Open the door for coaching, creative work, or conversation.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/72">
          This can later hold real contact links, inquiry forms, or social handles. For now it works as a
          clean standalone contact destination in the header.
        </p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {['Coaching inquiries', 'Photography collaborations', 'General contact'].map((item) => (
          <article key={item} className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <h2 className="font-serif text-2xl text-cream">{item}</h2>
            <p className="mt-3 leading-7 text-cream/70">
              Placeholder content for now. When you send final details, I can wire each card to the right
              destination.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
