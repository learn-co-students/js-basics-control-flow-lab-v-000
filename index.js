
function scuberGreetingForFeet(rideDistance) {
  let result

  if (rideDistance <= 400) {
    result = "This one is on me!";
  } else if (rideDistance > 2000 && rideDistance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  } else if (rideDistance > 2500) {
    result = "No can do.";
  }
  return result
}

function ternaryCheckCity(city) {
  let result
  city === "NYC" ? (result = "Ok, sounds good.") : (result = "No go.");
  return result
}

function switchOnCharmFromTip(customerTip) {
  let response
  
  if (customerTip === "generous") {
    response = "Thank you so much.";
  } else if (customerTip === "not as generous") {
    response = "Thank you.";
  } else
    response = "Bye.";
  return response
}

// function switchOnCharmFromTip(customerTip)
//   let thankYouStatement;
//   customerTip === 'generous' ? (thankYouStatement = "Thank you so much.")
// }
