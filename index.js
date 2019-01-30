// Write your code in this file!
function scuberGreetingForFeet(value) {
    let answer
    if (value >= 2000 && value < 2500) {
        answer = "I will gladly take your thirty bucks.";
    } else if (value >= 2500) {
        answer = "No can do.";
    } else if (value <= 400){
        answer = "This one is on me!";
    }
    
    return answer
}

function ternaryCheckCity(city){
    let response 
    city === "NYC" ? response = "Ok, sounds good." : response = "No go.";
    return response
}

function switchOnCharmFromTip(tip){
    let reaction 
    switch (tip) {
        case 'generous':
            reaction = "Thank you so much.";
            break;
        case 'not as generous':
            reaction = "Thank you.";
            break;
        case 'thanks for everything':
            reaction = "Bye.";
            break;
    }
    return reaction
}