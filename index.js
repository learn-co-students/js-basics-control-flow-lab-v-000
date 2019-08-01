// Write your code in this file!
function scuberGreetingForFeet (number) {
    let response
    if (number <= 400) {
        response = 'This one is on me!';
    } else if (number > 2000) {
        response = 'I will gladly take your thirty bucks.';

        if (number > 2500) {
            response = 'No can do.';
        }
    }
    return response
}