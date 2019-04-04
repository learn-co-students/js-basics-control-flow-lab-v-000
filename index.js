// Write your code in this file!
function scuberGreetingForFeet(someValue) {
let result
  if (someValue <= 400){
    result = "This one is on me!"
  } else if (someValue >2500) {
    result = "No can do."
  } else if (someValue >= 2000) {
    result = "I will gladly take your thirty bucks."
  } 
  return result
}

function ternaryCheckCity(value) {
  let result;
  switch (value) {
    case value = "NYC":
        result = "Ok, sounds good."
        break;
    default:
        result = "No go."
        break;
  }
  return result
}

function switchOnCharmFromTip(value) {
  let result;
  switch (value) {
    case value = "generous":
        result = "Thank you so much."
        break;
    case value = "not as generous":
        result = "Thank you."
        break;
    default:
        result = "Bye."
        break;
  }
  return result
}