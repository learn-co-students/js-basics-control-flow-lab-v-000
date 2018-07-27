// Write your code in this file!

function scuberGreetingForFeet(x) {
  let result

if (x>2500){
  result = "No can do."
}else if (x <= 400){
  result = "This one is on me!"
}else if (x > 2000){
  result = "I will gladly take your thirty bucks."
}
  return result
}

function ternaryCheckCity(location) {
  return location === "NYC"?"Ok, sounds good.":"No go."
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
  case 'generous':
    return "Thank you so much.";
    break;
  case 'not as generous':
    return "Thank you.";
    break;
  default:
    return  "Bye.";
    break;
  }
}
