import { Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import QuickStats from './components/QuickStats'
import UpcomingEvents from './components/UpcomingEvents'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FeaturesStrip from './components/FeaturesStrip';
import HighlightSections from './components/HighlightSections';
import About from './components/About';
import Events from './components/Events';
import Venues from './components/Venues';
import NewsBlogs from './components/NewsBlogs';
import Booking from './components/Booking';

// Placeholder page components
function HomePage() {
  return (
    <>
      <Hero />
      <Booking />
      <QuickStats />
      <FeaturesStrip />
      <UpcomingEvents />
      <HighlightSections />
      <Contact />
    </>
  );
}
function AboutPage() { return <div className="py-20 text-center">About Us Page</div>; }
function MicePage() { return <div className="py-20 text-center">MICE in Rwanda Page</div>; }
function VenuesPage() { return <div className="py-20 text-center">Venues Directory Page</div>; }
function CalendarPage() { return <div className="py-20 text-center">Event Calendar Page</div>; }
function NewsPage() { return <div className="py-20 text-center">News & Blog Page</div>; }
function ContactPage() { return <Contact />; }

function App() {
  return (
    <div className="bg-white text-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/news" element={<NewsBlogs />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
