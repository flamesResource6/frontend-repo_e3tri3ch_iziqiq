import { Bot, Cpu, Workflow, Sparkle, Shield, Headphones } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Bot,
      title: 'Asistentes y Agentes de IA',
      desc: 'Bots conversacionales y agentes autónomos para atención al cliente, soporte interno y ventas.'
    },
    {
      icon: Workflow,
      title: 'Automatización de Procesos (RPA)',
      desc: 'Integraciones y flujos automáticos que eliminan tareas manuales y conectan tus herramientas.'
    },
    {
      icon: Cpu,
      title: 'Modelos y Fine-tuning',
      desc: 'Entrenamos y ajustamos modelos con tus datos para respuestas especializadas y seguras.'
    },
    {
      icon: Shield,
      title: 'Seguridad y Cumplimiento',
      desc: 'Arquitecturas privadas, encriptación y control de acceso para proteger tus datos.'
    },
    {
      icon: Sparkle,
      title: 'IA en Experiencia de Cliente',
      desc: 'Recomendadores, análisis de sentimiento y personalización omnicanal.'
    },
    {
      icon: Headphones,
      title: 'Consultoría y Soporte',
      desc: 'Acompañamiento end-to-end: ideación, prototipos, despliegue y operación.'
    }
  ];

  return (
    <section id="services" className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Lo que hacemos</h2>
          <p className="mt-3 text-slate-300">Servicios integrales para incorporar IA de forma práctica y medible en tu organización.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-white/20 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white grid place-items-center shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
