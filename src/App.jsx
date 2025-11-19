import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Showcase />
      <CTA />

      <footer id="contact" className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-slate-300">
            <div>
              <h4 className="text-white font-semibold">AIOS Center</h4>
              <p className="mt-2 text-slate-400">Soluciones de IA, automatización y agentes para empresas que quieren escalar.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold">Servicios</h4>
              <ul className="mt-2 space-y-1 text-slate-400">
                <li>Asistentes y agentes</li>
                <li>Automatización (RPA)</li>
                <li>Modelos y fine-tuning</li>
                <li>Consultoría</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Recursos</h4>
              <ul className="mt-2 space-y-1 text-slate-400">
                <li>Casos de éxito</li>
                <li>Blog</li>
                <li>Documentación</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold">Contacto</h4>
              <ul className="mt-2 space-y-1 text-slate-400">
                <li>Email: hola@aioscenter.com</li>
                <li>Latam / España</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-slate-500">© {new Date().getFullYear()} AIOS Center. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
