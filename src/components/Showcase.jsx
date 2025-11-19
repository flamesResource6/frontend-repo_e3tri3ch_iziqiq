import { CheckCircle2 } from 'lucide-react';

export default function Showcase() {
  const items = [
    {
      title: 'Automatización de soporte 24/7',
      points: [
        'Resolución instantánea de preguntas frecuentes',
        'Escalado a humanos cuando es necesario',
        'Integración con Zendesk / Intercom'
      ]
    },
    {
      title: 'Agentes para procesos internos',
      points: [
        'Generación de informes y resúmenes',
        'Asistentes para RRHH y TI',
        'Orquestación con Zapier / Make'
      ]
    },
    {
      title: 'IA para ventas y marketing',
      points: [
        'Prospección inteligente y scoring',
        'Personalización de contenidos',
        'Análisis de sentimiento y NPS'
      ]
    }
  ];

  return (
    <section id="solutions" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Casos que entregan valor real</h2>
            <p className="mt-3 text-slate-300">Construimos soluciones listas para producción con impacto directo en ingresos y eficiencia.</p>

            <div className="mt-8 space-y-6">
              {items.map(({ title, points }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
                  <h3 className="text-white font-semibold">{title}</h3>
                  <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                    {points.map(p => (
                      <li key={p} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-fuchsia-400" /> {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
            <div className="aspect-video rounded-2xl bg-slate-900/60 border border-white/10 grid place-items-center text-slate-400">
              Video/Mockup
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="rounded-lg border border-white/10 p-3">Integraciones</div>
              <div className="rounded-lg border border-white/10 p-3">Seguridad</div>
              <div className="rounded-lg border border-white/10 p-3">Escalabilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
