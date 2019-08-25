// Write your code in this file!

/*
if distance is less than or equal to 400 ft, => "This one is on me"
if distance is more than 2000 ft => "I will gladly take your 30 bucks"
if distance is more than 2500 ft => "No can do"
*/
function scuberGreetingForFeet(someValue) {
    let response;

    if (someValue <= 400) {
        response = 'This one is on me!';
    }
    else if (someValue > 2000 && someValue < 2500) {
        response = 'I will gladly take your thirty bucks.'
    }
    else if (someValue > 2500) {
        response = 'No can do.'
    }

    return response
}

function ternaryCheckCity(someCity) {
    let response;

    if (someCity === "NYC") {
        response = 'Ok, sounds good.'
    }
    else {
        response = 'No go.'
    }

    return response;
}

function switchOnCharmFromTip(someTip) {
    let response; 

    if (someTip === "generous" ) {
        response = 'Thank you so much.'
    }
    else if (someTip === "not as generous") {
        response = "Thank you."
    }
    else {
        response = "Bye."
    }

    return response
}
