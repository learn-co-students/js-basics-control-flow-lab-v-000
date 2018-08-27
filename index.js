// Write your code in this file!
// scuberGreetingForFeet() — Use if and else if statements to return the correct greeting based
//on the distance the passenger desires to travel.

function scuberGreetingForFeet(someNumber) {
  //everything I want my function to do I put inside these curly braces
  //in this example, lets say I want my function, addFive, to add 5 to any number I pass in (someNumber), but only IF the number is greater than zero
  let result
  if (someNumber <= 400) {
    result = 'This one is on me!'
  }
   else if (2000 < someNumber && someNumber <2500)
   {result = 'I will gladly take your thirty bucks.'
 }
 else
 {result = 'No can do.'}
  //at the end, if I want my function to return something, I need to state it:
  return result
}


function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

//const birthdayMessage = (todaysDate === userBirthday) ? `Happy birthday, ${userFullName}!` : '';
 function switchOnCharmFromTip(tip){

 switch (tip) {
   case 'generous':
     return 'Thank you so much.';
        case 'not as generous':
          return 'Thank you.';
        default:
          return 'Bye.';
      }
    }
