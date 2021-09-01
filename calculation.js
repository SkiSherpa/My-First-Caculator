function calculation(inputLine){
    // IP: a String - math expression
    // OP: a # - the result of the expression
    // try{} is to catch an error - really an invalid expression for the program to evaluate.
    try {
      eval(inputLine);
    } catch (invalidInputError) {
      alert('please put in a valid expression');
    }
    var nums = eval(inputLine);
    return nums;
}
module.exports = calculation;
