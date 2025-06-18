function SectionTitle({ children }) {
  return <h3 className="text-xl md:text-2xl font-bold mb-4">{children}</h3>;
}

function Card({ title, desc, img, extra }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 min-w-[220px] max-w-xs mx-2 flex flex-col items-center">
      <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center overflow-hidden">
        {img ? <img src={img} alt={title} className="object-cover w-full h-full" /> : <span className="text-4xl">🏢</span>}
      </div>
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-sm text-gray-600 mb-2 text-center">{desc}</div>
      {extra}
    </div>
  );
}

export default function HighlightSections() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 space-y-12">
        {/* Featured Venues */}
        <div>
          <SectionTitle>Featured Venues</SectionTitle>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            <Card title="Kigali Convention Centre" desc="Iconic venue in the heart of Kigali." />
            <Card title="Intare Conference Arena" desc="Modern, spacious, and versatile." />
            <Card title="Serena Hotel" desc="Luxury and convenience for events." />
          </div>
        </div>
        {/* Upcoming Events */}
        <div>
          <SectionTitle>Upcoming Events</SectionTitle>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            <Card title="Africa Business Summit" desc="June 2024" extra={<a href="#calendar" className="text-blue-700 text-xs underline">View in Calendar</a>} />
            <Card title="Tech Expo Rwanda" desc="July 2024" extra={<a href="#calendar" className="text-blue-700 text-xs underline">View in Calendar</a>} />
            <Card title="Global Health Forum" desc="August 2024" extra={<a href="#calendar" className="text-blue-700 text-xs underline">View in Calendar</a>} />
          </div>
        </div>
        {/* News & Blog */}
        <div>
          <SectionTitle>News & Blog</SectionTitle>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            <Card title="RCB Wins MICE Award" desc="Rwanda Convention Bureau recognized as Africa's top MICE destination." />
            <Card title="New Venues Announced" desc="Exciting new venues added to the directory." />
            <Card title="Sustainability in Events" desc="How Rwanda is leading in green meetings." />
          </div>
        </div>
        {/* Testimonials */}
        <div>
          <SectionTitle>Testimonials</SectionTitle>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            <Card title="Jane D., Event Planner" desc="“RCB made our international conference seamless and memorable!”" />
            <Card title="Dr. M. Singh" desc="“World-class venues and incredible hospitality.”" />
            <Card title="Global Events Inc." desc="“Rwanda is now our go-to for African events.”" />
          </div>
        </div>
      </div>
    </section>
  );
} 