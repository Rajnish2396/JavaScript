/*
    Q. what is Housting ?
       ans : Hoisting is a  behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope.
       Note=> Housing is not working with let, const, any

        ex = console.log(a); //undefined
             var a  =10;

    Q. ls let, const the housitng ?
        Ans : behind the seane yes. but behaviour of javaScript . but due to the behaviour of JavaScript it puts the "housting" of late & cost in a temporal dead zone, so it returns an error.

*/
//Ex 1 with variable
console.log('.................')
    console.log(a); //undefined
    var a  =10;

//Ex 2 with "function decleration" || function Defination
    debugger
    abc() //output = hello i am funcition
    function abc (){
        console.log('hello i am funcition')
    }

//EX 3.  with "function experation" || function Defination
    sayHI() //Uncaught TypeError: sayHI is not a function
    var sayHI
        sayHI =  function(){
            console.log('anonymous')
        }
        /* Q. Why are return error this example ?
            ans : when we call create "sayHi()" then not create "function execution". because 
                    *. var Say has "undefined value" on execution time
        */

        

  
    
/*
    console.log(b) //Uncaught ReferenceError: Cannot access 'b' before initialization
    let b = 20
    */