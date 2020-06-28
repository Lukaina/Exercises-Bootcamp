function showNumbers(){
    const array = [];
    for (i = 1; i < 101; i++) {
        if ( i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz"); 
            array.push("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
            array.push("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
            array.push("Buzz");
        } else {
            console.log(i);
            array.push(i);
        }
    }
    return array;    
}
module.exports = {
    showNumbers
};
