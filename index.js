// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let result;
 if (someValue < 400) {
   result = 'This one is on me!';
 }

 if (someValue > 2000) {
   result = 'I will gladly take your thirty bucks.';
 }
 if (someValue > 2500) {
   result = 'No can do.'
 }

return result
}

function ternaryCheckCity(someCity) {
  let result;
  if (someCity === 'NYC') {
    result = 'Ok, sounds good.'
  }
  else {
    result = 'No go.'
  }
  return result
}
 function switchOnCharmFromTip(tip){
   let result;
   if (tip === 'generous') {
     result = 'Thank you so much.'
   }
   else if (tip === 'not as generous') {
     result = 'Thank you.'
   }
   else {
     result = 'Bye.'
   }
   return result
 }
