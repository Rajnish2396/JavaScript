/*================================================================
                            Basic Array Method
==================================================================
1. pop() = remove value from 0 indexing
2. push() = Add new value from "last" indexing
3. shift() = remove fitst falue from 0 indexing
4. unshift() = add first value from 0 indexing
5. concat() = add two array () value. It is not modifie in original array
6. indexOf() = this is return given value of index. when not match given value then return "-1"
7. includes() = finded value return "boolean" value
8. reverse() = this method use for reverse vlue of array. it is change original array
9. sort()
10. slice() =       for create a new arry.it is not change original array. it take "two argument" 
                        a) first argument =  [start] indexing, ||==> (which index to start display)
                        b) second argument = [end] indexing  ||==> (before which index to display)
              
11. splice() =      for modify ( add, edit, remove) value in existing array. it is modify in original array.
                    it take "two or three argument".
                    a) first argument =  [start] indexing, ||==> (which index to start)
                    b) second argument = how may no items  want "delete" after "first argument"
                    c) third argument = "add new value" at "deleted items"


*/
const evenNumber = [2, 4, 6, 8, 10]
const student =["Ram", "Shyam", "Suresh", "Gagan"]
console.log(student) // print = (4) ['Ram', 'Shyam', 'Suresh', 'Gagan']

//1. pop() Method
    student.pop()
    console.log(student) //print = (3) ['Ram', 'Shyam', 'Suresh']
//2. push() Method
    student.push("Mayank")
    console.log(student) //['Ram', 'Shyam', 'Suresh', 'Mayank']
    student.push("Nayan", "Kamal", "Aman");
    console.log(student) // print = (7) ['Ram', 'Shyam', 'Suresh', 'Mayank', 'Nayan', 'Kamal', 'Aman']
//3. shift() Method
     student.shift() //print = (6) ['Shyam', 'Suresh', 'Mayank', 'Nayan', 'Kamal', 'Aman']
     console.log(student)
//4. unshift() Method
    student.unshift('Pankaj')
    console.log(student) //print = (7) ['Pankaj', 'Shyam', 'Suresh', 'Mayank', 'Nayan', 'Kamal', 'Aman']
//5. concat() Method
    let myarr  =["A", "B"]
    let x = myarr.concat(student)
    console.log(x)
//6. indexOf() Method
    console.log(student)
    console.log(student.indexOf('Pankaj')) //(Matched Value) print = 0 
    console.log(student.indexOf('Shyam')) //(Matched Value) print = 1
    console.log(student.indexOf('Azad')) //(Not Matched Value) print = -1
    console.log(student.indexOf('Chander Shekhar')) //(Not Matched Value) print = -1
//7. includes() Method
    console.log(student.includes("Cat")) //(When Not Matched Value) print = false
    console.log(student.includes("Mayank")) //(When Matched Value) print = true
    console.log(student.includes("Elephant")) //(When Not Matched Value) print = false
    console.log(student.includes("Nayan")) //(When Matched Value) print = true
//8. reverse() Method
     console.log(student) // before reverst print = (7) ['Pankaj', 'Shyam', 'Suresh', 'Mayank', 'Nayan', 'Kamal', 'Aman']
     student.reverse()
     console.log(student) //after reverse print = (7) ['Aman', 'Kamal', 'Nayan', 'Mayank', 'Suresh', 'Shyam', 'Pankaj']
     evenNumber.reverse()
     console.log(evenNumber) //(5) [10, 8, 6, 4, 2]

//9. sort() Method
     const animals = ["Dog", "Elephant", "Goat", "Cat", "Bull", "Buffallow", "eagle"]
     animals.sort();
     console.log(animals)

//10. slice() Mehtod
    const statinarory =["pen", "Note Book", "Pencil", "Eraser", "Sharpner" ]  

    let st = statinarory.slice(2, 4) 
    console.log(st) //print = ["Pencil", "Eraser"]

    let st1 = statinarory.slice(1, 4) 
    console.log(st1) //print = ["Note Book", "Pencil", "Eraser"]

    let st2 =statinarory.slice(0, -3) //print = ["pen", "Note Book"]
    console.log(st2)

    let st3 =statinarory.slice(1, -3) //print = ["Note Book"]
    console.log(st3)

    let st4 =statinarory.slice(1, -1) //print = ["Note Book", "Pencil", "Eraser"]
    console.log(st4)

    let st5 =statinarory.slice(1, -2) //print = ["Note Book", "Pencil"]
    console.log(st5)

    let st6 =statinarory.slice(2, -2) //print = ["Pencil"]
    console.log(st6)

    let st7 =statinarory.slice(1, -6) //print = []
    console.log(st7)

//11. splice() Method = This method used to "add, edit, remove" in existing array.
console.log('---splice Method start form here----')

    
   
    //A. ==> Add Example
         console.log('--add Example of indexing--')

       //add in [0] indexing
            let emp1 = ["Rohan", "Ram", "Shyam", "Suresh"];
            emp1.splice(0, 0, "O_Gagan")
            console.log(emp1)
        
         //add in [1] indexing
            let emp2 = ["Rohan", "Ram", "Shyam", "Suresh"];
            emp2.splice(1, 0, "1_Gagan")
            console.log(emp2)
        
            //add in [2] indexing
            let emp3 = ["Rohan", "Ram", "Shyam", "Suresh"];
            emp3.splice(2, 0, "2_Gagan")
            console.log(emp3)

            //add from [last] indexing
            let emp4 = ["Rohan", "Ram", "Shyam", "Suresh"];
            emp4.splice(4, 0, "2_Gagan")
            console.log(emp4)
    
    //B.==> Remove Example
          console.log('--Remove Example of indexing--')

          // remove 1 value from [0]indexing (remove "Rohan")
                let emp5 = ["Rohan", "Ram", "Shyam", "Suresh"];
                emp5.splice(0, 1) 
                console.log(emp5) //print = ['Rohan', 'Shyam', 'Suresh']
        
        // remove 2 value from [0]indexing (remove "Ram" & "Shyam")
                let emp6 = ["Rohan", "Ram", "Shyam", "Suresh"];
                emp6.splice(1, 2) 
                console.log(emp6) //print = ['Rohan', 'Suresh']

        // remove 1 value from [last]indexing (remove "Ram" & "Shyam")
                let emp7 = ["Rohan", "Ram", "Shyam", "Suresh"];
                emp7.splice(emp7.lastIndexOf(), 1) 
                console.log(emp7) //print = ['Rohan', 'Shyam', 'Suresh']

    //C.==> Replace Example
        
        console.log('--Replace Example of indexing--')

                // replace "Rohan" to "Mayank" (replace value[0] indexing at "Mayank")
                    let emp8 = ["Rohan", "Ram", "Shyam", "Suresh"];
                    emp8.splice(0, 1, "Mayank")
                    console.log(emp8) // print = ["Mayank", "Ram", "Shyam", "Suresh"]

                // replace "Ram & Shyam" to "Mayank" (replace value[1, 2] indexing at "Mayank")
                    let emp9 = ["Rohan", "Ram", "Shyam", "Suresh"];
                    emp9.splice(1, 2, "Mayank",)
                    console.log(emp9) // print = ["Rohan", "Mayank", "Suresh"]

                // replace "Shyam" to "Mayank" & "Nayan" (replace value[1, 2] indexing at "Mayank")
                    let emp10 = ["Rohan", "Ram", "Shyam", "Suresh"];
                    emp10.splice(2, 1, "Mayank", "Nayan")
                    console.log(emp10) // print = ["Rohan", "Ram", "Mayank", "Nayan", "Suresh"]

                    
