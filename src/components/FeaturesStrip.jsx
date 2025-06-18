const features = [
  { label: 'AI Chat Support', icon: '🤖' },
  { label: 'Multilingual', icon: '🌐' },
  { label: 'Venue Directory', icon: '🏢' },
  { label: 'Event Calendar', icon: '📅' },
];

export default function FeaturesStrip() {
  return (
    <section className="bg-white border-y border-gray-100 py-6">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span className="text-3xl md:text-4xl">{f.icon}</span>
            <span className="text-base md:text-lg font-medium text-gray-700">{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 