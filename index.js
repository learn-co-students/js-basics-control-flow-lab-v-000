// Write your code in this file!
function scuberGreetingForFeet(val){
  if (val <= 400){
    return 'This one is on me!';
  }else if (val > 2000 && val <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }else if (val > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.';
  }else {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  if (tip === 'generous'){
    return 'Thank you so much.';
  }else if (tip === 'not as generous'){
    return 'Thank you.';
  } else if (tip === 'thanks for everything') {
    return 'Bye.';
  }
}
