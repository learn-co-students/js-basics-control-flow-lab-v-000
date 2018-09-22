// Write your code in this file!

  function scuberGreetingForFeet(someValue) {
    if (someValue <= 400) {
      result = 'This one is on me!';
    }
    else if (1999 < someValue && someValue < 2500) {
      result = 'I will gladly take your thirty bucks.';
    }
    else {
      result = 'No can do.';
    }
    return result
  }

  scuberGreetingForFeet(199)

  function ternaryCheckCity(city){
    {
      city === 'NYC' ? (result = 'Ok, sounds good.') : (result = 'No go.')
    }
    return result
  }

  // function switchOnCharmFromTip (tip) {
  //   switch (tip) {
  //     case 'generous':
  //       return 'Thank you so much.';
  //     case 'not as generous':
  //       return 'Thank you.';
  //     default:
  //       return 'Bye.';
  //   }
  // }
  function switchOnCharmFromTip(tip) {
    switch(tip) {
      case 'generous':
        return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.'; 
      default:
        return 'Bye.'; 
    }
  }
