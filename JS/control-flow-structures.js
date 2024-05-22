//Control Flow Structures
/*
    Conditional Statements 
        -- allow you to execute different blocks of code on a condition/boolean
 */
//if-else statement
let age = 20;
if(age >= 21) {
    console.log("You're eligible to vote!");
} else {
    console.log("You're not eligible to vote!");
}

// nested if-else statement
let temperature = 50;
if(temperature < 0) {
    console.log("I'm probably already frozen.");
} else if (temperature >= 0 && temperature < 20) {
    console.log("It is a cold day.");
} else if (temperature >= 20 && temperature < 40) {
    console.log("It is a warm day.");
} else if (temperature >= 40 && temperature < 60) {
    console.log("It is a hot day.")
} else {
    console.log("I'm melting.");
}

//switch statement
let day = 'Tuesday';
switch(day) {
    case'Monday':
        console.log('Back to work.');
        break;
    case 'Friday':
        console.log('Last day of work');
        break;
    case 'Sunday':
        console.log('It is the weekend');
        break;
    default:
        console.log('It is a regular day.');
}

/*
    LOOPS
        -- used to repeatedly execute a block of code until a specific condition is meet 
*/
/*
    FOR Loop
    syntax:
        for keyword ( initialization; condition; arithmetic expression) {
            // code block
        }
*/
for (let i = 1; i <= 5; i++) {
    console.log('For loop count: ', i);
}


/*
    WHILE Loop
    syntax:
        while keyword (condition) {
            //code block
        } 
*/
let count = 1;
while(count <= 5) {
    console.log('While loop count: ', count);
    count++;
}

/*
    DO-WHILE Loop
    syntax:
        do {
            //code block
        } while ( condition )
*/
let num = 1;
do{
    console.log('Do-While loop count: ', num);
    num++;
} while (num <= 5);