function calculateChaiIngredients(numberOfCups) {
  const water = 150 * numberOfCups;
  const milk = 150 * numberOfCups;
  const teaLeaves = 1 * numberOfCups;
  const sugar = 3 * numberOfCups;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);
}

const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const cups = Number(input);

if (!isNaN(cups) && cups > 0) {
  calculateChaiIngredients(cups);
} else {
  alert("Please enter a valid number of cups.");
}

