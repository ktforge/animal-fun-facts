import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals';
import './styles.css';

const container = document.getElementById('app');
const root = createRoot(container);

const title = '';
const showBackground = true;

const background = (
  <img className="background" alt="ocean" src="images/ocean.jpg" />
);

// Show a random fact for the animal that was clicked
function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];

  document.getElementById('fact').innerHTML = funFact;
}

// Build one clickable image per animal
const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact!'}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

root.render(animalFacts);
