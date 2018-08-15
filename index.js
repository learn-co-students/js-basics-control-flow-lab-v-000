// Write your code in this file!
function scuberGreetingForFeet(someNumber) {
  let response
  if (someNumber <= 400) {
    response = "This one is on me!";
  } else if (someNumber > 2500) {
    response = 'No can do.';
  } else if (someNumber > 2000) {
    response = 'I will gladly take your thirty bucks.';
  }
  return response;
}

function ternaryCheckCity(cityName) {
  let response
  if (cityName === 'NYC') {
    response = "Ok, sounds good.";
  } else {
    response = "No go.";
  }
  return response;
}

function switchOnCharmFromTip(tipQuality) {
  let reply
  if (tipQuality === 'generous') {
    reply = "Thank you so much.";
  } else if (tipQuality === 'not as generous') {
    reply = "Thank you.";
  } else if (tipQuality === 'thanks for everything') {
    reply = "Bye.";
  }
  return reply;
}
