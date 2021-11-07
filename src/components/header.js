import React from 'react';
import "../assets/styles/cards.css";
import '../assets/styles/index.css';

const Header = () => (
  <header className="fadeIn App-header">

    <div class="cards">
      <h2 class="header">
        The Three Secrets to Happiness</h2>
      <div class="cardswrapper">
        <div class="content content-1">
          <div class="fab fa-twitter">
          </div>
          <h2>
            Good relationships</h2>
          <p>
            Take time, today, to spend time with your loved ones, tell them what they mean to you, listen to them, and develop your relationship with them.</p>
          <a href="https://zenhabits.net/the-three-secrets-to-happiness/">Read More</a>
        </div>
        <div class="content content-2">
          <div class="fab fa-instagram">
          </div>
          <h2>
            Positive thinking</h2>
          <p>
            Make positive thinking a habit. Get into the habit of squashing all negative thoughts and replacing them with positive ones. Instead of “I can’t” think “I can”. </p>
          <a href="https://zenhabits.net/the-three-secrets-to-happiness/">Read More</a>
        </div>
        <div class="content content-3">
          <div class="fab fa-youtube">
          </div>
          <h2>
            Passion</h2>
          <p>
            Find hobbies that you’re passionate about. Turn off the TV — this is the opposite of flow — and get outside and do something that truly engages you.</p>
          <a href="https://zenhabits.net/the-three-secrets-to-happiness/">Read More</a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;