const photoImages = [
  '/images/photography/photo-1.jpeg',
  '/images/photography/photo-2.jpeg',
];

const photographyNotes = [
  'He shoots sports from the point of view of someone who understands the game.',
  'Editing matters too, because the final image should still feel clear and alive.',
  'This page is meant to stay simple and let the photos lead.',
];

export default function Photography() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-10 md:py-16 lg:px-14">
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">Photography</p>
        <h1 className="mt-4 max-w-5xl font-serif text-5xl leading-[0.94] text-cream md:text-7xl">
          Photography is another way Sandro stays close to sport.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/72">
          The focus here is simple: movement, timing, and the feeling of the moment.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="relative overflow-hidden rounded-[2rem] border border-white/10">
          <img src={photoImages[0]} alt="Sports photograph by Sandro Pacheco" className="h-full min-h-[620px] w-full object-cover" />
        </article>

        <div className="grid gap-5">
          <article className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <img src={photoImages[1]} alt="Second sports photograph by Sandro Pacheco" className="h-full min-h-[300px] w-full object-cover" />
          </article>

          <div className="rounded-[2rem] border border-white/10 bg-[#17171d] p-8 md:p-10">
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-sand/80">Approach</p>
            <h2 className="mt-4 font-serif text-4xl text-cream">Simple, focused, and close to the action.</h2>
            <div className="mt-6 grid gap-4">
              {photographyNotes.map((note) => (
                <div key={note} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                  <p className="leading-7 text-cream/80">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
