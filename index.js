// Write your code in this file!

function scuberGreetingForFeet(ride) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!

  let result
if (ride < 400) {
  result = "This one is on me!";
} else if (ride > 2000 && ride < 2500) {result = 'I will gladly take your thirty bucks.'} else if (ride > 2500) {result = 'No can do.'}
//at the end, if I want my function to return something, I need to state it:
return result
}
