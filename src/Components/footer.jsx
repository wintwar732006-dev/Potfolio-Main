export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" max-w-[90%] mx-auto px-6 py-12 border-t border-zinc-200/60 dark:border-zinc-800/60 mt-20 text-zinc-500 dark:text-zinc-400 text-xs">
      {/* Top Row: Quick Links & Back to Top */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 px-4">
        {/* Navigation / Profiles */}
        <div className="flex items-center gap-6 font-medium">
          <a href="#about" className="text-[0.7rem] lg:text-[0.8rem] font-mono font-bold hover:text-black text-zinc-700  transition-colors">
            About
          </a>
          <a href="#projects" className="text-[0.7rem] lg:text-[0.8rem] hover:text-black font-mono font-bold text-zinc-700  transition-colors">
            Projects
          </a>
          <a href="#journey" className="text-[0.7rem] lg:text-[0.8rem] font-mono font-bold text-zinc-700 hover:text-black  transition-colors">
            Journey
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[0.7rem] font-mono font-bold text-zinc-700 lg:text-[0.8rem] hover:text-black transition-colors">
            GitHub 
          </a>
          <a href="mailto:your-email@example.com" className="text-[0.7rem] font-mono font-bold text-zinc-700 lg:text-[0.8rem] hover:text-black transition-colors">
            Email 
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="font-mono font-bold text-[0.7rem] lg:text-[0.8rem]  flex items-center gap-1.5 hover:black text-zinc-700 transition-colors group cursor-pointer"
        >
          <span>Back to top</span>
          <span className="transition-transform group-hover:-translate-y-0.5">↑</span>
        </button>
      </div>

      {/* Bottom Row: Copyright & Stack */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 border-t border-zinc-100 dark:border-zinc-800/40 text-[11px] text-zinc-400 dark:text-zinc-500">
        <p>© 2026 Hsu Wint War Htet. All rights reserved.</p>
        <p className="font-mono">Designed &amp; Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}