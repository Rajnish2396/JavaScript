/*
Q. what is execution context
Ans :   JavaScript's engine creates a "context (anonymous)" when receiving a script file, known as "Global Execution 
        Context (GEC).
        variable, object is part "global execution context"     
            1. var, let, Const, object key value has "global execution"
            2. function is own executon that caled local execution
*. 


      ==> There are two types of execution contexts
            a) Global Execution : The global execution context is created when a JavaScript script first starts to run,
            b) Function (Local) Execution : A function execution context is created whenever a function is called

      ==> There are two phases of JavaScript execution context
            a) Memory Creation phase: it creates an environment where all the variables and functions are allocated memory
            
                ex : let a = undefined
                     let b = undefined

            b) Code Execution phase:
                
                         a = 10
                         b = 10
        ==> var
*/
// global execution  : 

debugger
//global : The global execution context is created when a JavaScript script first starts to run
//global execution example
    var aVar = "RajnishVar";
    let aLet = "Rajnish";

    let myobj = {
        name : "RajnishObj"
    }
    
    
 // function (local) Execution : A function execution context is created whenever a function is called
    function Rajnish(){
        let a = "Raj";
        console.log(a)
    }
    Rajnish()



 