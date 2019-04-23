// Write your code in this file!


function  scuberGreetingForFeet(ride) {
  let something

  if (ride <= 400) {
     something = 'This one is on me!';
  } else if (ride > 2000 && ride <= 2499) {
     something = 'I will gladly take your thirty bucks.';
  } else {
     something = 'No can do.';
  }
    return something
}


function ternaryCheckCity(city){
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}


function switchOnCharmFromTip(tip){

let response;

switch (tip) {
    case 'generous':
        response = 'Thank you so much.';
        break;
    case 'not as generous':
        response = 'Thank you.';
        break;
    case 'thanks for everything':
        response = 'Bye.';
}

return response;
}
