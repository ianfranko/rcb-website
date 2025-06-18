export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-white" id="events">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Upcoming Events</h2>
        {/* Placeholder for Calendar component */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs bg-gray-100 rounded-lg p-6 shadow">
            <div className="text-gray-500">[Calendar Picker Here]</div>
          </div>
        </div>
      </div>
    </section>
  );
} 