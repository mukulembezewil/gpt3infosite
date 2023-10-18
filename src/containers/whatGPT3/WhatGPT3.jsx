import React from 'react';
import './whatgpt3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="GPT-3 stands for Generative Pre-trained Transformer 3. It is a state-of-the-art language model developed by OpenAI, an artificial intelligence research organization. GPT-3 is part of the GPT series, with GPT-1 and GPT-2 preceding it."/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Chatbots are computer programs designed to simulate human conversation. They leverage natural language processing and artificial intelligence techniques to understand user input and provide automated responses. Chatbots are used in various applications, from customer support to virtual assistants, enhancing communication and efficiency in both business and personal settings." />
        <Feature title="Knowledgebase" text="AI knowledge base management involves leveraging artificial intelligence techniques to organize, store, and retrieve information within a knowledge base. By utilizing natural language processing, machine learning, and semantic technologies, AI-powered knowledge base management systems can efficiently capture, update, and deliver knowledge to users, improving information accessibility, accuracy, and decision-making processes."/>
        <Feature title="Education" text="AI has revolutionized education through enabling learner-focused profound learning."/>

      </div>

    </div>
  )
}

export default WhatGPT3