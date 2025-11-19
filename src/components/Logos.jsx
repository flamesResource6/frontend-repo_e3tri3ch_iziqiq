export default function Logos() {
  const items = [
    'OpenAI', 'Google Cloud', 'AWS', 'Microsoft', 'Zapier', 'HubSpot', 'Shopify', 'Notion'
  ];

  return (
    <section className="bg-slate-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center text-slate-400 text-sm mb-6">Confiado por equipos que integran IA en su día a día</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 opacity-70">
          {items.map((i) => (
            <div key={i} className="h-10 rounded-lg bg-gradient-to-b from-white/5 to-transparent border border-white/10 grid place-items-center text-slate-300 text-sm">
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
