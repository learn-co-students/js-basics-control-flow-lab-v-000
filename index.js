
function scuberGreetingForFeet(distance) {
if (distance <= 400) {
return 'This one is on me!';
}
else if (distance > 2000 && distance <= 2500) {
 return 'I will gladly take your thirty bucks.';
}
else if (distance >2500) {
return 'No can do.';
}
}


function ternaryCheckCity(city)
{
  return (city === 'NYC' ) ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tip_description){
  if (tip_description === 'generous') {
    return "Thank you so much."
  }
  else if (tip_description === 'not as generous') {
    return "Thank you."
  }
  else {
    return "Bye."
  }
}
