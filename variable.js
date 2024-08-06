
/* ================= List of Perimitive Data Type ==============================*
    
    1. let 
    2. const
    3. var
*/



/* ===============================================================================================================================
                               1. "let" Variable Use From Here
  Note==> a. declear only one time  ||  b. value assing many time 
============================================================================================================================
*/
console.log('---"let" Variable Use from Here ---')
        //a.==> let variable declear only one time
                //Ex 1.
                    let uName;
                    console.log(uName) //print =undefined 

                //Ex 2.       
                    /*
                        let a= "Rajnish";
                        console.log(a) //SyntaxError: Identifier 'a' has already been declared
                    */

        //b.==> value assing many time
            //Ex 3.   
            uName = "Ram"
            console.log(uName) //print =Ram
                //Ex 4.   
            uName ="Suresh";
            console.log(uName) //print =Sohan

           

        //Ex 5: Variable decleare & Value Assing 
            let fName = "Rajnish";
            let lName = "Bharti";
            let age = 20;
            console.log(fName + " " + lName, "Age is " + age + " Years") // Print = Rajnish Bharti Age is 20 Years

        //Ex 6: update Value 
            fName = "Ankit";
            lName = "Kumar";
            console.log(fName + " " + lName, "Age is " + age + " Years") // Print = Ankit Kumar Age is 20 Years




/* ===============================================================================================================================
                               2. "const" Variable Use From Here
Note==> a. const variable decleare with assign only one time 
============================================================================================================================
*/
console.log('---"Const" Variable Use from Here ---')
        //ex1. const variable not be undefined
            /*const dob; console.log(dob) //SyntaxError: Missing initializer in const declaration*/
        //ex2.
            const dob='12 feb 90'; 
            console.log(dob) //print ='12 feb 90';
        //ex3.
            /*const dob='20 feb 90'; console.log(dob) //SyntaxError: Identifier 'dob' has already been declared*/
            
        //ex 4. 
        console.log(fName + " " + lName, "My Date of birth is " + dob)

/* ===============================================================================================================================
                               3. "Variable"  Use From Here
Note==> a. var variable decleare & assign many time
============================================================================================================================*/
console.log('---"var" Variable Use from Here ---')
            console.log('--Variable Usages---')     
            var a;
            console.log(a) //print = undefined
            var a= "Rohit Kumar"
            console.log(a) //print = Rohit Kumar
            a ="Suresh Kumar"
            console.log(a) //print = Suresh Kumar

    


/* ===============================================================================================================================
                               diffrent between "undefined" & not defined 
============================================================================================================================*/
console.log('---diffrent between "undefined" & not defined ---')
let a1;
console.log(a1) //print = undefined
//console.log(a2) //ReferenceError: a2 is not defined






