function scuberGreetingForFeet(someValue) {
    let result
    if (someValue <= 400) {
      result = 'This one is on me!'
    }
    else if (someValue > 2000 && someValue  < 2501) {
      result = 'I will gladly take your thirty bucks.'
    }
    else if (someValue > 2500) {
      result = 'No can do.'
    }

     return result

}

function ternaryCheckCity(someValue) {
    return (someValue === "NYC" ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(someValue) {

  let result
  switch (someValue) {
      case 'generous':
        result  = 'Thank you so much.';
        break;
      case 'not as generous':
        result  = 'Thank you.';
        break;
      default:  
        result  = 'Bye.';
        break;
    }
    return result
}
