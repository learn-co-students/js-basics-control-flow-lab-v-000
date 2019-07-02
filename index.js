// Write your code in this file!
/*solution - didn't need to set the result to a variable

function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}

*/
function scuberGreetingForFeet(someValue) {
    let result;
    if (someValue <= 400) {
      result = 'This one is on me!';
    } else if (someValue > 2000 && someValue <= 2500) {
      result = 'I will gladly take your thirty bucks.';
    } else if (someValue > 2500) {
      result = 'No can do.';
    }
    return result;
}

function ternaryCheckCity(city) {
  let result;
   result = (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
   return result;
}

function switchOnCharmFromTip(tip) {
  let result;
  switch (tip) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.'
      break;
  }
   return result;

}
