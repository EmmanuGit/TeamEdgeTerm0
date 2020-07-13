/* -------------------------------------------- 

	You've just learned about variables, conditionals, functions, and user input. 
	You've also created a basic calculator in a previous project.
	
	Now imagine you are going out to eat with two other friends.
	Are you at a restaurant for a meal? Are you grabbing boba? Or are you just going to an ice cream parlor?
	At the end of the meal, you and your friends have to split the bill. 

	Wouldn't it be great if we could automate that math?

					Let's try it!

  -------------------------------------------- 

Scenario Parameters: 

	When you and your friends eat out, each of you have the option to order one or multiple items.
	What kind of items are available to order?

	At the end of the order, the receipt comes and you all have to calculate the cost for each person:
	Don't forget the tax and tip!

After this program finishes running, it should output a specific total for each person

  -------------------------------------------- */

const READLINE = require("readline-sync");

/* -------------------------------------------- 

Part 1:
Let's start by asking taking the order of the group(you and two friends). What did each person order?

Write a function that will take the group's order:
- Prompt the user to enter the price of each item they ordered
- Return the cost 

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

	
	
function getname(){
	let userinput = READLINE.question("Client.1 What is your name?");
	return userinput
}
let name = getname()

function getmeal(name){
	let userinput_meal = READLINE.question(`${name} how much did your meal cost`);
	return userinput_meal
}

function getdrink(name){
	var userinput_drink = READLINE.question(`${name} how much did your drink cost?`);
	return userinput_drink
}

let meal = getmeal(name)
let drink = getdrink(name)











/* -------------------------------------------- 

Part 2:
Now that you have the costs of everything ordered, let's calculate the cost of each person's order(including tip and tax).

Write a function that will calculate the cost of each person's order, including:
- Cost of all of their ordered items
- Tax (Look up the sales tax of your city)
- Tip (Give the user the option to enter how much they want to tip)

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */
let tip =  parseInt(READLINE.question(`How much do you want to tip ${name}?  15% 20% 25% 0%`));
let salestax = (parseInt(meal) + parseInt(drink)) * (.65)
function cost(){
	//let tip = parseInt(READLINE.question(`How much do you want to tip ${userinput}`));
	//let tip2 = parseInt(READLINE.question(`How much do you want to tip ${userinput_2}`));
	//let tip3 = parseInt(READLINE.question(`How much do you want to tip ${userinput_3}`));

	
	//let tip2 = parseInt(READLINE.question(`How much do you want to tip ${userinput_2}? 15% 20% 25% 0%`));
	//let tip3 = parseInt(READLINE.question(`How much do you want to tip ${userinput_3}? 15% 20% 25% 0%`));
	


	


	let price_1 = ((parseInt(meal) + parseInt(drink)) + (salestax)) * (1 + tip/100)
	//let price_2 = (userinput_meal2 + userinput_drink2) * (1 + tip2/100 + .065)
	//let price_3 = (userinput_meal3 + userinput_drink3) * (1 + tip3/100 + .065)
	

	


console.log(price_1) 


}
cost()









/* -------------------------------------------- 

Part 3:
Let's print out a receipt for each person.

Write a function that will take the values of each person's order and total cost and print it out in an appealing way.

The receipt should include:
- Cost of each item
- Total cost for each person

Remember! Functions are meant to be reusable, so write a function that will work when called for each person!

-------------------------------------------- */

function receipt(name){
console.log(`${name}: 
					Meal Cost: $${meal}
					Drink Cost: $${drink}
					Tip: ${tip}%
					Tax: $${salestax}
					Total: ${cost()}  `)
}                   
receipt(name)
//console.log(receipt(name))








/* -------------------------------------------- 

Part 4: Upchallenges!

How many of these upchallenges can you implement?

- Make sure the user is only entering numbers. If they enter an invalid value, prompt them to re-enter. 
- The displayed prices should only have two decimal places.
- Can you adjust your program to account for any shared items ordered for the group?
- Display the tax and tip values
- Implement a rewards system (stamp cards, buy one get one, etc)

-------------------------------------------- */
