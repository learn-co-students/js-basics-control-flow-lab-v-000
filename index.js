function scuberGreetingForFeet(number){
    let result;
    if (number <= 400){
        return result = 'This one is on me!';
    } else if (number > 2000 && number < 2500){
        return result = 'I will gladly take your thirty bucks.';
    }else{
        return result = 'No can do.';
    }
}

function ternaryCheckCity(city){

    return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(value){
    let msg;
    switch (value){
        case 'generous':
            return msg = 'Thank you so much.';
            break;
        case 'not as generous':
            return msg = 'Thank you.';
            break;
        default:
            return msg = 'Bye.';
            break;
    }
}