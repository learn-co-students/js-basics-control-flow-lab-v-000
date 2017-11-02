// Write your code in this file!
let fee, response, say
function scuberGreetingForFeet(rider){
  if (rider<=400){
   fee = 'This one is on me!';
  }else if (rider > 2500) {
    fee = 'No can do.';
    }
  else if (rider > 2000){
  fee = 'I will gladly take your thirty bucks.';
}
  return fee;
}

function ternaryCheckCity(city){
if (city === 'NYC'){
  response = "Ok, sounds good.";
}else {
  response = "No go."
}
return response;
}

function switchOnCharmFromTip(tip){
  if(tip === 'generous'){
    say = "Thank you so much.";
  }else if (tip === "not as generous"){
    say = "Thank you."
  }else {
    say = "Bye."
  }
  return say;
}
