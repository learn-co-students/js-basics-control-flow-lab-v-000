// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (feet > 2500) {
    return "No can do.";
  }
};

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
};
// need the return at the beginning of the line here

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  };
};
//semicolons at end of return lines and after a block?
//need argument for switch statements
//semicolon after each case declaration
