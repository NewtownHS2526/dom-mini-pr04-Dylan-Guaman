console.log("Script Running");

// Create a helper function that moves a penguin across the grid`
// The function should accept a penguin element and a column position
// Only allow movement while the column is less than or equal to 6
function movePenguin(penguin, position) {
  if (position <= 6) {
    penguin.style.gridColumnStart = position;
  }
}


// Create position variables for each penguin and set them all to 1

let tuxPosition = 1;
let daisyPosition = 1;
let rockyPosition = 1;


// Query selectors for all buttons and penguins go here
const tux = document.getElementById("tux");
const daisy = document.getElementById("daisy");
const rocky = document.getElementById("rocky");
const tuxButton = document.getElementById("tux-button");
const daisyButton = document.getElementById("daisy-button");
const rockyButton = document.getElementById("rocky-button");



// Write the function that moves Tux forward
// Increase the tux position
// Call the helper function to update the penguin position
// Call the winner check function
function moveTux() {
  tuxPosition++;
  movePenguin(tux, tuxPosition);
  checkWinner(tux, "Tux");
}




// Write the function that moves Daisy forward
function moveDaisy() {
  daisyPosition++;
  movePenguin(daisy, daisyPosition);
  checkWinner(daisy, "Daisy");
}


// Write the function that moves Rocky forward
function moveRocky() {
  rockyPosition++;
  movePenguin(rocky, rockyPosition);
  checkWinner(rocky, "Rocky");
}



// Write a function that checks if a penguin reached column 6
// If so, display the winner message (example: "Tux got the fish! 🐟")
// Disable all buttons when a winner is found
function checkWinner(penguin, name) {
  if (penguin.style.gridColumnStart == 6) {
    alert(`${name} got the fish! 🐟`);
    tuxButton.disabled = true;
    daisyButton.disabled = true;
    rockyButton.disabled = true;
  }
}




// Add event listeners for each button
// Each button should trigger its own movement function
tuxButton.addEventListener("click", moveTux);
daisyButton.addEventListener("click", moveDaisy);
rockyButton.addEventListener("click", moveRocky);
