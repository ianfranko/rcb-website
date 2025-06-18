import React from "react";

const supplierCategories = [
  "Professional Conference Organizers (PCO) - Event Management Companies",
  "Destination Management Companies (DMCs) focusing on Incentive Travel",
  "Sound System & AV (Event Production companies)",
  "Construction / Supply of Exhibition Booths",
  "Translation (Equipment & Service)",
  "Marketing Communication, Advertising Services",
  "Transport Services",
  "Printing and PR"
];

const guides = [
  { name: "DINE,SHOP & GET AROUND 2024", link: "#" },
  { name: "EXPERIENCE KIGALI Guide", link: "#" },
  { name: "INCENTIVE PLANNER'S GUIDE 2024", link: "#" },
  { name: "MEETINGS PLANNERS GUIDE 2024", link: "#" }
];

const quickLinks = [
  { name: "About the Destination", link: "#" },
  { name: "About RCB", link: "#" },
  { name: "Calendar", link: "#" },
  { name: "Plan your Event", link: "#" },
  { name: "Tenders", link: "#" },
  { name: "Contact us", link: "#" }
];

const Events = () => (
  <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto', fontFamily: 'sans-serif' }}>
    <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Plan Your Event</h1>
      <p style={{ fontSize: '1.2rem', color: '#fff' }}>
        Let us be your first point of contact to assist you organize memorable events.<br />
        <strong>Plan your event with us.</strong>
      </p>
      <a href="mailto:sales.marketing@rcb.rw" style={{
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.75rem 1.5rem',
        background: '#007b5e',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        letterSpacing: '0.5px'
      }}>Contact: sales.marketing@rcb.rw</a>
    </header>

    <section style={{ marginBottom: '2.5rem' }}>
      <h2>Suppliers</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        color: '#fff',
        lineHeight: 1.7
      }}>
        {supplierCategories.map((cat, i) => (
          <div key={i} style={{ padding: '0.5rem 0', borderBottom: i !== supplierCategories.length - 1 ? '1px solid #444' : 'none' }}>{cat}</div>
        ))}
      </div>
    </section>

    <section style={{ marginBottom: '2.5rem' }}>
      <h2>Downloadable Guides</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {guides.map((guide, i) => (
          <a
            key={i}
            href={guide.link}
            style={{
              display: 'inline-block',
              padding: '1rem 1.5rem',
              background: '#f5f5f5',
              borderRadius: '6px',
              textDecoration: 'none',
              color: '#007b5e',
              fontWeight: 'bold',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
            }}
            download
          >
            {guide.name}
          </a>
        ))}
      </div>
    </section>

    <section style={{ marginBottom: '2.5rem' }}>
      <h2>Quick Links</h2>
      <ul style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {quickLinks.map((link, i) => (
          <li key={i}>
            <a href={link.link} style={{ color: '#007b5e', textDecoration: 'underline' }}>{link.name}</a>
          </li>
        ))}
      </ul>
    </section>

    <footer style={{ textAlign: 'center', color: '#fff', fontSize: '0.95rem', marginTop: '3rem' }}>
      All rights reserved © - Rwanda Convention Bureau
    </footer>
  </div>
);

export default Events; 