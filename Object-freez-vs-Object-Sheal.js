let user = {
    fname : "Rajnish"
}
console.log(user) // Print = {fname: 'Rajnish'}

//Before Use  Freez  we can update object for examle
console.log('Before Use Freez')
    user.fname = "Anish"
    console.log(user) //Print = {fname: 'Anish'}

console.log('After Use Freez')
Object.seal(user)
user.fname = "This is a Sheel";
console.log(user)
//Object.freeze(user)
//user.fname = "Mahesh";
console.log(user) // here no change =Print = {fname: 'Anish'}

/*
    Q. What is a "Object.seal()" method?
    A. with the help of "Object.seal()" method we can't add or remove any property but we can change existing property.
       Note : ==> 1.we  can't add or remove any property but 
                  2.we can change existing property
*/

let myUser = {
    fname : "Rajnish",
    lname : "Bharti",
    age : 25
}
//Object.seal(myUser)
 //1. We can't add or remove any property
      delete myUser.fname
      console.log(myUser)
