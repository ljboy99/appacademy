// task is to print every number from lowNum to highNum

function logBetween(lowNum, highNum){
    let current = lowNum
    if (lowNum < highNum){
        while (current != highNum+1){
        console.log(current)
        current += 1}}
    else{
        return}
}

// Examples:
logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
// 4
// 5
// 6