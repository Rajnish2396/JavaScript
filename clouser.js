/*
Q. What is Clouser ?
ans : clouser is a function or HighOrder function that is return a function with own scope.

Q. is Every function returns Scope ?
ans : no, Every function doesn't return any scope. 
      when need child function access value of parent function. that, condition return scope

Q. Why does a child function need a "scope" ?
ans : because we, no every function has local scope (not global Scope) and when returns code or value then his scope is
     destroyed. so Child function is unable to access value of parent function

*/

//Example 1
debugger
function parent(){
    let a= 10;
    let b= 20;
    let c = 'Garbage value'

    return function child(){
        return a+b
    }
}


let sum = parent();
 console.log(sum())


// How to check Clouser 
    /*
            Step 1 . use "debugger" keyword in Salary
            step 2 : press "fn+f9" and notice Scope option in dev tool

            step 3 : when execute parent function then you notice 
                    *. autmatice created one "local Scope" 
                    *. when function return code or value then local scope distroyed
                    
            step 4 : when execut child function then you click at 
                                                  "inner function ex=(sum: ƒ child())" 
                    in Scope tab here you see Scope option. click on Spope option. here you see Clouser
    */




// ==================== Real Example ====================
//debugger
function Salary(){
  

    let workderSalary= 500;
    let managerSalary = 1000;

    return function Worker(x){
        let workingDays =x;
        let payBleSalary = workderSalary*workingDays;
        return payBleSalary
    }


}


let slry = Salary();
console.log(slry(5))

