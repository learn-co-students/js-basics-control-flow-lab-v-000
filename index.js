// Write your code in this file!
  let message ;
function scuberGreetingForFeet(ride){
  if(ride > 2500)
      message ='No can do.'
  else if(ride <= 400)
    message = 'This one is on me!';
  else if(400 < ride < 2000)
      message ='I will gladly take your thirty bucks.'
  return message;
}

function ternaryCheckCity(city){
      if(city == "NYC")
        message = 'Ok, sounds good.'
      else
        message = 'No go.'
  return message;
}

function switchOnCharmFromTip(tip){
      if(tip =='generous')
        message =  'Thank you so much.'
      else if(tip =='not as generous')
        message =  'Thank you.'
      else
        message =  'Bye.'
      return message;
}
