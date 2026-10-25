# Animal Fun Facts

Animal Fun Facts is a small React app I built for Codecademy's Full-Stack Engineer path. Click a dolphin, lobster, or starfish and a random fun fact about that animal pops up.

**Live site:** https://ktforge.github.io/animal-fun-facts/

## What it does

The animals are stored in one object, each with an image and a list of facts.
A for...in loop turns that object into a row of clickable images.
Clicking an animal picks one of its facts at random and shows it on the screen.
The ocean background can be turned on or off with one setting.

## How to run it

1. Install Node.js if you don't have it.
2. In this folder, run npm install.
3. Run npm run dev and open the link it prints.

## What I learned

for...in loops over an object's keys, not its values. The loop hands you 'dolphin', and you use animals[animal] to get the data.

for...of only works on arrays and strings, not plain objects.

e.target is the element that was clicked, so one click handler can work for every animal.

&& renders something or nothing, and || gives a fallback value when the first one is empty.

Every JSX element compiles to a React.createElement call.

## Image credits

See public/images/CREDITS.md.

Built by DeVante Bush
