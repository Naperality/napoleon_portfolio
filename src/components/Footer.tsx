export default function Footer() {
  return (
    <footer className="bg-slate-900 py-6 mt-12 shadow-inner">
      <div className="text-center text-sm text-slate-300">
        © {new Date().getFullYear()} <span className="text-sky-400 font-medium">Napoleon</span>. All rights reserved.
      </div>
    </footer>
  );
}
