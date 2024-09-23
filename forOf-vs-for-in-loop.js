
/* 
   Q. what is "for of" loop in javaScript ?
   ans : with the help "for of" loop we can itirate "value of an array"

*/
let books = ["Hindi", "English", "Math", "Science"]
for (let item of books ) {
    console.log(item)
}
console.log('----------------------')
/* Q. What is "for in" loop in JavaScript ?
ans : with the help "for in" loop we can itirate "key of an object"

Note : it is not return value, it is return key
*/
                let sutdent ={
                    name: "Rajnish",
                    age :20,
                    class :6
                }
                for(let stdKey in sutdent){
                    console.log(stdKey) //pring name, age, class
                    console.log(sutdent.stdKey) // "Rajnish", 20, 6
                }

                console.log('power')
                let a = 2;

                console.log(a**2)









