export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-3xl w-full px-4 sm:px-8 space-y-8 mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-sky-400 drop-shadow-sm">
          Hi, I’m Napoleon
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-yellow-400">
          Developer & Robotics Engineer in the Making
        </h2>
        <p className="text-base md:text-lg text-slate-300 leading-relaxed">
          I build intelligent systems that bridge digital and mechanical worlds. From web apps to robotics, 
          I thrive on innovation and purpose-driven engineering.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/project"
            className="bg-sky-400 text-slate-900 px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-sky-300 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="text-sky-400 border border-sky-400 px-6 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
}
