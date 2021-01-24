// Task 1
function inchToFoot(value) {
  if (value === undefined) {
    console.log("You didn't enter a number");
    return false;
  }
  if (typeof value === "string" || typeof value === "boolean") {
    console.log("You entered a wrong input");
    return false;
  }
  let inchValue = value;
  const feet = inchValue * 0.0833;
  console.log(`${value} inch = ${feet} foot`);
  return feet;
}

function footToMiles(callback) {
  const footValue = callback;
  const miles = footValue / 5280;
  const result = `${footValue} foot = ${miles} mile`;
  console.log(result);
}
const footValue = inchToFoot(100);
footValue;
footToMiles(footValue);

// Task 2

function woodCalculator(chair, table, khat) {
  const chairsCubic = 1* chair;
  const tablesCubic = 3* table;
  const bedsCubic = 5* bed;
  const result = chairsCubic + tablesCubic + bedsCubic;
  return `Needs to buy ${result} Cubic Wood`;
}
console.log(woodCalculator(5, 2, 1));


// Task 4

function smallName(arr) {
  const shortName = arr.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });
  console.log(shortName);}
 smallName(["orvil", "mayan", "reaz", "mehnaz"]);

// Task 5

function ShouldIgoToTheOffice() {
  const goToTheOffice = false;
  if (goToTheOffice) {
    console.log("I will go out with an umbrella");
  } else {
    console.log("I will inform office that I feel sick");
    const haveBeff = true;
    if (haveBeff) {
      console.log("Beef with khichuri");
    } else {
      console.log("Fried Eggs");
    }
  }
}
shouldIgoToTheOffice();
