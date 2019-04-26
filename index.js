// Write your code in this file!

function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return "This one is on me!"
  } else if ( distance > 2500){
    return "No can do."
  } else if (2000 < distance < 2500){
    return "I will gladly take your thirty bucks."
  } 
}

function ternaryCheckCity(city){
  if (city === "NYC"){
    return "Ok, sounds good."
  } else{
    return "No go."
  }  
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

