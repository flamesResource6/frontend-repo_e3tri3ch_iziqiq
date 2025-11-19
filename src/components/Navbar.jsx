import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center text-white shadow-lg shadow-fuchsia-500/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-white font-semibold tracking-tight">AIOS Center</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Servicios</a>
            <a href="#solutions" className="hover:text-white transition">Soluciones</a>
            <a href="#industries" className="hover:text-white transition">Industrias</a>
            <a href="#about" className="hover:text-white transition">Nosotros</a>
            <a href="#contact" className="hover:text-white transition">Contacto</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 rounded-lg border border-white/20 text-slate-200 hover:bg-white/10 transition">Habla con nosotros</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Empieza ahora</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-3 text-slate-200">
            <a href="#services" className="block">Servicios</a>
            <a href="#solutions" className="block">Soluciones</a>
            <a href="#industries" className="block">Industrias</a>
            <a href="#about" className="block">Nosotros</a>
            <a href="#contact" className="block">Contacto</a>
            <a href="#cta" className="inline-block mt-2 px-4 py-2 rounded-lg bg-white text-slate-900 font-medium">Empieza ahora</a>
          </div>
        )}
      </div>
    </header>
  );
}
