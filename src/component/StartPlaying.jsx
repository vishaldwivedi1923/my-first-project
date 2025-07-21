// src/components/StartPlaying.jsx
import React from 'react';
import './StartPlaying.css';

const StartPlaying = () => {
  return (
    <section className="start-section">
      {/* Top Heading */}
      <div className="start-top">
        <span className="start-text">START</span>
        <span className="start-icon"><img src="/assets/orange.ball.svg"  /></span>
        <span className="start-text">PLAYING</span>
      </div>
      <h2 className="start-heading">
        HIT THE COURT,<br />MAKE YOUR MARK
      </h2>

      {/* 3 Cards */}
      <div className="cards-container">
        {/* Card 1 */}
        <div className="card card-orange">
          <img src="/assets/start-playing.png" alt="Start Playing" className="card-img1" />
          <h3 className="card-title">START PLAYING</h3>
          <p className="card-desc">across 2 locations in Surat</p>
          <button className="card-btn">PLAY NOW 
            <span className="arrow"><img src="https://dinkpickleball.in/static/media/rightArrow.ed19853dc4ba5c77f3ea1818551f795c.svg" /></span>
          </button>
        </div>

        {/* Card 2 */}
        <div className="card card-yellow">
          <img src="/assets/coaching.png" alt="Coaching" className="card-img2" />
          <h3 className="card-title">COACHING</h3>
          <p className="card-desc">
            Professional coaching for Beginners, Intermediate and Advance Players
          </p>
          <button className="card-btn">CONTACT US 
            <span className="arrow"><img src="https://dinkpickleball.in/static/media/rightArrow.ed19853dc4ba5c77f3ea1818551f795c.svg" /></span>
          </button>
        </div>

        {/* Card 3 */}
        <div className="card card-blue">
          <img src="/assets/membership.png" alt="Membership" className="card-img3" />
          <h3 className="card-title">MEMBERSHIP</h3>
          <p className="card-desc">Coming soon with exclusive perks</p>
          <button className="card-btn">COMING SOON 
            <span className="arrow"><img src="https://dinkpickleball.in/static/media/rightArrow.ed19853dc4ba5c77f3ea1818551f795c.svg" /></span></button>
        </div>
      </div>
    </section>
  );
};

export default StartPlaying;
