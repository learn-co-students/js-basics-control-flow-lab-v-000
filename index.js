// Write your code in this file!
function scuberGreetingForFeet(distance)
{
  if (distance <= 400)
  {
    return "This one is on me!";
  }
  else if (distance > 2500)
  {
    return "No can do.";

  }
  else if (distance >= 2000)
  {
    return "I will gladly take your thirty bucks.";
  }
  else
  {
    return "Thanks for riding";
  }
}

function ternaryCheckCity(destination)
{
    let msg = destination === "NYC" ?  "Ok, sounds good." : "No go."
    return msg;
}

function switchOnCharmFromTip(tip)
{

  switch (tip)
  {
    case "generous":
    {
      return "Thank you so much.";
    }
    case "not as generous":
    {
      return "Thank you.";
    }
    default:
    {
      return "Bye.";
    }
  }

}
