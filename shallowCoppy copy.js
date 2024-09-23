// when we copy object or Array the reference will be copy

    // A. Normal (refrence) Array Copy
            let arr1 =['book', 'pencil']
            let arr2 =arr1

    // B. Normal (refrence) Object Copy
            let user1 = { // memory address  = Object@54955
                name : "Rajnish",
                age:20
            }
            let user2 = user1;
            // user 2 (memory address) = Object@54955
            console.log(user1.name)
            console.log(user2.name)
            //Change Coppy Object
            user2.name = "Ankit"; 
            console.log(user1.name) // (original object print) == "Ankit"
            console.log(user2.name) // (Coppy object print) == "Ankit"

            //Note : in this example we observe When we modify a copy of an object, the changes will affect "original object" & "coppy object". Because both object refrence (Object@54955) are same . so when we change any  property of object then both are changed





/*
Shallow coppy : shallow copy is copy of  top lable object. 
                "Object.assign(), spread operator (...), slice(), concat() method helps to copy of top label object"

*/

let emp1 ={
    name: "Ankit Kumar",
    age:30,
    address:{
        house: 12,        
        city:"Delhi"
    }
}

//1. Shallow Copy using OBject.assign()
    
/*let emp2 ={}
    Object.assign(emp2, emp1,)
    emp2.name="Manoj Kumar"
        console.log(emp2)
        console.log(emp1)
 */
