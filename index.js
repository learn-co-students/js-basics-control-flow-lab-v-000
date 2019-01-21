// Write your code in this file!
function scuberGreetingForFeet(distance){
   let answer;
    if (distance < 400){
        answer = "This one is on me!";
    }else if (distance > 2000 && distance < 2500){
        answer = "I will gladly take your thirty bucks."
    } else {
        answer = 'No can do.'
    }
   return answer;
}

function ternaryCheckCity(city){
    let response = city === "NYC" ? "Ok, sounds good." : "No go.";
    return response;
}

function switchOnCharmFromTip(tip){
    let response;
    switch (tip){
        case "generous":
            response = "Thank you so much.";
            break;
        case "not as generous":
            response = "Thank you.";
            break;
        default: 
            response = "Bye.";
    }
    return response;
}