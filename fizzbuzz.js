//prompt is to print numbers divisible by 3 or 5 up to a maximum

function fizzBuzz(max){
    let current = 0
    while (current < max+1){
        if (current%3 == 0){
            console.log(current)
            current+=1
        }
        else if (current%5 == 0){
            console.log(current)
            current+=1
        }
        else{
            current+=1
        }
    }
}
// Examples:

fizzBuzz(20); // prints out:
// 3
// 5
// 6
// 9
// 10
// 12
// 18