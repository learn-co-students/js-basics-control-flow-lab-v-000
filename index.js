// Write your code in this file!
function scuberGreetingForFeet(someValue) {
    let ride;
    if (someValue < 400) {
        ride = 'This one is on me!';
    }
    else if (someValue > 2500) {
        ride = 'No can do.';
    }
    else if (someValue > 2000){
        ride = 'I will gladly take your thirty bucks.';
    }
    return ride
  }


  function ternaryCheckCity(someCity) {
    return someCity === 'NYC' ? 'Ok, sounds good.':'No go.';
   }

 
   function switchOnCharmFromTip(tip){
     switch (tip) {

        case 'generous':
         return 'Thank you so much.';

        case 'not as generous':
         return 'Thank you.';

        default:
        return 'Bye.'   
    }
   }

   