// Write your code in this file!
function scuberGreetingForFeet(distance) {
    let greeting = "";

    if (distance <= 400) {
        greeting = "This one is on me!";
    } else if (distance > 2000 && distance <=2500) {
        greeting = "I will gladly take your thirty bucks.";
    } else if (distance > 2500) {
        greeting = "No can do.";
    } else {
        greeting = "I'm not sure how to respond.";
    }
    return greeting;
}

function ternaryCheckCity(destination) {
    let response = "";

    if (destination === "NYC") {
        response = "Ok, sounds good.";
    } else {
        response = "No go.";
    }
    return response;
}

function switchOnCharmFromTip(tip) {
    let response = "";

    if (tip === 'generous') {
        response = "Thank you so much.";
    } else if (tip === 'not as generous') {
        response = "Thank you.";
    } else {
        response = "Bye.";
    }
    return response;
}