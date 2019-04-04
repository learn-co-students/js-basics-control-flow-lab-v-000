// Write your code in this file!
let someValue


function scuberGreetingForFeet(someValue) {
  let result
if (someValue <= 400){
  result = "This one is on me!"
} else if(someValue >= 2000 && someValue < 2500) {
  result = "I will gladly take your thirty bucks."
}
  else if (someValue > 2500) {
    result = "No can do."
  }
  return result
}

let city

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default:
      return "Bye."
      break;

  }
}
