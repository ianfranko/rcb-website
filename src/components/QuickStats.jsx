const stats = [
  { label: 'Events Hosted', value: '350+' },
  { label: 'Visitors', value: '25,000+' },
  { label: 'Venues', value: '100+' },
  { label: '#1 in Africa For MICE', value: '' },
];

export default function QuickStats() {
  return (
    <section className="py-12 bg-gray-50" id="stats">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="">
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
              <div className="text-base md:text-lg font-medium text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 