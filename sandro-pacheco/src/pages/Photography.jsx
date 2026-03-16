const photoImages = [
  '/images/photography/photo-1.jpeg',
  '/images/photography/photo-2.jpeg',
];

const photographyNotes = [
  'His perspective comes from knowing the game from inside, so the images feel immediate rather than distant.',
  'The work is not only about capture. Editing and refinement are part of how the final image carries energy.',
  'This page now has its own visual rhythm and no longer competes with the tennis page for space or meaning.',
];

export default function Photography() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-10 md:py-16 lg:px-14">
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">Photography</p>
        <h1 className="mt-4 max-w-5xl font-serif text-5xl leading-[0.94] text-cream md:text-7xl">
          Photography here is not an extra skill. It is another way of reading sport.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-cream/72">
          This page now stands on its own. The layout is quieter, more editorial, and built around the images
          themselves rather than around cards that feel repeated from the tennis side.
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
            <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-sand/80">Visual approach</p>
            <h2 className="mt-4 font-serif text-4xl text-cream">Presence first, polish second.</h2>
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
