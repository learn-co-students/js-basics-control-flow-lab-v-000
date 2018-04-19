// Write your code in this file!
function scuberGreetingForFeet(feet){
  let result
  if (feet <= 400){
  result = 'This one is on me!';
}
if (feet > 2000){
  result = 'I will gladly take your thirty bucks.';
}
if (feet > 2500){
  result = 'No can do.';
}
return result
}

function ternaryCheckCity(city){
  let result
  if (city === 'NYC'){
    result = 'Ok, sounds good.';
  } else {
    result = 'No go.';
  }

  return result
}

function switchOnCharmFromTip(tip){
  let result
  if (tip === 'generous'){
    result = 'Thank you so much.';
  }else if (tip === 'not as generous'){
    result = 'Thank you.';
  }else {
    result = 'Bye.';
  }


  return result
}
