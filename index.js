// Write your code in this file!
function scuberGreetingForFeet(feet) {
    let greeting;
    if (feet <= 400) {
        greeting = "This one is on me!";
    } else if (feet < 2500) {
        greeting = "I will gladly take your thirty bucks.";
    } else {
        greeting = "No can do.";
    }

    return greeting;
}

function ternaryCheckCity(city) {
    let response;
    response = (city === "NYC") ? "Ok, sounds good." : "No go.";
    return response;
}

function switchOnCharmFromTip(tip) {
    switch(tip) {
        case "generous":
            charm = "Thank you so much.";
            break;
        case "not as generous" :
            charm = "Thank you."
            break;
        default: 
            charm = "Bye."
    }
    return charm;
}