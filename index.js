// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let message;
    if (someValue <= 400) {
      message = 'This one is on me!';
    } else if ((someValue > 2000) && (someValue < 2500)) {
    message = 'I will gladly take your thirty bucks.';
  } else if(someValue > 2500){
    message = 'No can do.';
  }
   return message;
}

function ternaryCheckCity(city){
  return city == 'NYC' ?  'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(goods){
  let mess;
  switch (goods) {
    case 'generous':
       mess =  'Thank you so much.';
       break;
    case 'not as generous':
      mess = 'Thank you.';
      break;
    default: mess = 'Bye.';

  }
 return mess;
}
