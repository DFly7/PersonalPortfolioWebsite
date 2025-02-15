import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Getting Started with React and TypeScript",
      date: "March 15, 2024",
      category: "Development",
      excerpt: "Learn how to set up a new React project with TypeScript and understand the benefits of using TypeScript in your React applications.",
      image: "/blog/react-typescript.jpg",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable Backend Services",
      date: "March 10, 2024",
      category: "Backend",
      excerpt: "Explore best practices for building scalable backend services using Node.js and Express, including architecture patterns and performance optimization.",
      image: "/blog/backend-scaling.jpg",
      readTime: "8 min read"
    },
    {
      title: "Modern CSS Techniques",
      date: "March 5, 2024",
      category: "Frontend",
      excerpt: "Discover modern CSS techniques and features that can help you write better, more maintainable stylesheets for your web applications.",
      image: "/blog/modern-css.jpg",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Blog</h1>
        <p>Thoughts, learnings, and insights about web development</p>
      </header>

      <div className="blog-categories">
        <button className="category-btn active">All</button>
        <button className="category-btn">Development</button>
        <button className="category-btn">Frontend</button>
        <button className="category-btn">Backend</button>
        <button className="category-btn">DevOps</button>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <article key={index} className="blog-card">
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-card-content">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href="#" className="read-more">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-pagination">
        <button className="pagination-btn" disabled>Previous</button>
        <div className="pagination-numbers">
          <button className="page-number active">1</button>
          <button className="page-number">2</button>
          <button className="page-number">3</button>
        </div>
        <button className="pagination-btn">Next</button>
      </div>
    </div>
  );
};

export default Blog; 