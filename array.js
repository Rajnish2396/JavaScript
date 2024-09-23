//1. Create Array
let student =[]
 console.log(typeof student) //print = object
//2. Create Array and set value 
student =["Ram", "Shyam", "Manohar", "Ganesh"]
console.log(student) // Print = (4) ['Ram', 'Shyam', 'Manohar', 'Ganesh']
//access student by indexing
    console.log(student[0])//print = Ram
    console.log(student[1])//print = Shyam
    console.log(student[2])//print = Manohar
    console.log(student[3])//print = Ganesh
    console.log(student[6]) //print = undefined
//3. Add Value by indexing
student[4] ="Pavan"; console.log(student); // Print = (5) ['Ram', 'Shyam', 'Manohar', 'Ganesh', 'Pavan']
student[5] ="Suresh"; console.log(student); // Print = (6) ['Ram', 'Shyam', 'Manohar', 'Ganesh', 'Pavan', 'Suresh']
student[10] ="Mahesh"; console.log(student); //Print = (11) ['Ram', 'Shyam', 'Manohar', 'Ganesh', 'Pavan', 'Suresh', empty × 4, 'Mahesh']
student[10000] ="Mahesh"; console.log(student); //Print =(10001) ['Ram', 'Shyam', 'Manohar', 'Ganesh', 'Pavan', 'Suresh', empty × 4, 'Mahesh', empty × 9989, 'Mahesh']


//====================== Curd of Array=====================
console.log('Curd of Array')
const fruits =["Apple", "Mango", "Papaya"];

console.log(fruits)
//Add Array Value
    fruits[2] = "Grapes";
    fruits[3] = "Jackfruit";
    console.log(fruits) //print = (4) ['Apple', 'Mango', 'Grapes', 'Jackfruit']

//Edit Array Value
    fruits[1] = "Lichi";
    console.log(fruits) //print = (4) ['Apple', 'Lichi', 'Grapes', 'Jackfruit']

//Read Array value
    console.log(fruits[3]) // print = Jackfruit