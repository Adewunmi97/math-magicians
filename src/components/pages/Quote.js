import React from 'react';
import '../../App.css';
import './Welcome.css';

function Quote() {
  return (
    <div className="welcome-container">
      <div className="info">
        <h1> Quote</h1>
        <p>
          We will always have STEM with us. Some things will drop out of the public eye
          and go away,but there will always be science, engineering, and technology.
          And there will always, always be mathematics.
          — Katherine Johnson, African-American mathematician
        </p>

        <p>
          {' '}
          Mathematics as an expression of the human mind reflects the active will,
          the contemplative reason, and the desire for aesthetic perfection. Its basic
          elements are logic and intuition, analysis and construction, generality
          and individuality.
          — Richard Courant, German-American mathematician
        </p>
      </div>
    </div>
  );
}

export default Quote;
