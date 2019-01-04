// Write your code in this file!
function scuberGreetingForFeet(someValue){
 let message
  if (someValue > 2500) {
         message = 'No can do.';
  }
  else {
     if (someValue > 2000){
           message = 'I will gladly take your thirty bucks.';
          }
     else  {
            if (someValue<= 400) {
              message = 'This one is on me!';
            }
     }
  }
  return message;
}
function ternaryCheckCity(City){
  const s1=  "Ok, sounds good.";
  const s2=  "No go.";
 let message =  City === 'NYC'?  s1:s2;
 return message;

 }

function switchOnCharmFromTip(theTip){
 switch (theTip) {
   case 'generous':
     message = 'Thank you so much.';
     break;
   case 'not as generous':
     message = 'Thank you.';
     break;
   default:
     message = 'Bye.';
 }
 return message;
 }
