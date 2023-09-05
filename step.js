//prompted to create a function  which will print in increments (step) from min to max

function logBetweenStepper(min, max, step){
    let current = min
    while (current < max+1){
        console.log(current)
        current += step
    }
}

// Examples:
logBetweenStepper(5, 9, 1); // prints out:
// 5
// 6
// 7
// 8
// 9


logBetweenStepper(-10, 15, 5)  // prints out:
// -10
// -5
// 0
// 5
// 10
// 15