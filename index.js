// Write your code in this file!
function scuberGreetingForFeet(feet) {
    response = '';
    
    if (feet > 2500) {
        response = 'No can do.'
    }
    else if (feet > 2000) {
        response = 'I will gladly take your thirty bucks.'
    }
    else if (feet <= 400) {
        response = 'This one is on me!';
    }

    return response;
}

function ternaryCheckCity(city){
    return (city === "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
    response = 'Bye.';
    
    switch (tip){
    case 'generous':
        response = 'Thank you so much.';
        break;
    case 'not as generous':
        response = 'Thank you.';
        break;
    }
    
    return response;
}