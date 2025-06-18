import React, { useState } from "react";

const venues = [
  {
    name: "Kigali",
    description:
      "Welcome to Kigali, Rwanda's booming capital city, ranked 2nd in Africa for its vibrancy and hospitality.",
    image: "https://via.placeholder.com/300x180?text=Kigali",
    facts: ["Capital City", "Population: 1.1M", "Modern Convention Centre"],
    mapPos: { top: "40%", left: "55%" },
  },
  {
    name: "Musanze",
    description:
      "Only a two-hour drive from Kigali, Musanze is nestled among Rwanda's scenic volcanoes and lush countryside.",
    image: "https://via.placeholder.com/300x180?text=Musanze",
    facts: ["Gateway to Volcanoes National Park", "Popular for gorilla trekking"],
    mapPos: { top: "20%", left: "45%" },
  },
  {
    name: "Rubavu",
    description:
      "Rubavu is a waterfront town on the shores of Lake Kivu, offering stunning views and relaxing vibes.",
    image: "https://via.placeholder.com/300x180?text=Rubavu",
    facts: ["Lake Kivu Waterfront", "Resort Town"],
    mapPos: { top: "25%", left: "20%" },
  },
  {
    name: "Huye",
    description:
      "Located in the southern province, Huye is known for its academic institutions and rich cultural heritage.",
    image: "https://via.placeholder.com/300x180?text=Huye",
    facts: ["Home to University of Rwanda", "Cultural Museums"],
    mapPos: { top: "70%", left: "60%" },
  },
  {
    name: "Nyagatare",
    description:
      "Nyagatare is the largest and second most populous district in Rwanda, known for its open landscapes.",
    image: "https://via.placeholder.com/300x180?text=Nyagatare",
    facts: ["Largest District", "Agricultural Hub"],
    mapPos: { top: "10%", left: "90%" },
  },
];

const cardStyle = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  margin: '1rem',
  flex: '1 1 300px',
  maxWidth: '320px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.2s, box-shadow 0.2s',
};

const cardHoverStyle = {
  transform: 'translateY(-6px) scale(1.03)',
  boxShadow: '0 6px 24px rgba(0,0,0,0.15)',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
};

const buttonStyle = {
  marginTop: 'auto',
  background: '#007b5e',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  padding: '0.5rem 1.2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'background 0.2s',
};

const mapContainerStyle = {
  position: 'relative',
  width: '100%',
  maxWidth: '700px',
  margin: '2rem auto',
  height: '320px',
  background: '#e0e0e0',
  borderRadius: '16px',
  overflow: 'hidden',
};

const markerStyle = {
  position: 'absolute',
  width: '28px',
  height: '28px',
  background: '#007b5e',
  borderRadius: '50%',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  cursor: 'pointer',
  border: '2px solid #fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  transition: 'transform 0.2s',
};

const Venues = () => {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(null);

  const filteredVenues = venues.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', background: 'transparent', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Cities & Venues</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '0.7rem 1.2rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            width: '260px',
            outline: 'none',
          }}
        />
      </div>
      {/* Map Section */}
      <div style={mapContainerStyle}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Rwanda_location_map_Topographic.png"
          alt="Rwanda Map"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.2)' }}
        />
        {venues.map((venue, idx) => (
          <div
            key={venue.name}
            title={venue.name}
            style={{
              ...markerStyle,
              top: venue.mapPos.top,
              left: venue.mapPos.left,
              transform: hovered === idx ? 'scale(1.2)' : 'scale(1)',
              zIndex: hovered === idx ? 2 : 1,
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {venue.name[0]}
          </div>
        ))}
      </div>
      {/* Cards Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        {filteredVenues.map((venue, idx) => (
          <div
            key={venue.name}
            style={hovered === idx ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={venue.image} alt={venue.name} style={imageStyle} />
            <div style={{ padding: '1.2rem' }}>
              <h2 style={{ margin: '0 0 0.5rem 0' }}>{venue.name}</h2>
              <p style={{ margin: '0 0 1rem 0', color: '#444' }}>{venue.description}</p>
              <ul style={{ padding: 0, margin: '0 0 1rem 0', listStyle: 'none', color: '#007b5e', fontSize: '0.98rem' }}>
                {venue.facts.map(fact => (
                  <li key={fact} style={{ marginBottom: '0.2rem' }}>• {fact}</li>
                ))}
              </ul>
              <button style={buttonStyle} onClick={() => alert(`More about ${venue.name} coming soon!`)}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venues; 