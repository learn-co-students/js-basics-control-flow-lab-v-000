// Write your code in this file!
let scuberGreetingForFeet = function(ride) {
  if(ride < 400) {
    return "This one is on me!"
  }
  if(ride > 2500) {
    return "No can do."
  }
  if(ride > 2000) {
    return "I will gladly take your thirty bucks."
  }

}

let ternaryCheckCity = function(city) {
  if(city === "NYC") {
    return "Ok, sounds good."
  }
  return "No go."
}

let switchOnCharmFromTip = function(tip) {
  if(tip === 'generous') {
    return "Thank you so much."
  }
  if(tip === 'not as generous') {
    return 'Thank you.'
  }
  return "Bye."
}
