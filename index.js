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