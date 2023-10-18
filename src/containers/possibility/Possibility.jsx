import React from 'react';

import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request early access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>The speed of trust refers to the influential role trust plays in accelerating various aspects of human interactions and processes. When trust is established and maintained in relationships, transactions, or collaborations, it enables faster decision-making, smoother communication, and more efficient problem-solving.</p>
        <h4>Request early access to Get Started</h4>
      </div>

    </div>
  );
}

export default Possibility