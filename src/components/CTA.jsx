export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-b from-fuchsia-500/10 via-violet-500/10 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Lleva la IA a tu organización</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Agenda una sesión con nuestros expertos y obtén un plan a medida para implementar asistentes, automatizaciones y modelos entrenados con tus datos.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Reservar consultoría</a>
            <a href="#" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Descargar brochure</a>
          </div>
        </div>
      </div>
    </section>
  );
}
