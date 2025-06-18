export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center" id="hero">
      <img
        src="/kigali-center.jpg"
        alt="Kigali Convention Center"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        onError={e => { e.target.src = '/vite.svg'; }}
      />
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">Rwanda: Africa's Premier Destination</h1>
        <p className="mb-8 text-lg md:text-2xl max-w-2xl mx-auto drop-shadow">Discover world-class venues, vibrant events, and the heart of Africa's Meetings, Incentives, Conferences, and Exhibitions industry.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#venues" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded font-semibold shadow transition">Explore Venues</a>
          <a href="#events" className="border border-white text-white px-6 py-3 rounded font-semibold shadow hover:bg-white hover:text-blue-700 transition">  See Upcoming Events</a>
        </div>
      </div>
    </section>
  );
} 