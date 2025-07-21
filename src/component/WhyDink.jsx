// src/components/WhyDink.jsx
import React from 'react';
import './WhyDink.css';

const WhyDink = () => {
  const cards = [
    {
      icon: '/assets/icon-1.svg', // heart icon
      title: 'COMMUNITY DRIVEN',
      description: 'Be part of a growing community of pickleball players',
    },
    {
      icon: '/assets/icon-2.svg', // starburst icon
      title: 'TOP NOTCH FACILITIES',
      description: 'Enjoy state-of-the-art pickleball courts and amenities',
    },
    {
      icon: '/assets/icon-3.svg', // flower/star icon
      title: 'EXCITING EVENTS',
      description: 'Participate in a variety of pickleball events, from tournaments to social gatherings',
    },
    {
      icon: '/assets/icon-4.svg', // hand icon
      title: 'WORLD CLASS COACHING',
      description: 'Learn from experienced coaches & improve your skills',
    },
  ];

  return (
    <section className="why-section">
      <h2 className="why-heading">WHY DINK</h2>
      <div className="why-cards">
        {cards.map((card, index) => (
          <div className="why-card" key={index}>
            <img src={card.icon} alt={card.title} className="why-icon" />
            <h3 className="why-title">{card.title}</h3>
            <p className="why-desc">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDink;
