// Write your code in this file!
//  Use if and else if statements to return the correct greeting 
//  based on the distance the passenger desires to travel.
function scuberGreetingForFeet(someValue) {
    if (someValue <= 400) {
        return 'This one is on me!';
    }
    else if (someValue > 2000  && someValue < 2500) {
        return 'I will gladly take your thirty bucks.';
    }
    else {
        return 'No can do.';
    }
}
console.log(scuberGreetingForFeet(someValue));

//  Use a ternary operator to return the correct response 
//  based on the desired destination of the passenger.
function ternaryCheckCity(cityName) {
    return (cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.');
}


//  Use a switch statement to return a different response 
//  based on the generosity of the passenger's tip.
function switchOnCharmFromTip(amount) {
    switch (amount) {
    case 'generous': 
    return "Thank you so much.";
    break;
    case 'not as generous':
    return "Thank you.";
    break;
    default:
        return "Bye.";
    }
}
console.log(switchOnCharmFromTip(amount));
