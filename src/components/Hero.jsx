import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 text-xs mb-6">
            <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
            Soluciones de IA y Automatización para empresas modernas
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Acelera tu negocio con IA, automatización y asistentes digitales
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            En AIOS Center creamos soluciones a medida con IA generativa, RPA y agentes inteligentes para optimizar procesos, mejorar la experiencia de tus clientes y escalar tus operaciones.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Solicita una demo</a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition">Ver servicios</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
