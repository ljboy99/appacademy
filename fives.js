//the prompt is to print the multiples of 5 up to a maximum number n

function printFives(n){
    let current = 0
    while (current < n){
        console.log(current)
        current+=5
    }
}

// Example:

printFives(20) // prints out:
// 0
// 5
// 10
// 15