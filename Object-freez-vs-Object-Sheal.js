
/*===========================================================================================================
                    Before Using "Object.seal()" & "Object.freeze()"
*===========================================================================================================*/
console.log("----Before use Object.freeze() & Object.seal() example here----")
        let myUser = {
            fname : "Rajnish",
            lname : "Bharti",
            age : 25
        }
            console.log(myUser)
        //1. remove property without using Object.seal() method 
            delete myUser.fname
            console.log(myUser)
        //2. Add property without using Object.seal() method 
            myUser.subject = "Hindi"
            console.log(myUser)
        //3. Edit property without using Object.seal() method 
            myUser.lname = "Kumar"
            console.log(myUser)

/*===========================================================================================================
                    1.  Using "Object.seal()"
*===========================================================================================================*/
/*
    Q. What is a "Object.seal()" method?
    A. with the help of "Object.seal()" method we can't add or remove any property but we can change existing property.
       Note : ==> 1.we  can't add 
                  2. we cant't remove any property but 
                  2.we can change existing property.
        For Ex(bellow)
*/

console.log("----Object.seal() example here----") 
const sealUser = {
    fname : "Ram",
    lname: "Kumar",
    age:16
}
console.log(sealUser)
// use Object.seal()
   Object.seal(sealUser) //print = {fname: 'Ram', lname: 'Kumar', age: 16}

   //1. no remove property when  using Object.seal() method
    delete sealUser.age;
    console.log(sealUser) //print = {fname: 'Ram', lname: 'Kumar', age: 16}

    //2. no add property when  using Object.seal() method
    sealUser.marks = 50
    console.log(sealUser) //print = {fname: 'Ram', lname: 'Kumar', age: 16}

     //3. you can't edit existing property when  using Object.seal() method
     sealUser.fname ="Rakesh" 
     console.log(sealUser) //print = {fname: 'Rakesh', lname: 'Kumar', age: 16}



/*===========================================================================================================
                    2.  Using "Object.freeze()"
*===========================================================================================================*/

//Object.freeze(user)
/*
    Q. What is a "Object.freeze()" method?
    A. with the help of "Object.freeze()" method we can't add,  remove any no edit existing property.
       Note : ==> 1.we  can't add 
                  2. we cant't remove any property but 
                  2.we can't change existing property.
        For Ex(bellow)
*/




 console.log("----Object.freeze() example here----")
 const freezeUser = {
    fname : "Aman",
    lname : "Gupta",
    age: 25
 }
 console.log(freezeUser)
    //use "Object.seal()"
     
    Object.freeze(freezeUser) // print = {fname: 'Aman', lname: 'Gupta', age: 25}

      //1. no remove property when  using Object.freeze() method
        delete freezeUser.age 
        console.log(freezeUser) // print = {fname: 'Aman', lname: 'Gupta', age: 25}

      //2. no add property when  using Object.freeze() method
          freezeUser.marks = 50;
          console.log(freezeUser) // print = {fname: 'Aman', lname: 'Gupta', age: 25}
      
     //3. you can't edit existing property when  using Object.freeze() method
           freezeUser.fname = "Shyam";
          console.log(freezeUser) // print = {fname: 'Aman', lname: 'Gupta', age: 25}
    
