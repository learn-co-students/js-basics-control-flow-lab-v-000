// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let result;
  if (someValue <= 400) {
      result = "This one is on me!";
    } else if (someValue > 2500){
      result = "No can do."
    } else {
      result = "I will gladly take your thirty bucks."
    }

  return result;
}

function ternaryCheckCity(someCity) {
  let result;

  result = someCity === "NYC" ? "Ok, sounds good." : "No go.";

  return result;

}

function switchOnCharmFromTip(someTip) {
  let result;
  switch (someTip) {
    case 'generous':
      result = "Thank you so much.";
      break;
    case 'not as generous':
      result = "Thank you.";
      break;
    default:
    result = "Bye."
    break;
  }
  return result;

}
