const coachingImages = [
  '/images/tennis-coaching/coaching-1.jpeg',
  '/images/tennis-coaching/coaching-2.jpeg',
  '/images/tennis-coaching/coaching-4.jpeg',
];

const playerImages = [
  '/images/tennis-player/player-1.jpeg',
  '/images/tennis-player/player-2.jpeg',
  '/images/tennis-player/player-3.jpeg',
];

const coachingPoints = [
  'Private lessons that make technique feel clear, direct, and personal.',
  'Group sessions where energy and structure can exist at the same time.',
  'Club leadership experience shaping schedules, clinics, and the atmosphere around the courts.',
];

const playerMoments = [
  { value: 'LMU', label: "Senior on the men's tennis team" },
  { value: '2-0', label: 'Freshman singles record in first college season' },
  { value: '6-0, 6-2', label: 'Dominant senior-season opening result' },
];

export default function Tennis() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
        <div>
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">Tennis</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-cream md:text-7xl">
            One page, two sides of the same identity: coach and player.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/72">
            Sandro teaches from inside the sport. The same person guiding players through lessons is still
            competing, still reading momentum in real time, and still building his own game.
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.8rem] border border-white/10">
          <img
            src="/images/Profile Picture - Sandro.jpg"
            alt="Sandro Pacheco portrait"
            className="h-full min-h-[360px] w-full object-cover object-top"
          />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#17171d] p-8 md:p-10">
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-sand/80">Toward coaching</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            The coaching side is warm, demanding, and deeply relational.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-cream/70">
            These images sit with the coaching identity rather than with competition. The tone here is trust,
            communication, and presence around other players.
          </p>
          <div className="mt-8 grid gap-4">
            {coachingPoints.map((point) => (
              <div key={point} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                <p className="leading-7 text-cream/80">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-[1.9rem] border border-white/10 md:row-span-2">
            <img src={coachingImages[0]} alt="Sandro coaching on court" className="h-full min-h-[520px] w-full object-cover" />
          </article>
          <article className="relative overflow-hidden rounded-[1.9rem] border border-white/10">
            <img src={coachingImages[1]} alt="Sandro working with players" className="h-full min-h-[250px] w-full object-cover" />
          </article>
          <article className="relative overflow-hidden rounded-[1.9rem] border border-white/10">
            <img src={coachingImages[2]} alt="Sandro during a coaching moment" className="h-full min-h-[250px] w-full object-cover" />
          </article>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="relative overflow-hidden rounded-[1.9rem] border border-white/10 md:row-span-2">
            <img src={playerImages[0]} alt="Sandro as a player in competition" className="h-full min-h-[520px] w-full object-cover" />
          </article>
          <article className="relative overflow-hidden rounded-[1.9rem] border border-white/10">
            <img src={playerImages[1]} alt="Sandro playing tennis" className="h-full min-h-[250px] w-full object-cover" />
          </article>
          <article className="relative overflow-hidden rounded-[1.9rem] border border-white/10">
            <img src={playerImages[2]} alt="Sandro on court during a match" className="h-full min-h-[250px] w-full object-cover" />
          </article>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl md:p-10">
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-sand/80">Toward the player</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            The player side carries the discipline behind everything else.
          </h2>
          <p className="mt-5 leading-7 text-cream/70">
            Before the photography, before the leadership, and even before the coaching confidence, there is
            the athlete who has kept showing up across years, countries, and different forms of competition.
          </p>

          <div className="mt-8 grid gap-4">
            {playerMoments.map((item) => (
              <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                <div className="font-serif text-3xl text-cream">{item.value}</div>
                <p className="mt-2 leading-7 text-cream/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
