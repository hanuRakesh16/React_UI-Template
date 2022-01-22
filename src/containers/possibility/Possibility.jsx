import React from 'react';
import possibility from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Get started</h4>
        <h1 className="gradient__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <h4>Request to get started</h4>
      </div>
    </div>
  )
};

export default Possibility;