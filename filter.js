/*
Q. What is filter() method ?
ans : filter() method just like map() method.  filter() method returns a new array  after some coditional statement. 
      It also returns coppy of Original array. It accepts callback() function

"call back function ()" acceptes 3 pararameter
        1. "first paramater" : It is provide a Cureent vlue of array
        2. "Second paramerter" : it is return 'indexing of array'
        3. "Third Parameger" : Each loop Return Old array 

Note : 
        *. 
*/
let abc = [10, 100, 50, 40, 150, 200, 250]

    //1. returns a new array after coditional array
   
         console.log('----returns a new array after coditional array---')

        let adultGroup = abc.filter((x)=>{
        return x>=50
        })
        console.log(adultGroup)

    //2."first paramater" : It is provide a Cureent vlue of array

        console.log('----It is provide a Cureent vlue of array---')

        abc.filter((x)=>{
        console.log(x)
        })

    //3."Second paramerter" : it is return 'indexing of array'

         console.log('----It is provide a Cureent vlue of array---')

         abc.filter((x, i)=>{
         console.log(i)
         })

    //4. "Third Parameter" : Each loop Return Old array 

         console.log('----Each loop Return Old array---')

         abc.forEach((x, index, arr)=>{
            console.log(arr)
        })

        
//==================Real Example of Map Method ================================
console.log("==================Real Example of Map Method ================================")

// Real Example 1 : create a new array form given even number
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let even = numbers.filter((x)=>{
        return x%2==0
    })
    console.log(even)

// Real Example 2 : Find active user
    const users = [
        { name: "Alice", active: true },
        { name: "Bob", active: false },
        { name: "Charlie", active: true },
        { name: "David", active: false }
    ];
    const activeUsr = users.filter((user)=>{
        return user.active
    })
    console.log(activeUsr)

// Real Example 3 : Find Product based on price when less then 500
    const products = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 800 },
        { name: "Tablet", price: 300 },
        { name: "Monitor", price: 200 }
    ];
    const priceFilter = products.filter((range)=>{
        return range.price<500
    })
    console.log(priceFilter)

//Real Example 4 : filter words that less then or equal 5 character
    const words = ["apple", "banana", "grape", "orange", "kiwi", "mango"];
    const outPutWord = words.filter((char)=>{
        return char.length<=5
    })
    console.log(outPutWord)




// Real Example 5 : filter based grad
    const students = [
        { name: "John", grade: 85 },
        { name: "Jane", grade: 92 },
        { name: "Tom", grade: 67 },
        { name: "Emily", grade: 74 }
    ];
    //Tric A :=>  use Static code
        let topperGrad = students.filter((x)=>{
            return x.grade>80
        })
        console.log(topperGrad)




// Real Example 6 : like search box
        const country = [
            {state : "Bihar", capital: "Patna"},
            {state : "Uttar Pradesh", capital: "Lucknow"},
            {state : "Hariyana", capital: "Chandigarh"},
            {state : "Himachal Pradesh", capital: "Shimla"},
            {state : "Bangal", capital: "Kolkatta"},
        ]
        //Tric A :=>  use Static code
        let statesFilter = country.filter((st)=>{
            console.log(st.state.toUpperCase())
            return st.state.toUpperCase().includes('U')
        })
        console.log(statesFilter)

        //Tric B :=> use reUsable code
        function searchState(ctry, userValue){
           return ctry.filter((item)=>{
            console.log(item.state.toUpperCase())
                return item.state.toUpperCase().includes(userValue.toUpperCase())
            })
        }
        let output = searchState(country, "B")
        console.log(output)

// Real Example 7 : Find unique
//debugger
        const employ =[
            {name: "Rajnish Bharti", salary: 4000, designation : "Web Designer" },
            {name: "Rajnish Bharti", salary: 4000, designation : "Web Designer" },
            {name: "Amit Kumar", salary: 3500, designation : "Web Designer" },
            {name: "Ankit Kumar", salary: 3000, designation : "Web Designer" },
            {name: "Harshika Raana", salary: 25000, designation : "Web Developer" },
            {name: "Mayank Mohan", salary: 25000, designation : "Web Developer" },
            {name: "Suresh Thankur", salary: 25000, designation : "Software Engineer" },
            {name: "Kamal Narayan", salary: 25000, designation : "Software Engineer" },
            {name: "Kamal Narayan", salary: 25000, designation : "Software Engineer" }
        ]
        // find unique by name, salary & designation
                const uniqueEmploy = employ.filter((emp, index, currArray) =>{
                    return index ===  currArray.findIndex((t) => {
                        return t.name === emp.name || t.salary === emp.salary || t.designation === emp.designation
                    })
                });  

        console.log(uniqueEmploy)

        //sort by name (other = sort())
                let sortByName = employ.sort((x,y)=>{
                    if(x.name < y.name){
                        return -1
                    }
                })
                console.log(sortByName)

        //sort by salary (other = sort())
                let sortBySalary = employ.sort((x, y)=>{
                    return x-y
                })
                console.log(sortBySalary)


      
        

       
        
     