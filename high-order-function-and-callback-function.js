/*
Q. What is a Callback function ?
ans: A function that is used as function argument, that called  "callback function"

     ==> Advantage of callback function
               *. code reusable
               *. non blocking code (Asynchronous Programming)
               *. create Highorder function like map, filter, reduce
               *. created Moduler code

 for ex= 
          function display(x){
          console.log(x)
          }n

          function some(a,b, fn){
          let sum = x+y;
            return display(sum)
          }
          
          some(10, 50, display)
*/

//Example 1.
          function display(x){
               console.log(x)
          }
          function some(a,b, fn){
          let sum = a+b;
               return fn(sum)
          }
          
          some(10, 50, display)

          /*  Note :==> in this example,  display() is a callback function. */
// Example 2.

          function SomeThing(){
               console.log('I have Start Working')
               setTimeout(()=>{
                    console.log('I have done Work')
               }, 1000)
          }
          SomeThing()


/*
Q. What is a HighOrder function ?
ans : A higher order function is a function that takes one or more functions as arguments, or returns a function as its result
        *. higher order function take a function as a argument
        *. higer order function return a function
        *. higher order function make a code reusable with the help of singale function


        
     ==> Advantage of callback function
               *. code reusable
               *. non blocking code (Asynchronous Programming)
               *. create Highorder function like map, filter, reduce
               *. created Moduler code

*/




/* ===================================Example 1============================================
         * higher order function take a function as a argument
         *. higer order function return a function
   =================================================================================
*/

        function outer(x){
             return x() 
        }
      

        function callback(){
            console.log('hi, i am callback function')
        }

        outer(callback) // outer function call with "callback()" argument
                        // callback() function is a callback function      

  

/* ===================================Example 2 (Real Example)============================================
                    *. higher order function make a code reusable
===========================================================================================================
*/
// Ex A: Caluclator
    
   //norm function
    function add(a, b){

        return `Add (${a} + ${b}) = ${a+b}`
    }

    //norm function
    function sub(a, b){
         return `Sub (${a} - ${b}) = ${a-b}`
    }

    //norm function
    function multiply(a, b){
         return `multiply (${a} * ${b}) = ${a*b}`
    }

    //norm function
    function division(a, b){
        return `Division (${b} / ${a}) = ${b/a}`
    }

    //====== HIGH ORDER FUNCTION  REUSABLE ======
      function Caluclator(x, y, z){
            return x(y, z)
      }
    
     console.log(Caluclator(add, 10, 5))  // here add function is callback function
     console.log(Caluclator(sub, 10, 5)) // here sub function is callback function
     console.log(Caluclator(multiply, 20, 5)) // here multiply function is callback function
     console.log(Caluclator(division, 5, 20)) // here division function is callback function
     


     /*
source : https://www.youtube.com/watch?v=Jl6yxOiKMKM
     */
 
console.log('hello world')
function square(x){

     return x*x
}
let output =  square(10)
console.log(output)









