/*
Q. What is arrow function ?
Ans : arrow function is a part of es6. it is allow to short code of function.

Q. How to create arrow function ?
Ans : with the help of arrow sign and here no need function keyword
        ex let abc = ()=>{
            return console.log('hi, I am Arrow function)
        }



        # With singale statement retunr
            *. no need return keyowrd
            *. no need block code
*/

// Ex1 : Single line statement code (here no need retrun)
    let outputVal =(a,b)=> a+b
    console.log(outputVal(10, 20))

// Ex 2 : Multiple line Statement
    let func2 = (a,b)=>{
        let output = a*b
        return console.log(`You Multiply Vale is = ${output}`)
    }
    func2(80, 50)

// Example 3 : use with highOrder function
    setTimeout(()=>{
        console.log('h1')
    }, 3000)

//Example 4 : arrow function experession
    let sub = (a,b)=>a-b
    console.log(sub(50, 10))



