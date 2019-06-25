function scuberGreetingForFeet(someNumber) {

  let result;
  if (someNumber <= 400) {
    result = "This one is on me!";
  }
  else if (someNumber >= 2000 && someNumber <= 2500 ) {
    result = "I will gladly take your thirty bucks.";
  }
  else {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(someCity){
  let result;
  someCity === "NYC" ? result = "Ok, sounds good." : result = "No go."
  return result;
}

function switchOnCharmFromTip(someTip) {
  let result;
  switch(someTip) {
    case 'generous':
    result = "Thank you so much.";
    break;
    case 'not as generous':
    result = "Thank you.";
    break;
    default:
    result = 'Bye.';
    break;
  }
return result;
}

// Write your code in this file!
