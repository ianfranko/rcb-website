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

// Subcomponent: SuppliersList
const SuppliersList = ({ categories }) => (
  <section className="events-section">
    <h2>Suppliers</h2>
    <div className="suppliers-list">
      {categories.map((cat, i) => (
        <div key={i} className="supplier-category">{cat}</div>
      ))}
    </div>
  </section>
);

// Subcomponent: DownloadableGuides
const DownloadableGuides = ({ guides }) => (
  <section className="events-section">
    <h2>Downloadable Guides</h2>
    <div className="guides-list">
      {guides.map((guide, i) => (
        <a
          key={i}
          href={guide.link}
          className="guide-link"
          download
        >
          {guide.name}
        </a>
      ))}
    </div>
  </section>
);

// Subcomponent: QuickLinks
const QuickLinks = ({ links }) => (
  <section className="events-section">
    <h2>Quick Links</h2>
    <ul className="quick-links">
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.link} className="quick-link-anchor">{link.name}</a>
        </li>
      ))}
    </ul>
  </section>
);

const Events = () => (
  <div className="events-container">
    <header className="events-header">
      <h1 className="events-title">Plan Your Event</h1>
      <p className="events-description">
        Let us be your first point of contact to assist you organize memorable events.<br />
        <strong>Plan your event with us.</strong>
      </p>
      <a href="mailto:sales.marketing@rcb.rw" className="events-contact">Contact: sales.marketing@rcb.rw</a>
    </header>
    <SuppliersList categories={supplierCategories} />
    <DownloadableGuides guides={guides} />
    <QuickLinks links={quickLinks} />
    <footer className="events-footer">
      All rights reserved © - Rwanda Convention Bureau
    </footer>
  </div>
);

export default Events; 