// Write your code in this file!
let customers;
function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
        customers = "This one is on me!";
    } else if (distance > 400 && distance < 2500 ) {
        customers = "I will gladly take your thirty bucks.";
    } else {
        customers = "No can do."
    }
    return customers;
}


function ternaryCheckCity(city){
    let response;
    city === "NYC" ? response = "Ok, sounds good." : response = "No go.";
    return response;
}

function switchOnCharmFromTip(tip){
    let valeu;
    if (tip === "generous") {
        valeu = "Thank you so much."
    } else if (tip === "not as generous"){
         valeu = "Thank you.";
    } else  {
        valeu = "Bye.";
    }
    return valeu;
}
