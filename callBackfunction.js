/*
Q. What is callback function() ?
ans :  function that is used as function argument

*/

    function pannel(a, b, c){
        c(a,b)
    }
    function callback(x, y){
        console.log(`Hello, ${x} ${y}`)
    }
    pannel("Good Morning", "Rajnish", callback)