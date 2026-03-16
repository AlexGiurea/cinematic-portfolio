import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionDiv = motion.div;

const domainContent = {
  tennis: {
    eyebrow: 'Live domain 01',
    title: 'Tennis is where Sandro meets people first.',
    lead:
      'He coaches with the perspective of someone still living the match: a Lincoln Memorial senior, a multi-racket athlete from Cochabamba, and a calm presence for players who want both joy and progress.',
    note:
      'From camp courts and academies to leading summer programming at Block Island Club, his tennis work feels personal, high-energy, and deeply human.',
    stats: [
      { value: '2014', label: 'Junior racquetball world title' },
      { value: 'LMU', label: "Senior on the men's tennis team" },
      { value: '2025', label: 'Block Island Club leadership role' },
    ],
    cta: 'Open the tennis page',
    ctaLink: '/tennis',
    accent: 'from-[#f6bd60] via-[#f4a261] to-[#e76f51]',
    panelAlign: 'md:translate-x-0',
  },
  photography: {
    eyebrow: 'Live domain 02',
    title: 'Photography lets him stay close to the feeling of sport.',
    lead:
      'As an LMU sports photographer, Sandro works from instinct as much as technique, catching the split-second details that athletes actually remember: tension, release, focus, and aftermath.',
    note:
      'His creative work is less about polished spectacle and more about presence, emotion, and giving teams images that feel lived-in.',
    stats: [
      { value: '2024', label: 'Started sports photography at LMU' },
      { value: 'Action', label: 'Built around movement and timing' },
      { value: 'Editing', label: 'Post-production and image refinement' },
    ],
    cta: 'Open the photography page',
    ctaLink: '/photography',
    accent: 'from-[#fefae0] via-[#ccd5ae] to-[#84a98c]',
    panelAlign: 'md:translate-x-8',
  },
};

const timeline = [
  {
    year: 'Cochabamba',
    title: 'The beginning was resourceful, not polished.',
    text:
      'Sandro grew up in Bolivia with family support carrying much of the cost of training and travel. That foundation gives the story warmth and grit, without turning it into a cliche about toughness.',
  },
  {
    year: 'South America',
    title: 'He learned competition across multiple racket sports.',
    text:
      'Junior racquetball, squash medals, national tennis events, and development in Argentina all shaped his sense of timing, pressure, and adaptation long before college tennis in the United States.',
  },
  {
    year: 'Lincoln Memorial',
    title: 'College brought the two worlds closer together.',
    text:
      'At LMU, tennis and photography stopped feeling like separate lanes. They became different ways of reading people, movement, and momentum.',
  },
];

function DomainSpotlight({ activeDomain, setActiveDomain }) {
  const content = domainContent[activeDomain];

  return (
    <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
      <div className="space-y-8">
        <MotionDiv
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.42em] text-sand/80">
            {content.eyebrow}
          </p>
          <h1 className="max-w-4xl font-serif text-5xl leading-[0.92] text-cream sm:text-6xl lg:text-8xl">
            Sandro Pacheco,
            <span className="block text-sand">more artist than system.</span>
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-cream/70 md:text-xl">{content.lead}</p>
        </MotionDiv>

        <div className="flex flex-wrap items-center gap-4">
          <Link to={content.ctaLink} className="primary-button">
            {content.cta}
          </Link>
          <button
            type="button"
            onClick={() => setActiveDomain(activeDomain === 'tennis' ? 'photography' : 'tennis')}
            className="secondary-button"
          >
            Shift to the other side
          </button>
        </div>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeDomain}
            initial={{ opacity: 0, x: activeDomain === 'tennis' ? -32 : 32 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeDomain === 'tennis' ? 32 : -32 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#121216] p-6 md:p-8"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${content.accent} opacity-[0.18] blur-3xl`} />
            <div className="relative space-y-8">
              <div className="overflow-hidden rounded-[1.35rem] border border-white/10">
                <img
                  src="/images/Profile Picture - Sandro.jpg"
                  alt="Portrait of Sandro Pacheco"
                  className={`h-[360px] w-full object-cover object-top transition-transform duration-700 ${content.panelAlign}`}
                />
              </div>

              <div className="space-y-4">
                <h2 className="font-serif text-3xl leading-tight text-cream">{content.title}</h2>
                <p className="leading-7 text-cream/70">{content.note}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {content.stats.map((item) => (
                  <div key={item.label} className="rounded-[1.2rem] border border-white/10 bg-white/[0.06] p-4">
                    <div className="font-serif text-3xl text-cream">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-cream/65">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function Home({ activeDomain, setActiveDomain }) {
  return (
    <div id="top" className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 pb-16 pt-8 md:px-8 md:pb-24 lg:gap-28">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 px-6 py-12 backdrop-blur-2xl md:px-10 md:py-14 lg:px-14 lg:py-20">
        <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.07),_transparent_65%)] lg:block" />
        <DomainSpotlight activeDomain={activeDomain} setActiveDomain={setActiveDomain} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <p className="font-sans text-[0.72rem] uppercase tracking-[0.38em] text-sand/80">Journey</p>
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            A life shaped by movement across countries, courts, and cameras.
          </h2>
        </div>

        <div className="grid gap-5">
          {timeline.map((item) => (
            <article key={item.year} className="story-card">
              <p className="font-sans text-[0.72rem] uppercase tracking-[0.35em] text-sand/75">{item.year}</p>
              <h3 className="mt-3 font-serif text-2xl text-cream">{item.title}</h3>
              <p className="mt-3 max-w-2xl leading-7 text-cream/70">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
