// Write your code in this file!

let message;

function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    message = 'This one is on me!';
  } else if (distance >= 2000 && distance < 2500) {
    message = 'I will gladly take your thirty bucks.';
  } else {
    message = 'No can do.';
  }

  return message;  
}


function ternaryCheckCity(city) {
  switch (city) {
    case 'NYC':
      message = 'Ok, sounds good.';
      break;
    case 'Pittsburgh':
      message = 'No go.'
      break;
  }

  return message;
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything': 
      return 'Bye.';
  }
}