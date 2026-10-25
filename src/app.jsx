import React from "react";
import { createRoot } from "react-dom/client";
import { animals } from "./animals";
import "./styles.css";

// hook react up to the <main id="app"> in index.html
const container = document.getElementById("app");
const root = createRoot(container);

// leave title empty to use the default heading
// set showBackground to false to hide the ocean
const title = "";
const showBackground = true;

// ocean image that sits behind everything
const background = (
  <img className="background" alt="ocean" src="images/ocean.jpg" />
);

// pick a random fact for whichever animal got clicked
function displayFact(e) {
  // alt text is the animal's name, which is also its key in animals
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];

  document.getElementById("fact").innerHTML = funFact;
}

// make a clickable image for each animal in the list
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
    />,
  );
}

// || falls back to the default heading when title is empty
// && only shows the background when showBackground is true
const animalFacts = (
  <div>
    <h1>{title || "Click an animal for a fun fact!"}</h1>
    {showBackground && background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

root.render(animalFacts);
