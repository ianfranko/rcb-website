export default function Contact() {
  return (
    <section className="py-16 bg-blue-900" id="contact">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Contact Us</h2>
        <form className="bg-white rounded-lg shadow p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700" rows={4} required />
          </div>
          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded transition">Submit</button>
        </form>
      </div>
    </section>
  );
} 