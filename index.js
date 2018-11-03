function scuberGreetingForFeet(number) {
    let output;
    if (number <= 400) {
        output = "This one is on me!";
    } else if (number > 2000 && number <= 2500) {
        output = "I will gladly take your thirty bucks.";
    } else {
        output = "No can do.";
    }
    return output;
}

function ternaryCheckCity(city) {
    let output;
    if (city === "NYC") {
        output = "Ok, sounds good."
    } else {
        output = "No go."
    }
    return output;
}

function switchOnCharmFromTip(tip) {
    let output;
    if (tip === 'generous') {
        output  = 'Thank you so much.'
    } else if (tip === 'not as generous') {
        output = 'Thank you.'
    } else {
        output = 'Bye.'
    }
    return output;
}