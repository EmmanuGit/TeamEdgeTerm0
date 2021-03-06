
/* -------------------------------------------- 
Day 2 Challenges
-------------------------------------------- */

let message = `Welcome to Day 2
Today we are learning about conditionals. 
Let's practice writing some conditionals of our own!`;
console.log(message);

const READLINE = require("readline-sync");
/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")
/* Can you drive?
    Prompt the user to enter their age.
    Write conditional statements that print out whether you can drive in your city. */

// let msg = "";
// msg = READLINE.question("age?");
// console.log("my age is" , msg);


// if (msg >= 16){
//     console.log (" You are old enough to drive")
// }
// else {console.log(" You are not old enough to drive.")
// }










/* -------------------------------------------- */

console.log("------------------- Challenge 2 -------------------") 

/* Who placed first?
    Write conditional statements that checks which is the highest and prints the highest score. 
    Hint: Create three variables and assign them random scores. */
let score_1 = 45;
let score_2 = 35;
let score_3 = 34;

if ((score_1 > score_2) && (score_1 > score_3)){
    console.log("Player 1 is the winner");
}
else if (score_2 > score_3){
    console.log ("Player 2 is the winner");
}
else {
    console.log("player 3 is the winner");
}




/* -------------------------------------------- */

console.log("------------------- Challenge 3 -------------------")

/* One of the most common parts of our daily routine is checking the weather. 
   Our outfit and accessories are dependent on the temperature and conditions outside. 
   ie. We're probably not going to wear shorts out when it's snowing...


**** Challenge 3: Part 1 ****
   Write a conditional statement that checks the value of the weather variable 
   and prints out a weather report based on the current weather:
   Rainy: Bring an umbrella
   Sunny: Wear a hat and sunglasses
   Snowing: Wear gloves and a scarf */

//Here's a variable to get you started:
let weather = `sunny`;
let temperature = 60


if ((weather == "rainy") && ( temperature > 50 )){
    console.log(" Bring an umbrella and a jacket")
}
else if ((weather == "sunny") && (temperature < 65)){
    console.log("Wear a hat and wear light clothes ")
}
else {
    console.log("Wear gloves and a scarf")
}












//Tip: Try changing the value of the weather variable to test your other conditions.

/**** Challenge 3: Part 2 ****
   Now that you've written conditions for specific weather forecasts, let's also add in temperature! 
   You can't dress accordingly if you only know that it's raining outside but not how cold it is!
   For example:
      If it's raining and 60 degrees, you might want to bring your umbrella and wear a light jacket.
      However, if it's raining and 30 degrees, you might want to break out a warmer jacket with your umbrella instead. 
    
   Add to your conditional statements above and modify your weather reports to also take into account the temperature. 
   Make sure to account for at least three different temperatures!
   Hint: You will need another variable to keep track of the temperature.
*/











/* -------------------------------------------- */

console.log("------------------- Challenge 4 -------------------")

/* Prompt the user to enter the day of the week (1-7 representing Monday - Sunday)
    Write a set of conditionals that will take a number from 1 to 7 
    and print out the corresponding day of the week. 
    Make sure to add a statement that accounts of any numbers out of range! */

 //let Dayofweek = Math.floor(Math.random() * 7 + 1);
 let dayofweek = "";
 dayofweek = READLINE.question("What is the day of the week.(1-7 representing Monday - Sunday)");
 //console.log("The day of the week is " , dayofweek)
 
 if (dayofweek  == 1){
     console.log("Monday")
 }
else if (dayofweek == 2){
    console.log("Tuesday")
}
else if (dayofweek == 3){
    console.log("Wednesday")
}
else if (dayofweek == 4){
    console.log("Thursday")
}
else if (dayofweek == 5){
    console.log("Friday")
}
else if (dayofweek == 6){
    console.log("Saturday")
}
else if (dayofweek == 7){
    console.log("Sunday")
}
else {
    console.log("Oops you didn't chose a number between 1 and 7. Try again")
}





/* -------------------------------------------- */

console.log("------------------- Challenge 1 -------------------")

/* A leap year is a calendar year that contains an additional day added 
    to keep the calendar year synchronized with the astronomical year or seasonal year.
    To calculate if a specific year is/was a leap year, you can follow the following steps:
      1. If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
      2. If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
      3. If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
      4. The year is a leap year (it has 366 days).
      5. The year is not a leap year (it has 365 days).

  Those are a lot of conditions...

  Your challenge is to translate the steps above into conditionals which will evaluate if the 
  year stored in a variable is/was a leap year.*/







