let scuberGreetingForFeet = (feet) => {
  if(feet < 200) {
    return `This one is on me!`
  }

  else if(feet > 2000 && feet < 2500) {
    return `I will gladly take your thirty bucks.`
  }

  else {
    return `No can do.`
  }
}

let ternaryCheckCity = (city) => {
  return city === `NYC` ? "Ok, sounds good." : "No go."
}

let switchOnCharmFromTip = (tip) => {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;

    case 'not as generous':
      return 'Thank you.'
      break;

      default:
        return 'Bye.';
        break;
      }
}
