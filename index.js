// Write your code in this file!
function scuberGreetingForFeet(distance) {
    let statement = "";
    if (distance < 400) {
        statement = "This one is on me!";
    }
    else if (distance > 2000 && distance <= 2500){
        statement = "I will gladly take your thirty bucks.";
    }
        else if (distance > 2500){
            statement = "No can do.";
        }
    return statement;
}

function ternaryCheckCity(city) {
    let statement = "";
    statement = city === "NYC" ? "Ok, sounds good." : "No go.";
    return statement;
}

function switchOnCharmFromTip(tipType) {
    let statement = "";
    switch (tipType) {
        case "generous":
            statement = "Thank you so much.";
        break;
        case "not as generous":
            statement = "Thank you.";
        break;
        default:
            statement = "Bye.";
        break;
    }
    return statement;
}