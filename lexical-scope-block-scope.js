/*
Q. What is laxical Scope in JavaScript ?
ans : A scope that accesses variables of the same scope or outer scope is called lexical scope.
    *. child schope access parent acope
    *. Sibling Scope not access each other variable   

*/


//# Example 1 : child schope access parent acope
        function a1(){
            let a = 10;
            console.log(a)

            function a2(){
                let b = 20;
                console.log(a+b) // "a2()" access  "a1()" variable
            }
            a2()
        }
        a1()

//# Example 2 : Sibling Scope not access each other variable  
        function b2(){
            console.log('output')

            function b2_1(){
                let x = 20
            }

            function b2_2(){
                let y = 10
                //console.log(x*y) // Error : x is not defined
            }
            b2_1()
            b2_2()
        }
        b2()

//Example with blcok Scope
function fn1(){
    let fName = "Rajnish";
    function fn2(){
        let lName = "Bharti";     
        // block Scope here   
       if(true) {
            var age  = 30;
             // here access "fn1() , fn2()" & "block ({})"  variable 
            let details = `Hello, My name is ${fName} ${lName}, and my my age is ${age}`
            console.log(details)
        }
        // End block Scope here   
        console.log(age)
    }
    fn2()
}
fn1()


//# Example 3
    function grandPa (){
       // debugger

        let n1 = "Ajay Kumar";
        let it1 = "Bullock cart";
        console.log(`hi, I am ${n1} and i have ${it1}`) // self varaible access

        function father(){
            let n2 = 'Bablu Kumar';
            let it2 = "Cycle";
            console.log(`hi, I am ${n2} and i have ${it2}`) // "grandPa()" varaible access
            console.log(`My Father name is ${n1} and he has ${it1}. So, I use ${it1} `) // self varaible access

            function child(){
                let n3 = 'Kunal Kumar';
                let it3 = "Car";
                console.log(`hi, I am ${n3} and i have ${it3}`) // "grandPa()" varaible access
                console.log(`My Father name is ${n2} and he has ${it2}. So, I use ${it2} `) // "father()" varaible access
                console.log(`My Grand Father name is ${n1} and he has ${it1}. So, I use ${it1} `) // "grandPa()" varaible access
            }
            child()
        }
        father()

    
    }
    grandPa()

