function add(number1, number2) {
    let total = 0
    for (const number of arguments) {
        total = total + number
    }
    return total
}
var result = add(10, 20, 30, 50);
console.log(result)