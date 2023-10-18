import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "The speed of trust refers to the influential role trust plays in accelerating various aspects of human interactions and processes. When trust is established and maintained in relationships, transactions, or collaborations, it enables faster decision-making, smoother communication, and more efficient problem-solving. Trust acts as a catalyst, reducing delays, promoting collaboration, and ultimately accelerating progress and success in various domains."
  },
  {
    title: "Getting and becoming unstuck with AI",
    text: "The speed of trust refers to the influential role trust plays in accelerating various aspects of human interactions and processes. When trust is established and maintained in relationships, transactions, or collaborations, it enables faster decision-making, smoother communication, and more efficient problem-solving. Trust acts as a catalyst, reducing delays, promoting collaboration, and ultimately accelerating progress and success in various domains."
  },  {
    title: "Understanding that AI does not feel",
    text: "The speed of trust refers to the influential role trust plays in accelerating various aspects of human interactions and processes. When trust is established and maintained in relationships, transactions, or collaborations, it enables faster decision-making, smoother communication, and more efficient problem-solving. Trust acts as a catalyst, reducing delays, promoting collaboration, and ultimately accelerating progress and success in various domains."
  },  {
    title: "Tony Bob in the woods with AI",
    text: "The speed of trust refers to the influential role trust plays in accelerating various aspects of human interactions and processes. When trust is established and maintained in relationships, transactions, or collaborations, it enables faster decision-making, smoother communication, and more efficient problem-solving. Trust acts as a catalyst, reducing delays, promoting collaboration, and ultimately accelerating progress and success in various domains."
  },
]


const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">

      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The future is now and you just need to realize it. Step into the future today & make things happen.</h1>
        <p>Request early access to Get Started</p>
      </div>

      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>

    </div>
  )
}

export default Features