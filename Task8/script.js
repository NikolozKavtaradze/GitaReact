// Task 1
let array = [1,'Nick',true,2,5];

for(let i = 0; i < array.length; i++)
{
    console.log(array[i]);
}


// Task 2
let userInput = prompt("Enter the amount of salary");

let salary = parseFloat(userInput);

if(isNaN(salary)){
    console.log('Invalid Input, please enter a valid number');
} else {
    if(salary > 30000) {
        console.log("Above average salary")
    } else if(salary >= 10000 && salary <= 30000) {
        console.log('Average salary')
    } else {
        console.log('Below average salary')
    }
}

// Task 3

var numArray = [ 15,53,22,198,10,28,16,70,33,951 ];

numArray.forEach(element => {
    if(element % 2 == 1) {
        console.log(element);
    }
});