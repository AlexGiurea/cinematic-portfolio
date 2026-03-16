import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-8 backdrop-blur-2xl md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="font-sans text-[0.7rem] uppercase tracking-[0.35em] text-sand/75">
            Sandro Pacheco
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-none text-cream">
            Built around movement, memory, and the people around the game.
          </h2>
        </div>

        <div className="space-y-2 text-sm text-cream/70">
          <Link to="/" className="block transition-colors hover:text-cream">
            Home
          </Link>
          <Link to="/about" className="block transition-colors hover:text-cream">
            About
          </Link>
          <Link to="/contact" className="block transition-colors hover:text-cream">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
