
import Backpack from "./Backpack.js";

//  new Backpack object

const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/everyday.svg"
);

// Create new Backpack object
const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2019 15:00:00 PST",
  "../assets/frog.svg"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

// Export the array to be used in other files
export default backpackObjectArray;