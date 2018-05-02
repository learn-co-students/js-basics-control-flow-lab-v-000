// Write your code in this file!
 function scuberGreetingForFeet(num){
   let answer;
   if (num <= 400){
     answer = "This one is on me!"
   } else if (num > 2000 && num < 2500){
     answer = "I will gladly take your thirty bucks."
   } else if (num > 2500) {
      answer = "No can do."
   }
   return answer
 }

 function ternaryCheckCity(city){
   let answer = city === "NYC" ? "Ok, sounds good." : "No go.";
   return answer
 }

 function switchOnCharmFromTip(tip){
   let answer;
   switch(tip){
     case "generous":
        answer = "Thank you so much."
        break;
     case "not as generous":
        answer = "Thank you."
        break;
     default:
        answer = "Bye."
   }
   return answer
 }
