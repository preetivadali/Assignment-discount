//Task-1 Ask the user to enter a price tag using prompt()

let input=prompt("enter a number");

//Task-2  Convert the input from string to number 
let convertNum = parseFloat(input);;
console.log(convertNum); 

//Task-3  Reduce the price by 10 procent 
let discount =convertNum * 10/100;
console.log(discount);

//Task-4 Print out the new price using console.log(),
let finalPrice = convertNum- discount;
console.log(finalPrice);