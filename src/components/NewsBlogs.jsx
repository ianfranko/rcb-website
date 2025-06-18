import React from "react";

const featuredArticle = {
  title: "RCB Wins the Championship!",
  date: "June 10, 2024",
  summary: "Royal Challengers Bangalore clinched the title in a thrilling final. Read about the highlights, key moments, and celebrations.",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  link: "#"
};

const articles = [
  {
    title: "Player Spotlight: Virat Kohli",
    date: "June 8, 2024",
    summary: "A deep dive into Virat Kohli's performance this season and his leadership on and off the field.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    title: "RCB's Road to the Finals",
    date: "June 5, 2024",
    summary: "A recap of RCB's journey through the playoffs, including key matches and turning points.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "#"
  },
  {
    title: "Fan Stories: The 12th Man",
    date: "June 2, 2024",
    summary: "Heartwarming stories from RCB fans who supported the team throughout the season.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=600&q=80",
    link: "#"
  }
];

const NewsBlogs = () => (
  <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>News & Blogs</h1>

    {/* Featured Article */}
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '2.5rem',
      background: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      overflow: 'hidden'
    }}>
      <img src={featuredArticle.image} alt={featuredArticle.title} style={{ width: '100%', maxHeight: '320px', objectFit: 'cover' }} />
      <div style={{ padding: '1.5rem', width: '100%' }}>
        <h2 style={{ margin: '0 0 0.5rem 0' }}>{featuredArticle.title}</h2>
        <p style={{ color: '#888', fontSize: '0.95rem', margin: '0 0 1rem 0' }}>{featuredArticle.date}</p>
        <p style={{ marginBottom: '1rem' }}>{featuredArticle.summary}</p>
        <a href={featuredArticle.link} style={{ color: '#d90429', textDecoration: 'none', fontWeight: 'bold' }}>Read more →</a>
      </div>
    </section>

    {/* Recent Articles */}
    <section>
      <h3 style={{ marginBottom: '1.5rem' }}>Recent Articles</h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem'
      }}>
        {articles.map((article, idx) => (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: '10px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}>
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
            <div style={{ padding: '1rem', flex: 1 }}>
              <h4 style={{ margin: '0 0 0.5rem 0' }}>{article.title}</h4>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: '0 0 0.5rem 0' }}>{article.date}</p>
              <p style={{ marginBottom: '1rem', fontSize: '0.97rem' }}>{article.summary}</p>
              <a href={article.link} style={{ color: '#d90429', textDecoration: 'none', fontWeight: 'bold' }}>Read more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default NewsBlogs; 