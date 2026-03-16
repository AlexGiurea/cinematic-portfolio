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
  'Private lessons with clear feedback and a calm tone.',
  'Group sessions that stay fun while still teaching the basics well.',
  'Experience leading clinics, schedules, and the day-to-day feel around the courts.',
];

const playerMoments = [
  { value: 'LMU', label: "Senior on the men's tennis team" },
  { value: '6-0, 6-2', label: 'Strong senior-season opening win' },
];

export default function Tennis() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <section className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-white/[0.05] px-6 py-12 backdrop-blur-2xl md:px-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-14">
        <div>
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">Tennis</p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-cream md:text-7xl">
            Tennis is the center of Sandro&apos;s work and story.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-cream/72">
            He coaches, competes, and stays close to the game every day. This page shows both sides of that:
            the coach and the player.
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
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-sand/80">Coaching</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            The coaching side feels personal and steady.
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-cream/70">
            These images show the side of Sandro that works with people directly and helps players feel more
            comfortable on court.
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
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-sand/80">Player</p>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            The player side is where the standard comes from.
          </h2>
          <p className="mt-5 leading-7 text-cream/70">
            This is the part of Sandro that keeps training, competing, and learning. It is what gives the
            coaching side real credibility.
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
